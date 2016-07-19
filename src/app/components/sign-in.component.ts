import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteHelper, AuthService } from '../services/auth/index';

@Component({
  selector: 'sign-in',  
  templateUrl: 'app/components/sign-in.component.html',
})

export class SignIn {
  constructor(private _auth: AuthService, private _router: Router) {}

  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this._auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this._auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this._router.navigate(['/users']);
  }

  }