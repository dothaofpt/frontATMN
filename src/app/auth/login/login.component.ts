
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // thêm file CSS nếu cần
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    // Kiểm tra xem email và mật khẩu đã được nhập chưa
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }

    // Gọi phương thức đăng nhập từ AuthService
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        alert(response.message); // Hiển thị thông báo khi đăng nhập thành công
        this.router.navigate(['/home']); // Điều hướng đến trang chính sau khi đăng nhập thành công
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'An error occurred during login.'; // Xử lý thông báo lỗi
      }
    });
  }

  goToRegister() {
    // Chuyển hướng đến trang đăng ký
    this.router.navigate(['/register']);
  }
}
