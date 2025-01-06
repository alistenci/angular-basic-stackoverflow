import { Injectable } from '@angular/core';
import { BaseService } from './base.services';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  public user:any;

  constructor(private base: BaseService) {
    super(base.http);
   }


   public createAccount(userObject:any){
    return this.postReq('/users',userObject)
   }

   public getUser(email:string){
    return this.getReq('/users?email='+ email)
   }
}
