import { LocalizationService } from '@abp/ng.core';
import { AfterViewInit, Component, ComponentFactoryResolver, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnchorDirective } from '../../directives/anchor.directive';
import { ErrorMessageComponent } from './messages/error-message.component';
import { InformationMessageComponent } from './messages/information-message.component';
import { QuestionMessageComponent } from './messages/question-message.component';
import { WarningMessageComponent } from './messages/warning-message.component';

@Component({
  templateUrl: './messagebox.component.html',
})
export class MessageBoxComponent implements AfterViewInit {
  @ViewChild(AnchorDirective) anchorDirective: AnchorDirective;

  get labelClose(): string {
    return this.data.btnClose?.label || this.l('AbpUi::Close');
  }

  get labelOk(): string {
    return this.data.btnOk?.label || this.l('AbpUi::Ok');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IOptionPopup,
    private readonly componentFactory: ComponentFactoryResolver,
    private readonly localizationService: LocalizationService
  ) {}
  l(key: string): string {
    return this.localizationService.instant(key);
  }
  ngAfterViewInit(): void {
    this.loadMessage();
  }

  private loadMessage() {
    let component;
    switch (this.data?.type) {
      case 'Error':
        component = ErrorMessageComponent;
        break;
      case 'Warning':
        component = WarningMessageComponent;
        break;
      case 'Question':
        component = QuestionMessageComponent;
        break;
      default:
        component = InformationMessageComponent;
    }
    const componentFactory = this.componentFactory.resolveComponentFactory(component);

    const viewContainerRef = this.anchorDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory) as any;
    componentRef.instance.message = this.data?.message;
    componentRef.instance.title = this.data?.title;
  }
}

export interface IOptionPopup {
  title: string;
  message: string;
  btnClose?: {
    label?: string;
    callBack?: () => any;
  };
  btnOk?: {
    label?: string;
    callBack?: () => any;
  };
  type?: 'Information' | 'Warning' | 'Error' | 'Question';
}
