import { Component,  Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router , private _CartService:CartService){}
isLoading:boolean = false
errorMsg:string = ''
userEmail =  localStorage.getItem('userEmail')
loginForm:FormGroup = new FormGroup({
  email: new FormControl( this.userEmail  , [Validators.required , Validators.email]),
  password: new FormControl(null , [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) , Validators.required])
})

rePasswordMatched(registerForm:any){
  let passwordControl = registerForm.get('password')
  let rePasswordControl = registerForm.get('rePassword')
  if (passwordControl?.value == rePasswordControl?.value) {
    return null
  }else{
    rePasswordControl?.setErrors({passwordMatch : 'Must match password'})
    return {passwordMatch : 'Must match password'}
  }
}
handleLogIn(loginForm:FormGroup){
  this.isLoading = true;
  if (this.loginForm.valid) {
    this._AuthService.logIn(this.loginForm.value).subscribe({
      next:res=>{3
        console.log(res);
        localStorage.setItem('userToken' , res.token )
        this.isLoading = false;
        this._AuthService.deCoded()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'success logIn',
          showConfirmButton: false,
          timer: 1500
        })
        this._Router.navigate(['/home'])
      },
      error:err=>{

        this.isLoading = false;
        this.errorMsg = err.error.message
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Incorrect email or password',
          showConfirmButton: false,
          timer: 1500
        })

      }
    })
  }

}
}
