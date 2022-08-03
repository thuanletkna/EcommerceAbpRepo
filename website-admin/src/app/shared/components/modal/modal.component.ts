import { Component } from "@angular/core";
import { ModalService } from '../../layout/modal.service';

declare var $;

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'modal',
    templateUrl: './modal.component.html'
})

export class ModalComponent {
    get buttons() {
        return this.modalService?.option?.buttons || [];
    }

    constructor(readonly modalService: ModalService) {
        this.modalService.event.subscribe((result) => {
            if(result === 'show') {
                setTimeout(() => {
                    $('#Modal').modal('show');
                }, 200);
            }
            else if (result === 'hide') {
                setTimeout(() => {
                    $('#Modal').modal('hide');
                }, 200);
            }
        })
    }
}