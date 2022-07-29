import { Component, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  templateUrl: 'forgot-password.component.html',
})
export class ForgotPasswordComponent extends AppBaseComponent {

  email: string;

  constructor(
    injector: Injector,
    private readonly userService: UserService
    ) {
    super(injector);
  }

  submit() {
    if (
      this.email === undefined ||
      this.email === null ||
      this.email.length < 1
    ) {
      this.showError('Vui lòng nhập email.');
      return;
    }

    if(!this.validateEmail(this.email)){
      this.showError('Email không hợp lệ.');
      return;
    }

    this.userService.requestChangePassword({ email: this.email }).subscribe(result => {
      this.showSuccess('Yêu cầu đổi mật khẩu thành công. Hãy kiểm tra lại mail.')
      this.redirectTo('/account/login');
    });
  }

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
}
