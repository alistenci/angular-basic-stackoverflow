import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { QuestionService } from '../services/question.services';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements OnInit {

  solutoinText:string = "";
  questionId:any;
  questionObject: any;

  constructor(public questionService: QuestionService, public userService: UserService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.questionId=  this.route.snapshot.paramMap.get('questionId');
    this.questionService.getQuestionWidthId(this.questionId).subscribe((res)=>{
      this.questionObject = res;
    })
  }

  postSolution(){
    let solutionObj = {
      username: this.userService.user.username,
      solution: this.solutoinText,
      plus:[],
      minus:[]
    };
    this.questionObject.solutions.push(solutionObj);

    this.questionService.updateQuestion(this.questionObject).subscribe((res)=>{
      this.solutoinText = "";
    })
  }

  returnBack(){
    //this.router.navigateByUrl('/home');
    this.router.navigate(['/home']);
  }

  vote(index:number, point:number){
    if(point == 1){
      if(!(this.questionObject.solutions[index].plus.indexOf(this.userService.user.id)>=0))
      {
        this.questionObject.solutions[index].plus.push(this.userService.user.id)
      }

      for (let i = 0; i < this.questionObject.solution[index].minus.length; i++) {
        if(this.questionObject.solutions[index].minus[i] == this.userService.user.id){
          this.questionObject.solutions[index].minus.splice(i,1);
        } 
      }
    }else{
      if(!(this.questionObject.solutions[index].minus.indexOf(this.userService.user.id)>=0))
        {
          this.questionObject.solutions[index].minus.push(this.userService.user.id)
        }
        for (let i = 0; i < this.questionObject.solution[index].plus.length; i++) {
          if(this.questionObject.solutions[index].plus[i] == this.userService.user.id){
            this.questionObject.solutions[index].plus.splice(i,1);
          } 
        }
      
    }

    this.questionService.updateQuestion(this.questionObject).subscribe((res)=>{
      this.solutoinText = "";
    })
  }

}
