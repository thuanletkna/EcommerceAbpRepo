import { Component, Injector } from "@angular/core";
import { AppBaseComponent } from "../../app-base.component";
import { NotificationModalService } from "./notification-modal.service";

@Component({
  selector: 'notification-modal',
  templateUrl: './notification-modal.component.html'
})
export class NotificationModalComponent extends AppBaseComponent {
  get vm() {
    return this.notificationModalService.value;
  }

  get isShow() {
    return this.notificationModalService.isShow;
  }

  constructor(
    injector: Injector,
    private readonly notificationModalService: NotificationModalService) {
    super(injector);
    this.notificationModalService.actionEvent.subscribe(result => {
      if (result === "show") {
        setTimeout(() => {
          if (this.isBrowser) {
            ($('#notificationModal') as any).modal('show');
            $('#notificationModal').on('hidden.bs.modal', () => {
              this.notificationModalService.hide();
            });
          }
        }, 200);
      }
    })
  }

  buttonClick() {
    if (this.vm.buttonUrl) {
      this.redirectTo(this.vm.buttonUrl);
    }
  }
}