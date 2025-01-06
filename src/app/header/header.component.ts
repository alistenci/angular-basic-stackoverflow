import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService, private router:Router){}
  ngOnInit(): void {
    let str = localStorage.getItem('user');
    if(str != null){
      this.userService.user = JSON.parse(str);
    }else{
    this.router.navigateByUrl('/login');
    }
  }

  logOut(){
    this.userService.user = undefined;
    this.router.navigateByUrl('/login');
  }
}
