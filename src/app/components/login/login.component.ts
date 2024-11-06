import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly _AuthService =inject(AuthService) 
  private _FormBuilder=inject(FormBuilder)
  private _Router=inject(Router)
  LoginSub!:Subscription
  
  login:FormGroup=this._FormBuilder.group({
   
    email:['ahmed@email.com',[Validators.required,Validators.email]],
    password:['password',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,}$/)]],
  
  })

data!:object
loginSubmit():void{


   this._AuthService.login(this.login.value).subscribe({
      next:(res)=>{
        
        localStorage.setItem("userToken",JSON.stringify(res.access_token))
        localStorage.setItem('userinfo',JSON.stringify(res.UserLogin))
        console.log(res)
        this._Router.navigate(['/home'])
       
      },
      
    })

}

}
