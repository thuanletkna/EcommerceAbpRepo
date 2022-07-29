import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { MessageBoxComponent } from './components/messagebox/messagebox.component';
import { ErrorMessageComponent } from './components/messagebox/messages/error-message.component';
import { InformationMessageComponent } from './components/messagebox/messages/information-message.component';
import { QuestionMessageComponent } from './components/messagebox/messages/question-message.component';
import { WarningMessageComponent } from './components/messagebox/messages/warning-message.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { AnchorDirective } from './directives/anchor.directive';
import { ThirdPartyModule } from './third-party.module';

const defineComponents = [
  MessageBoxComponent,
  ErrorMessageComponent,
  InformationMessageComponent,
  QuestionMessageComponent,
  WarningMessageComponent,
  DatatableComponent,
  // ImageComponent,
  // UploadImageComponent,
  // UploadFileComponent,
  // UploadVideoComponent,
  // RichTextBoxComponent,
  // SlideViewComponent,
  // VideoViewComponent,
  // PDFViewComponent,
  // OfficeViewComponent,
  // PopupChartComponent
];
const pipes = [SafeHTMLPipe];
const directives = [AnchorDirective];
@NgModule({
  declarations: [...defineComponents,...pipes,...directives],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ThirdPartyModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    ThirdPartyModule,
    ...defineComponents,
    ...pipes,
    ...directives
  ],
  providers: []
})
export class SharedModule {}
