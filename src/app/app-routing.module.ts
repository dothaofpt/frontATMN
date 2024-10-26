
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Router cho trang đăng nhập
  { path: 'register', component: RegisterComponent }, // Router cho trang đăng ký
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Chuyển hướng về trang đăng nhập khi mở ứng dụng
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
