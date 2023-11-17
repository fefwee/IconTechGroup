import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



export interface UserData {
  email: string
  firstName: string
  lastName: string
  phone: number
  url: string,
  error:boolean
}

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  public isValid!:boolean;

  public profileUserData$: any = new BehaviorSubject({
    email: '',
    firstName: '',
    lastName: '',
    phone: 0,
    url: '',
    error:null
  })



  constructor() { }

  public getDataUser(data: UserData,isValid?:boolean) {
    console.log(data)
      localStorage.setItem('first',data.firstName);
      localStorage.setItem('last',data.lastName);

     this.profileUserData$.next({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      url: data.url,
      error:isValid
    }
    )
    console.log(this.profileUserData$)
  }
  changeValid(data:boolean){
    this.isValid = data;
  }

}
