import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user';
// import { Register } from '../../models/register';
import { RegresService } from '../../services/regres.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  success: boolean = false;
  message = '';
  public form: FormGroup;

  constructor(private service: RegresService,
              private _fb: FormBuilder) { }

  registerUser(user: User) {
    this.service.register(user)
        .subscribe(this.isSuccess.bind(this), this.isSuccess.bind(this))
  }

  isSuccess(res) {
    console.log('res: ', res)
    if(res.token) {
      this.success = true;
      this.message = 'Registered successfully';
    }
    else {
      this.success = false;
      console.log(this.message)
      this.message = 'Registration unsuccessful';
      console.log(this.message)
    }
  }

    toggleOverlay() {
      this.message = '';
    }

  ngOnInit() {
    this.form = this._fb.group({
            firstName: ['', [<any>Validators.required]],
            lastName: ['', [<any>Validators.required]],
            email: ['', [<any>Validators.required]],
            password:['', [<any>Validators.required]]
        });
  }

}
