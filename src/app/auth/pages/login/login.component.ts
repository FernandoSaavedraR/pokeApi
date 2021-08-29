import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  display: boolean = false;
  loginForm: FormGroup = this.fb.group({
    usuario: [, Validators.required],
    password: [, Validators.required],
  });

  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    if (this.loginForm.invalid) {
      this.display = true;
      return;
    }
    const loginInfo = { ...this.loginForm.value };
    this.authService
      .login(loginInfo['usuario'], loginInfo['password'])
      .subscribe((res) => {
        if (res.length > 0) {
          this.router.navigate(['./','pokemon']);
        } else {
          this.display = true;
        }
      });
  }
  show() {
    this.showPassword = !this.showPassword;
  }
}
