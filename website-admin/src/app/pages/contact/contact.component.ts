import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { AppHeaderService } from 'src/app/shared/layout/app-header.service';
import { NgForm } from '@angular/forms';
import { Status } from 'src/app/shared/enums';
import { ContactDto } from 'src/app/shared/models/contact/contact.dto';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
    templateUrl: './contact.component.html'
})
export class ContactComponent extends AppBaseComponent implements OnInit {
    @ViewChild('formEdit') formEdit: NgForm;
    private _isProcessing = false;
    vm: ContactDto = { status: Status.Active };
    get disableSave() {
        return this._isProcessing;
    }
    constructor(injector: Injector,
        private readonly _contactService: ContactService,
        private readonly _appHeaderService: AppHeaderService,
    ) {
        super(injector);
        this._appHeaderService.option = {
            pageTitle: 'Contact'
        }
    }

    ngOnInit(): void {
        this._contactService.getAll().subscribe(result => {
            this.vm = result.length > 0 ? result[0] : { status: Status.Active };
        });

    }

    save(): void {

        if (!this.formEdit?.valid) {
            this.showError('Missing required information (*).');
            return;
        }
        this._contactService.save(this.vm).subscribe((result) => {
            this.showSaveSuccess();
        });

    }
}
