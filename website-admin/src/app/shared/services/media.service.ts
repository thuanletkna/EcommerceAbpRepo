import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

declare var AWS: any;
@Injectable({ providedIn: 'root' })
export class MediaService {
    private _uploadingEvent = new BehaviorSubject<number>(0);
    private _imgSizeLimitExceeded = new Subject<boolean>();

    get imgSizeLimitExceeded() {
        return this._imgSizeLimitExceeded.asObservable();
    }

    get uploadingEvent() {
        return this._uploadingEvent;
    }
    private startTime: Date = new Date();
    private partSize = 1024 * 1024 * 10;
    private rejectFunc: () => void;

    private get bucket() {
        return new AWS.S3({
            accessKeyId: environment.s3Config.accessKey,
            secretAccessKey: environment.s3Config.secretKey,
            endpoint: new AWS.Endpoint(environment.s3Config.endpoint),
            params: {
                Bucket: environment.s3Config.bucket,
            },
        });
    }

    constructor() {}

    async uploadMulti(files: FileList): Promise<IS3UploadComplete[]> {
        return await Promise.all(Object.values(files).map((f) => this.uploads(f)));
    }

    uploads(file: File): Promise<IS3UploadComplete> {
        const limit = 1 * 1024 * 1024; // Mb => bytes
        var date = new Date();
        const url = `${environment.s3Config.path}/${date.getFullYear()}/${
            date.getMonth() + 1
        }/${date.getDate()}/${file.name}`;
        if (file.size > limit) {
            this._imgSizeLimitExceeded.next(true);
            return Promise.resolve(null) ;
        }

        return new Promise((res, rej) => {
            this.rejectFunc = rej;

            this.uploadFile(file, url, (result) => {
                res(result);
            });
        });
    }

    delete(key: string) {}

    private uploadFile(
        file: File,
        key: string,
        callBack: (result: IS3UploadComplete) => void,
        isPublic: boolean = true,
    ) {
        // this.file = file;
        if (file) {
            this.startTime = new Date();
            const params = {
                Key: key,
                ContentType: file.type,
            };
            // if (isPublic) {
            //     params['ACL'] = 'public-read';
            // }
            // Multipart
            this.bucket.createMultipartUpload(params, (mpErr, multipart) => {
                if (mpErr) {
                    console.log('Error!', mpErr);
                    if (this.rejectFunc) this.rejectFunc();
                    return;
                }
                // console.log('Got upload ID', multipart.UploadId);
                this.uploadPart(file, multipart, 1, 0, key, callBack);
            });
        } else {
            this.rejectFunc();
            // console.log('nothing upload');
        }
    }

    private getETag(uploadId, totalPart, key, callBack: (result: IS3UploadComplete) => void) {
        console.log('Completing upload...');
        this._uploadingEvent.next(95);
        const listPartParams = {
            Key: key,
            UploadId: uploadId,
            MaxParts: totalPart,
            PartNumberMarker: 0,
        };
        this.bucket.listParts(listPartParams, (err, data) => {
            if (err) {
                return;
            } // an error occurred
            // successful response
            const multipartMap = {
                Parts: [],
            };

            for (let i = 0; i < data.Parts.length; i++) {
                const aPart = data.Parts[i];
                multipartMap.Parts[i] = {
                    ETag: aPart.ETag,
                    PartNumber: Number(aPart.PartNumber),
                };
            }
            const doneParams = {
                Key: key,
                MultipartUpload: multipartMap,
                UploadId: uploadId,
            };

            this.completeMultipartUpload(doneParams, callBack);
        });
    }

    private completeMultipartUpload(doneParams, callBack: (result: IS3UploadComplete) => void) {
        this.bucket.completeMultipartUpload(doneParams, (err, data) => {
            if (err) {
                this.rejectFunc();
            } else {
                // const delta = (new Date().getTime() - this.startTime.getTime()) / 1000;
                this._uploadingEvent.next(100);
                if (callBack) {
                    callBack(data);
                }
            }
        });
    }

    private uploadPart(
        file: File,
        multipart,
        partNum,
        rangeStart,
        key,
        callBack: (result: IS3UploadComplete) => void,
    ) {
        const percent = (rangeStart / file.size) * 100;
        this._uploadingEvent.next(percent >= 100 ? 90 : percent);
        if (file.size <= rangeStart) {
            this.getETag(multipart.UploadId, partNum - 1, key, callBack);
            return;
        }
        const reader: FileReader = new FileReader();
        reader.readAsArrayBuffer(file.slice(rangeStart, rangeStart + this.partSize));
        reader.onload = () => {
            let byte2Upload = null;
            byte2Upload = reader.result;
            const partParams = {
                Body: byte2Upload,
                Key: key,
                PartNumber: String(partNum),
                UploadId: multipart.UploadId,
            };
            this.bucket.uploadPart(partParams, (multiErr, mData) => {
                if (multiErr) {
                    this.rejectFunc();
                    // console.log('multiErr, upload part error:', multiErr);
                    return;
                }
                byte2Upload = null;
                this.uploadPart(
                    file,
                    multipart,
                    partNum + 1,
                    rangeStart + this.partSize,
                    key,
                    callBack,
                );
            });
        };
    }
}

export interface IS3UploadComplete {
    Bucket: string;
    ETag: string;
    Key: string;
    Location: string;
}
