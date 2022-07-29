import { Component, Input } from '@angular/core';

@Component({
  template: ` <div class="text-danger d-flex align-items-center" mat-dialog-title>{{ title }}</div>
    <div class="text-center message" mat-dialog-content [innerHTML]="message | safeHTML"></div>`,
})
export class ErrorMessageComponent {
  @Input() message: string;
  @Input() title: string;
}
