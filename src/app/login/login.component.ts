
import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})

export class LoginComponent implements OnInit{

  emailAndPasswordValidation: FormGroup;
  public validFields: boolean = false;
  email: string;
  password : string;
  public logged: boolean = false;


  
  constructor(private authGuard: AuthGuardService) { 
    

  }

  ngOnInit(): void {
    this.initForm();
  }

  public static teste() {
    
  }


  

  onSubmit() {

    this.authGuard.logged = true;
    
    if(this.email == 'user@user.com' && this.password == '123') {
      this.logged = true;
      this.authGuard.setLogged(true);
    } else { this.logged = false }
    
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
