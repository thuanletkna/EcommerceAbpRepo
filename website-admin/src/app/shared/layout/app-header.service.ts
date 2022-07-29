import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AppHeaderService {
  option: HeaderOption;
  private _logoUpdateEvent = new BehaviorSubject<string>('');
  private _buttonEvents = new BehaviorSubject<string>('');
  public get clickButton(): Observable<string> {
    return this._buttonEvents.asObservable();
  }

  public get logoUpdate(): Observable<string> {
    return this._logoUpdateEvent.asObservable();
  }

  constructor() { }

  click(buttonName: string) {
    this._buttonEvents.next(buttonName);
  }

  updateLogo(filedId: string) {
    this._logoUpdateEvent.next(filedId);
  }

}

export interface HeaderOption {
  pageTitle: string;
  buttons?: {
    name: string;
    title: string;
    class?: string;
    icon?: string;
    permission?: string;
    visible?: boolean;
    click?: () => void;
  }[];
}

