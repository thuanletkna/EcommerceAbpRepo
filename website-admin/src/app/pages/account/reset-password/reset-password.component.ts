import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app-base.component';
import { ChangePasswordDto } from 'src/app/shared/models/user/change-password.dto';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  templateUrl: 'reset-password.component.html',
})
export class ResetPasswordComponent extends AppBaseComponent implements OnInit {

  get code() {
    return this.getQueryParam('code');
  }

  vm: ChangePasswordDto = { code: this.code };
  confirmPassword: string;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  upperCaseRegex = new RegExp('^(?=.*[A-Z])');
  lowerCaseRegex = new RegExp('^(?=.*[a-z])');
  specialCaseRegex = new RegExp('^(?=.*[!@#$%^&*])');
  numberCaseRegex = new RegExp('^(?=.*[0-9])');

  passwordMessage = "Mật khẩu phải sử dụng tối thiểu 8 ký tự, và tối đa 15 ký tự, bao gồm số, chữ thường, chữ in hoa và ký tự đặc biệt."


  constructor(
    injector: Injector,
    private readonly userService: UserService
    ) {
    super(injector);
  }

  
  ngOnInit(): void {
    this.userService.validChangePasswordCode(this.code).subscribe(response => {
      if (!response) {
        this.showError('Đường dẫn không hợp lệ');
        setTimeout(() => {
          this.redirectTo('/account/login');
        }, 1000);
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  submit() {
    if (
      this.vm?.password === undefined ||
      this.vm?.password === null ||
      this.vm?.password?.length < 1 ||
      this.confirmPassword === undefined ||
      this.confirmPassword === null ||
      this.confirmPassword?.length < 1
    ) {
      this.showError('Vui lòng nhập đủ thông tin mật khẩu.');
      return;
    }

    if (this.vm.password.length < 8) {
      this.showError(this.passwordMessage);
      return;
    }

    if (this.vm.password.length > 15) {
      this.showError(this.passwordMessage);
      return;
    }

    if(!this.upperCaseRegex.test(this.vm.password)){
      this.showError(this.passwordMessage);
      return;
    } 
    
    if(!this.lowerCaseRegex.test(this.vm.password)){
      this.showError(this.passwordMessage);
      return;
    }
    
    if(!this.specialCaseRegex.test(this.vm.password)){
      this.showError(this.passwordMessage);
      return;
    }
    
    if(!this.numberCaseRegex.test(this.vm.password)){
      this.showError(this.passwordMessage);
      return;
    }

    if (this.vm?.password !== this.confirmPassword) {
      this.showError('Mật khẩu nhập chưa trùng khớp.');
      return;
    }

    this.userService.changePassword(this.vm).subscribe(response => {
      this.showSuccess('Đổi mật khẩu thành công.')
      this.redirectTo('/account/login');
    });
  }
}
