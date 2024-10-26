

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError, of } from 'rxjs'; // Import catchError và of từ rxjs

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  private apiUrl = 'http://localhost:5000/api/auth/register'; // URL API đăng ký

  constructor(private router: Router, private http: HttpClient) {}

  onRegister() {
    // Gọi API để đăng ký người dùng
    this.http.post(this.apiUrl, { name: this.name, email: this.email, password: this.password })
      .pipe(
        catchError(error => {
          this.errorMessage = error.error.message || 'Đã có lỗi xảy ra!';
          return of(null); // Trả về một observable rỗng
        })
      )
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/login']); // Chuyển hướng sang trang đăng nhập
        }
      });
  }

  goToLogin() {
    this.router.navigate(['/login']); // Chuyển hướng đến trang đăng nhập
  }
}
