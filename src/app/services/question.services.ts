import { Injectable } from '@angular/core';
import { BaseService } from './base.services';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService {

  public user:any;

  constructor(private base: BaseService) {
    super(base.http);
}

public postQuestions(questionsObject:any){
    return this.postReq('/questions', questionsObject);
}

public getQuestions(){
    return this.getReq('/questions');
}

public getQuestionWidthId(id:string){
  return this.getReq('/questions/' + id);
}

public updateQuestion(newObj:any){
  return this.putReq('/questions/' + newObj.id, newObj);
}

}