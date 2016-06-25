import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileService } from '../services/profile/index';
import { User } from '../services/profile/user';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthRouteHelper, AuthService } from '../services/auth/index';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: 'app/components/add-user.component.html'  
})
export class AddUser {

  firstName: string = '';
  lastName: string = '';
  joinedDate: string = '';
  userItem: FirebaseListObservable<any>;
  user: any[];

  constructor(private _profileService: ProfileService,private auth: AuthService, private router: Router, af: AngularFire) { 	
  	
  } 

  clear(): void {
    this.firstName = '';
    this.lastName = '';
    this.joinedDate = '';
  }

  createUser(): void {
    const firstName: string = this.firstName.trim();
    const lastName: string = this.lastName.trim();
    const joinedDate: string = this.joinedDate.trim();

    if (firstName.length && lastName.length) {
    	let newUser = new User(firstName,lastName,joinedDate);      
      this._profileService.createUser(newUser);
    }
    this.router.navigate(['/users']);
  }

}