import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      psd: [null, [Validators.required]],
      accountNumber: [null, [Validators.required]],
    });
  }

  /**
   * @author: 侠岚
   * @description: 登录
   * @Date: 2020-08-19 16:22:44
   */
  login(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid){
      this.router.navigate(['/']);
    }
  }
}
