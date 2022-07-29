import { AuthService, LoginParams } from '@abp/ng.core';
import { Component, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';

@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent extends AppBaseComponent {
  vm: LoginParams = {
    password: '',
    username: '',
    rememberMe: false,
    redirectUrl: '/',
  };

  upperCaseRegex = new RegExp('^(?=.*[A-Z])');
  lowerCaseRegex = new RegExp('^(?=.*[a-z])');
  specialCaseRegex = new RegExp('^(?=.*[!@#$%^&*])');
  numberCaseRegex = new RegExp('^(?=.*[0-9])');

  showPassword: boolean = false;

  constructor(injector: Injector, private readonly _authService: AuthService) {
    super(injector);
  }

  login() {
    this.vm.username = this.vm.username.trim();
    if (
      this.vm?.username === null ||
      this.vm?.username?.length < 1 ||
      this.vm?.password === null ||
      this.vm?.password?.length < 1
    ) {
      this.showError('Vui lòng nhập đủ thông tin để đăng nhập.');
      return;
    }

    this._authService.login(this.vm).subscribe(
      () => {},
      err => {
        const error = 'Sai username hoặc password!';
        if (
          err.error.error_description.replace(/\s/g, '').toLocaleUpperCase() ===
          error.replace(/\s/g, '').toLocaleUpperCase()
        ) {
          this.showError('Email hoặc Mật khẩu không hợp lệ!');
        } else {
          this.showError(err.error.error_description);
        }
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
