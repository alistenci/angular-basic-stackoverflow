import { Component } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private fb: FormBuilder, public userService: UserService, private snackBar: MatSnackBar, private router: Router) {
     this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }


  get f(): {[key: string]: AbstractControl}{
    return this.loginForm.controls;
  }

  login(){
    this.userService.getUser(this.loginForm.value.email).subscribe((res)=>{
      if(res.length === 0){
        this.snackBar.open('Böyle bir hesap bulunamadı' , 'OK');
      }
      else{
        if(res[0].password === this.loginForm.value.password){
          this.userService.user = res[0];
          localStorage.setItem('user', JSON.stringify(res[0]));
          this.router.navigateByUrl('/home');
        }else{
          this.snackBar.open('Yanlış Şifre', 'OK');
        }
      }
    })
  }

}
