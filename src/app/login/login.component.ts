import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  emailAndPasswordValidation: FormGroup;

  x: boolean;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.emailAndPasswordValidation)
  }

  /*private teste() {
    this.loginModel = new FormGroup({})
  }*/

  private initForm() {
    this.emailAndPasswordValidation =  new FormGroup({
      'email': new FormControl("", Validators.minLength(5)),
      'password': new FormControl("", Validators.minLength(8)),
    });

  
    
  }

  get email() { return this.emailAndPasswordValidation.get('email'); }

  get password() { return this.emailAndPasswordValidation.get('password'); }

}
