import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteHelper, AuthService } from '../services/auth/index';


@Component({
  selector: 'sign-in',  
  templateUrl: 'app/components/sign-in.component.html',
})

// @CanActivate(() => AuthRouteHelper.requireUnauth())

export class SignIn {
  constructor(private auth: AuthService, private router: Router) {}

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/users']);
  }

  }