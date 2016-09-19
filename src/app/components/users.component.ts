import {Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseUrl } from 'angularfire2';
import { UserService } from '../services/user.service';
// import "rxjs/add/operator/flatMap";


@Component({
  selector: 'users',
  templateUrl: 'app/components/users.component.html',
  providers: [UserService],
	styles: [`
    .customImageClass {
      height: 150px;
      width: 150px;
    }
  `]
})

export class Users  implements OnInit{
	users: FirebaseListObservable<any>;  

	  constructor(private _userServicee: UserService) {

	  }
	  ngOnInit() {      
        this.users = this._userServicee.getUsers();         		  	
	  }

}