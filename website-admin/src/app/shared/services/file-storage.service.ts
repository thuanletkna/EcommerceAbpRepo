import { Rest } from '@abp/ng.core';
import { RestService } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileStorageDto } from '../models/file-storage/file-storage.dto';
@Injectable({ providedIn: 'root' })
export class FileStorageService {
  constructor(private readonly restService: RestService, private readonly toasterService: ToasterService) { }

  getNatsFile(stopId: string): Observable<FileStorageDto[]> {
    return this.restService.request({
      url: '/api/app/file-storage/stop-file/' + stopId,
      method: 'GET',
    });
  }

  getDetail(id: string): Observable<FileStorageDto> {
    return this.restService.request({
      url: '/api/app/file-storage/' + id + '/detail',
      method: 'GET',
    });
  }

  get(id: string): Observable<string> {
    const request: Rest.Request<null> = {
      url: '/api/app/file-storage/' + id,
      method: 'GET',
      responseType: 'blob'
    };

    return this.restService.request<null, HttpResponse<any>>(
      request,
      {
        observe: Rest.Observe.Response
      }
    ).pipe(
      map(response => {
        if (response.body) {
          return URL.createObjectURL(response.body);
        }
        return null;
      })
    );
  }

  delete(id: string): Observable<void> {
    return this.restService.request({
      url: '/api/app/file-storage/' + id,
      method: 'DELETE',
    });
  }

  upload(type: string, files: File[]): Observable<string[]> {

    if (!files || files.length === 0) {
      return new Observable(ob => {
        ob.next(null);
      });
    }


    let url = '/api/app/file-storage/upload?type=' + type;
    const body = new FormData();
    if (files?.findIndex(x => (x?.size > 20 * 1024 * 1024)) > -1) {
      this.toasterService.error(`Uploaded files cannot be larger than 20MB.`);
      return new Observable<string[]>(observable => {
        observable.error('Select file size up to 20MB');
        return function unsub() { };
      });
    }
    files.forEach((item, index) => {
      body.append('file' + index, item);
    });
    return this.restService.request({
      url,
      method: 'POST',
      body
    });
  }

  downloadSampleExport(): Observable<string> {
    const request: Rest.Request<null> = {
      url: '/api/app/sample/export',
      method: 'GET',
      responseType: 'blob'
    };

    return this.restService.request<null, HttpResponse<any>>(
      request,
      {
        observe: Rest.Observe.Response
      }
    ).pipe(
      map(response => {
        if (response.body) {
          return URL.createObjectURL(response.body);
        }
        return null;
      })
    );
  }

  /**
   * Upload files and add recordId to FileStorage.NatsId.
   * @param natsId id of record contain file
   * @returns list of fileId.
   */
  uploadNatsFile({ files, natsId, storage }: { natsId: string, files: File[], storage?: string, }): Observable<string[]> {

    if (!files || files.length === 0) {
      return new Observable(ob => {
        ob.next(null);
      });
    }


    let url = '/api/app/file-storage/save-nats-file/' + natsId;
    const body = new FormData();
    if (files?.findIndex(x => (x?.size > 20 * 1024 * 1024)) > -1) {
      this.toasterService.error(`Uploaded files cannot be larger than 20MB.`);
      return new Observable<string[]>(observable => {
        observable.error('Select file size up to 20MB');
        return function unsub() { };
      });
    }
    files.forEach((item, index) => {
      body.append('file' + index, item);
    });
    return this.restService.request({
      url,
      method: 'POST',
      body,
      params: {
        storage,
      },
    });
  }
}
