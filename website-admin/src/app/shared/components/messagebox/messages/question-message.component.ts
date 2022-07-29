import { Component, Input } from '@angular/core';

@Component({
  template: `<div class="d-flex text-primary align-items-center" mat-dialog-title>{{ title }}</div>
    <div class="text-center message" mat-dialog-content [innerHTML]="message | safeHTML"></div>`,
})
export class QuestionMessageComponent {
  @Input() message = '';
  @Input() title = '';
}
