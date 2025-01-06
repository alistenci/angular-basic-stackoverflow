import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { QuestionService } from '../services/question.services';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  question:string = "";
  questionList: Array<any> = [];

  constructor(public questionService: QuestionService, public userService: UserService){}
  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((res)=>{
      this.questionList = res;
    })
  }


  post(){
    this.questionService.postQuestions({
      username:this.userService.user.username,
      question:this.question,
      solutions:[]
    }).subscribe((res)=>{
      this.questionList.push(res);
    })
  }

}
