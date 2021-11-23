import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: Observable<any>;
  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.authState
  }

  login(mail:string, password:string){
    this.auth.signInWithEmailAndPassword(mail,password)
  }
  stateUser(){
    return this.user;
  }
}
