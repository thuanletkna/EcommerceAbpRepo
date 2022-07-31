import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonHelper } from '../../consts/common-helper';

declare var Quill;
@Component({
  selector: ' richtextbox',
  templateUrl: './richtextbox.component.html',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: RichTextBoxComponent, multi: true }],
  styles: [
    `
      .ql-container {
        resize: vertical !important;
        overflow-y: hidden;
      }

      .ql-toolbar.ql-snow {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      .modal-dialog {
        background-color: unset;
      }
    `,
  ],
})

export class RichTextBoxComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('quillFile', { static: false }) quillFileRef: ElementRef;
  quill: any;

  private innerValue: string = null;
  private onChange = new Array<(value) => void>();
  private onTouch = new Array<() => void>();
  private isInitQuillEditor = false;
  embedVideo = true;
  linkEmbed = '';
  editorId: string;

  @Input()
  height: number;

  @Input()
  width: string;

  @Input()
  required: boolean | string;
  
  @Input()
  disabled: boolean;

  get heightValue(): string {
    if (this.height) {
      return `${this.height}px`;
    }
    return '150px';
  }

  get value(): string {
    return this.innerValue;
  }

  @Input()
  set value(value: string) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.onChange.forEach(f => f(value));
    }
  }

  constructor() {
    this.editorId = `editor-${CommonHelper.newId()}`;
  }

  private initEditor() {
    if (this.disabled) {
      return;
    }

    if (this.isInitQuillEditor) {
      if (this.quill) {
        this.quill.clipboard.dangerouslyPasteHTML(0, this.value);
      }

      return;
    }

    if ($('#' + this.editorId).length === 0) {
      return;
    }

    this.isInitQuillEditor = true;

    setTimeout(() => {
      this.quill = new Quill('#' + this.editorId, {
        theme: 'snow',
        modules: {
          imageResize: {
            displaySize: true,
          },
          toolbar: {
            container: [
              //[{ size: ['small', false, 'large', 'huge'] }, { header: 2 }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ align: [] }],
              //['blockquote', 'code-block'],
              [{ color: [] }, { background: [] }],
              //[{ indent: '-1' }, { indent: '+1' }, { color: [] }, { background: [] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              //[{ script: 'sub' }, { script: 'super' }],
              // ['link'],
              //['link', 'image'],
              // ['clean'],
            ],
            handlers: {
              image: image => {
                this.customImageUpload(image);
              },
            },
          },
        },
      });

      if (this.value) {
        this.quill.clipboard.dangerouslyPasteHTML(0, this.value);
      }

      this.quill.on('editor-change', eventName => {
        this.value = this.quill.container.firstChild.innerHTML;
      });

      if (this.width) {
        $('.editor-container').css('max-width', 'unset');
        $('.editor-container').css('width', this.width);
      }
    }, 100);
  }

  ngAfterViewInit(): void {
    this.initEditor();
  }

  touch() {
    this.onTouch.forEach(f => f());
  }

  writeValue(obj: any): void {
    if (obj) {
      this.innerValue = obj;
    } else {
      this.innerValue = '';
    }

    this.initEditor();
  }

  registerOnChange(fn: any): void {
    this.onChange.push(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch.push(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.isInitQuillEditor = false;
    this.quill = null;
    this.initEditor();
  }

  customImageUpload(image: any) {
    if (image) {
      this.quillFileRef.nativeElement.click();
    }
  }

  quillFileSelected(ev: any) {
    // const formData = new FormData();
    // formData.append('media', ev.target.files[0])
    // this.mediaService.uploads(formData, 'image').subscribe((data) => {
    //     const urlFile = CommonHelper.getUrlMedia(data[0].id);
    //     const range = this.quill.getSelection();
    //     this.quill.insertEmbed(range.index, 'image', urlFile);
    //     this.value = this.quill.container.firstChild.innerHTML;
    // });
  }
}
