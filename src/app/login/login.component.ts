import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  emailAndPasswordValidation: FormGroup;
  public validFields: boolean = false;

  
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.emailAndPasswordValidation)
  }

  public unlockButton() {
    this.validFields = true;
  }

  private initForm() {
    this.emailAndPasswordValidation =  new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required, ),
    });

  
    
  }


}
