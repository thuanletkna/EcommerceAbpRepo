import {
  AuthService,
  LocalizationService,
  PermissionService,
  CurrentUserDto,
  ConfigStateService,
  SessionStateService,
} from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { IOptionPopup, MessageBoxComponent } from './components/messagebox/messagebox.component';
import { Status, NatsStatus } from './enums';
import { NcsPermissions } from './consts/ncs-permissions';
import { TypeOfEvent } from './enums/typeofevent';
import { MasterTable } from './enums/mastertable';

export class AppBaseComponent {
  protected readonly permissionService: PermissionService;
  protected readonly oAuthService: OAuthService;
  protected readonly authService: AuthService;
  protected readonly router: Router;
  protected readonly localizationService: LocalizationService;
  protected readonly toastService: ToasterService;
  protected readonly activeRoute: ActivatedRoute;
  protected readonly configState: ConfigStateService;
  protected readonly sessionState: SessionStateService;
  protected readonly matDialog: MatDialog;

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  get currentUser(): CurrentUserDto {
    return this.configState.getOne('currentUser');
  }

  get currentUserId(): string {
    return this.currentUser?.id;
  }

  get listStatus(): number[] {
    const result = [];
    for (const status in Status) {
      if (!isNaN(Number(status))) {
        result.push(Number(status));
      }
    }

    return result.sort((a,b) => b - a);
  }

  get listTypeOfEvent(): number[] {
    const result = [];
    for (const typeofevent in TypeOfEvent) {
      if (!isNaN(Number(typeofevent))) {
        result.push(Number(typeofevent));
      }
    }

    return result;
  }

  get listMasterTable(): number[] {
    const result = [];
    for (const mastertable in MasterTable) {
      if (!isNaN(Number(mastertable))) {
        result.push(Number(mastertable));
      }
    }

    return result;
  }

  get listNatsStatus(): number[] {
    const result = [];
    for (const status in NatsStatus) {
      if (!isNaN(Number(status))) {
        result.push(Number(status));
      }
    }

    return result;
  }

  get listYear(): number[] {
    if (this._listYear) {
      return this._listYear;
    }

    const nextYear = new Date().getFullYear() + 2;
    let startYear = 2000;
    if (this.getGrantedPolicy(NcsPermissions.ViewUnlimitedYear.Default)) {
        // startYear = environment.application.startYear;
    } else {
        startYear = new Date().getFullYear() - 5;
    }
    
    this._listYear = [];
    for (let i = nextYear; i >= startYear; i--) {
      this._listYear.push(i);
    }

    return this._listYear;
  }

  set listYear(value: number[]) {
    this._listYear = value;
  }

  private _listYear: number[];

  constructor(injector: Injector) {
    this.permissionService = injector.get(PermissionService);
    this.oAuthService = injector.get(OAuthService);
    this.authService = injector.get(AuthService);
    this.router = injector.get(Router);
    this.localizationService = injector.get(LocalizationService);
    this.toastService = injector.get(ToasterService);
    this.activeRoute = injector.get(ActivatedRoute);
    this.configState = injector.get(ConfigStateService);
    this.sessionState = injector.get(SessionStateService);
    this.matDialog = injector.get(MatDialog);
  }

  getGrantedPolicy(key: string) {
    // if (this.currentUser.userName === 'admin') {
    //   return true;
    // }
    return this.permissionService.getGrantedPolicy(key);
  }

  l(key: string, ...interpolateParams: string[]): string {
    return this.localizationService.instant(key, ...interpolateParams);
  }

  redirectTo(url: string, params?: NavigationExtras): void {
    this.router.navigate([url], { relativeTo: this.activeRoute, ...params });
  }

  goback(): void {
    this.redirectTo('./',
      {
        queryParamsHandling: 'merge',
        relativeTo: this.activeRoute.pathFromRoot[this.activeRoute.pathFromRoot.length - 2]
      }
    );
  }

  // login() {
  //   this.authService.navigateToLogin();
  // }

  // logout() {
  //   this.authService.logout().subscribe();
  // }

  protected getParam(param: string): string {
    return this.activeRoute.snapshot.paramMap.get(param);
  }

  protected getQueryParam(param: string): string {
    return this.activeRoute.snapshot.queryParamMap.get(param);
  }

  protected showSuccess(message: string): void {
    this.toastService.success(message);
  }

  protected showError(message: string): void {
    this.toastService.error(message);
  }

  protected showWarning(message: string): void {
    this.toastService.warn(message);
  }

  protected showSaveSuccess(): void {
    this.showSuccess(this.l('::SaveSuccessfully'));
  }

  protected showUpdateSuccess(): void {
    this.showSuccess(this.l('::UpdateSuccessfully'));
  }

  protected showDeleteSuccess(): void {
    this.showSuccess(this.l('::DeleteSuccessfully'));
  }

  protected showSaveError(): void {
    this.showError(this.l('::FailedToSaveData'));
  }

  protected showUpdateError(): void {
    this.showError(this.l('::FailedToUpdateData'));
  }

  protected showDeleteError(): void {
    this.showError(this.l('::FailedToDeleteData'));
  }

  protected openPopup(option: IOptionPopup, width = '400px'): void {
    this.matDialog.open(MessageBoxComponent, {
      width,
      data: option,
    });
  }

  protected openDeleteConfirm(itemName: string, callBack: () => void): void {
    this.openPopup({
      title: this.l('::AreYouSure'),
      message: this.l('::ItemWillBeDeletedMessageWithFormat', '<strong>' + itemName + '</strong>'),
      type: 'Question',
      btnClose: {
        label: this.l('::No'),
      },
      btnOk: {
        callBack,
        label: this.l('::Yes'),
      },
    });
  }

  protected openToggleStatusConfirm(entityName: string, status: string, callBack: () => void): void {
    this.openPopup({
      title: this.l('::UpdateStatus'),
      message: this.l('::ToggleStatusConfirm', entityName, status),
      type: 'Question',
      btnClose: {
        label: this.l('::No')
      },
      btnOk: {
        callBack,
        label: this.l('::Yes'),
      },
    });
  }
}
