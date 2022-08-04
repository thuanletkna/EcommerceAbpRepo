import { AfterViewInit, Component, EventEmitter, Injector, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppBaseComponent } from '../../app-base.component';
import { CommonHelper } from '../../consts/common-helper';
import { FileStorageDto } from '../../models/file-storage/file-storage.dto';
import { FileStorageService } from '../../services/file-storage.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: UploadFileComponent, multi: true }
  ]
})
export class UploadFileComponent extends AppBaseComponent implements ControlValueAccessor, AfterViewInit, OnChanges {
  private innerValue: File | string = null;
  private onChange = new Array<(value) => void>();
  private onTouch = new Array<() => void>();
  @Input() fileId: string;
  @Input() autoUpload = false;
  @Input() typeFile: string;
  @Input() accept: string;
  @Input() maxSize: number;
  @Input() maxDuration: number;

  get isChanging() {
    return this.fileInput.val() !== '';
  }

  fileInputId: string;
  fileName: string;

  get value(): File | string {
    return this.innerValue;
  }

  get hasSource(): boolean {
    if (this.fileStorage?.id) {
      return true;
    }
    return this.innerValue !== null && this.innerValue !== undefined ? true : false;
  }

  set value(value: File | string) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.onChange.forEach(f => f(value));
    }
  }

  fileStorage: FileStorageDto = {};

  @Input()
  disabled: boolean;
  @Output()
  fileChange = new EventEmitter<File | string>();

  private get fileInput() {
    return $('#' + this.fileInputId);
  }

  constructor(
    injector: Injector,
    private readonly _fileStorageService: FileStorageService) {
    super(injector);
    this.fileInputId = 'input' + CommonHelper.newId();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fileId?.currentValue !== changes.fileId?.previousValue) {
      this._getFileDetail();
    }
  }
  ngAfterViewInit(): void {
    return;
  }

  cancel() {
    this.fileInput.val('');
    this.value = null;
    this.fileChange.emit(null);

    this._getFileDetail();
  }

  selectFile() {
    if (!this.disabled) {
      this.fileInput.trigger('click');
    }
  }

  downloadFile() {
    if (this.disabled) {
      return;
    }
    if (this.value) {
      return;
    }
    if (!this.fileStorage?.id) {
      return;
    }
    this._fileStorageService.get(this.fileStorage.id).subscribe(result => {
      CommonHelper.downloadFile(result, this.fileStorage.downloadFileName);
    });
  }

  fileSelectionChange(event) {
    if (event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    this.fileName = file.name;

    if (this.accept && this.accept.split(',').findIndex(x => this.fileName.endsWith(x.trim())) === -1) {
      this.showError(`Only accept files: ${this.accept}`)
      this.fileInput.val('');
      return;
    }

    if (this.maxSize && file.length > this.maxSize) {
      this.showError(`File size must be less than or equal to ${ Math.round((this.maxSize / 1024) / 10.24) * 100 }MB`);
      return;
    }

    if (this.autoUpload) {
      this._fileStorageService.upload(this.typeFile, [file])
      .subscribe(result => {
        if (result?.length) {
          this.value = result[0];
          this.fileInput.val('');
          this.fileChange.emit(result[0]);
        }
      })
    }
    else {
      this.value = file;
      this.fileInput.val('');
      this.fileChange.emit(file);
    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.innerValue = obj;
      
      if (typeof obj === 'string') {
        this.fileId = obj;
        this._getFileDetail();
      }
      
    }
    else {
      this.innerValue = null;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange.push(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch.push(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  touch() {
    this.onTouch.forEach(f => f());
  }

  private _getFileDetail() {
    if (this.fileId) {
      this._fileStorageService.getDetail(this.fileId).subscribe(result => {
        this.fileStorage = result || {};
      });
    }
    else {
      this.fileStorage = {};
    }
  }
}
