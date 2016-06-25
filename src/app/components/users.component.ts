import {Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseUrl } from 'angularfire2';
import { UserServicee } from '../services/user.servicee';


@Component({
  selector: 'users',
  templateUrl: 'app/components/users.component.html',
  providers: [UserServicee]
})

export class Users  implements OnInit{
	items: FirebaseListObservable<any>;

	  constructor(private _userServicee: UserServicee) {

	  }
	  ngOnInit() {
	    this.items = this._userServicee.getUsers();	  	
	  }

}