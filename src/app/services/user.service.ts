import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {
	users: FirebaseListObservable<any>;
	navMenuItems: FirebaseListObservable<any>;

	constructor(_af: AngularFire) {		
		this.users = _af.database.list('https://flickering-heat-8853.firebaseio.com/users');
			
		
		// this.navMenuItems = af.database.list('https://flickering-heat-8853.firebaseio.com/navMenu');
		// console.log("this.navMenuItems "+this.navMenuItems.subscribe(snapshot => console.log(snapshot)));
		
	}

	getUsers() {				
		return this.users;
	}

}