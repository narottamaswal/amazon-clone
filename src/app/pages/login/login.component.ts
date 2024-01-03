import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm!: FormGroup


  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.LoginForm = this.fb.group({
      email: [''],
      password:['']
    })
  }

  signIn(){
    this.auth.signIN(this.LoginForm.value.email, this.LoginForm.value.password)
  }

  createAccount(){
    this.auth.signUp(this.LoginForm.value.email, this.LoginForm.value.password) 

  }
}
