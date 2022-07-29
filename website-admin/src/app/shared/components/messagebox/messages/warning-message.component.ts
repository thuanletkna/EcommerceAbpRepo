import { Component, Input } from '@angular/core';

@Component({
  template: `<div class="d-flex text-warning align-items-center" mat-dialog-title>{{ title }}</div>
    <div class="text-center message" mat-dialog-content [innerHTML]="message | safeHTML"></div>`,
})
export class WarningMessageComponent {
  @Input() message: string;
  @Input() title: string;
}
