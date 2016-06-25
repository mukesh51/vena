import { Component , OnInit} from '@angular/core';
import {NavBar} from './components/nav-bar.component';
import {Users} from './components/users.component';
import {AddUser} from './components/add-user.component';
import { AngularFire, FirebaseListObservable, FirebaseUrl } from 'angularfire2';
import { UserServicee } from './services/user.servicee';
import { SignIn } from './components/sign-in.component';
import { MyProfile } from './components/my-profile.component';
import { AuthService } from './services/auth/index';
import { ProfileService } from './services/profile/index';

import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ROUTER_PROVIDERS } from '@angular/router';


@Component({  
  selector: 'vena-app',
  providers:[ROUTER_PROVIDERS, UserServicee],
  templateUrl: 'app/vena.component.html',
  directives: [ROUTER_DIRECTIVES, NavBar,AddUser],
  styleUrls: ['app/vena.component.css']
})
@Routes([	
  {path: '/users', component: Users},  
  {path: '/profile', component: MyProfile},
  {path: '/addUser', component: AddUser},
  {path: '/', component: SignIn},
	{path: '*', component: Users}
])
export class VenaAppComponent implements OnInit {
  title = 'vena works!';
  items: FirebaseListObservable<any>;

  constructor(private _router: Router, private _userServicee: UserServicee, private auth: AuthService) {

  }
  ngOnInit() {
    this.items = this._userServicee.getUsers();
  	this._router.navigate(['/']);
  }

    signOut(): void {
      this.auth.signOut();
      this._router.navigate(['/']);
      
    }
}
