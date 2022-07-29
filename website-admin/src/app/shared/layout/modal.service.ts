import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class ModalService {
    option: ModalOption;
    text = '';
    private _show = false;
    private _event = new BehaviorSubject<'hide' | 'show'>('hide');
    private _actionEvent = new BehaviorSubject<string>('');

    get event(): Observable<'hide' | 'show'> {
        return this._event.asObservable();
    }

    private actionEvent(): Observable<string> {
        return this._actionEvent.asObservable();
    }

    click(buttonName: string) {
        this._actionEvent.next(buttonName);
    }

    showModal() {
        this._show = true;

        this._event.next('show');
    }

    hideModal() {
        this._show = false;

        this._event.next('hide');
    }

    get show() {
        return this._show;
    }
}

export interface ModalOption {
    title: string;
    isHasText: boolean;
    zoomImage?: any;
    buttons?: {
        name: string;
        title: string;
        class?: string;
        icon?: string;
        permission?: string;
        click?: () => void;
    }[];
}