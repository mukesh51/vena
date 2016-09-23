import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService {
	users: FirebaseListObservable<any>;
	navMenuItems: FirebaseListObservable<any>;
	navMenuItemsasObjects: FirebaseObjectObservable<any>;

	constructor(_af: AngularFire) {		
		this.users = _af.database.list('https://flickering-heat-8853.firebaseio.com/users');
		
			
		// this.navMenuItems = af.database.list('https://flickering-heat-8853.firebaseio.com/navMenu');
		// console.log("this.navMenuItems "+this.navMenuItems.subscribe(snapshot => console.log(snapshot)));
		
		//lift, remove, set, update - FirebaseObjectObservable
		//lift, push, remove, update - FirebaseListObservable
		//createUser, getAuth, login, logout - AngularFireAuth
		
		
	}

	getUsers() {				
		return this.users;
	}

}