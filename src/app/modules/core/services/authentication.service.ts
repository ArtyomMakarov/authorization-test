import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import firebase from 'firebase/app';

@Injectable({
  'providedIn': 'root'
})
 
export class AuthenticationService {
  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  signUp(email: string, password: string): Observable<any> {
    const response$ = from(this.angularFireAuth.createUserWithEmailAndPassword(email, password)).pipe(
      catchError(
        (err: any, caught: Observable<object>): Observable<string> => {
          console.log('catch:', err);
          return of(email);
        }
      )
    );
    return response$;
  }
 
 /* Sign in */
  signIn(email: string, password: string): Observable<any> {
    const response$ = from(this.angularFireAuth.signInWithEmailAndPassword(email, password)).pipe(
      catchError(
        (err: any, caught: Observable<object>): Observable<string> => {
          console.log('catch:', err);
          return of(email);
        }
      )
    );
    return response$;
  }
  
  /* Sign out */
  signOut() {
    this.angularFireAuth
    .signOut();
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider: any): Observable<any> {
    const response$ = from(this.angularFireAuth.signInWithPopup(provider)).pipe(
      catchError((err: any, caught: Observable<object>): Observable<any> => {
        console.log('catch:', err);
        return of(err);
      }
    ));
    return response$;
  }
}

