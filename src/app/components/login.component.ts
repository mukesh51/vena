import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState, FirebaseAuth } from 'angularfire2';

@Component({
  // moduleId: module.id,
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class Login {
  private authState: FirebaseAuthState;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));   
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });    
  }
 
  logout() {
    this.af.auth.logout();
  }  
}