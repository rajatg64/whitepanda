import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user';

import { RegresService } from '../../services/regres.service';

@Component({
  selector: 'login-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: boolean = false;
  message = '';
  public form: FormGroup;

  constructor(private service: RegresService,
              private _fb: FormBuilder) { }

  registerUser(user: User) {
    this.service.register(user)
        .subscribe(this.isSuccess.bind(this), this.isSuccess.bind(this))
  }

  loginUser(user: User) {
    this.service.login(user)
        .subscribe(this.isSuccess.bind(this), this.isSuccess.bind(this))
  }

  isSuccess(res) {
    console.log('res: ', res)
    if(res.token) {
      this.success = true;
      this.message = 'Login successful';
    }
    else {
      this.success = false;
      console.log(this.message)
      this.message = 'Login unsuccessful';
      console.log(this.message)
    }
  }

  toggleOverlay() {
    this.message = '';
  }

  ngOnInit() {
    this.form = this._fb.group({
            email: ['', [<any>Validators.required]],
            password:['', [<any>Validators.required]]
        });
  }

}
