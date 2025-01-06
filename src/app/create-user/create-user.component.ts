import { Component } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  createUserForm:FormGroup;

  constructor(private fb: FormBuilder, public UserService: UserService){
     this.createUserForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      username:['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
  }

  get f(): {[key: string]: AbstractControl}{
    return this.createUserForm.controls;
  }

  createAccount(){
    this.UserService.createAccount(this.createUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

}
