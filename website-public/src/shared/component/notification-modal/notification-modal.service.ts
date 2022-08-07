import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface NotificationData {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonUrl?: string;
}

@Injectable()
export class NotificationModalService {
  private _show = false;
  private _actionEvent = new BehaviorSubject<'hide' | 'show'>('hide');
  private _value: NotificationData = {};

  get actionEvent() {
    return this._actionEvent.asObservable();
  }

  get isShow() {
    return this._show;
  }

  get value() {
    return this._value;
  }

  show(input: NotificationData) {
    this._value = input;
    this._show = true;
    this._actionEvent.next('show');
  }

  hide() {
    this._show = false;
    this._actionEvent.next('hide');
  }
}