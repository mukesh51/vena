import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileService } from '../services/profile/index';
import { Profile } from '../services/profile/profile';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthRouteHelper, AuthService } from '../services/auth/index';
import { Router } from '@angular/router';

@Component({
  selector: 'my-profile',
  templateUrl: 'app/components/my-profile.component.html'  
})
export class MyProfile {

  title: string = '';
  location: string = '';
  profileItem: FirebaseListObservable<any>;
  profile: any[];

  constructor(private _profileService: ProfileService,private auth: AuthService, private router: Router, af: AngularFire) {
  	if(auth.id) {
  		console.log("ID INSIDE MY PROFILE"+auth.id);
  	this.profileItem = _profileService.retrieveProfile(auth.id,af);
  	this.profileItem.subscribe(snapshot => {
  		this.profile = snapshot;
  		console.log(this.profile);  		
  		this.profile.forEach(x => {
  			if (x.$key === 'title') {
  				this.title = x.$value;	
  			}
  			if( x.$key === 'location') {
  				this.location = x.$value;	
  			}  			  			
  		});  		
  		})
  } else {
  	this.router.navigate(['/']);
  }
  	
  } 

  clear(): void {
    this.title = '';
    this.location = '';
  }

  saveProfile(): void {
    const title: string = this.title.trim();
    const location: string = this.location.trim();
    if (title.length && location.length) {
    	let newProfile = new Profile(title,location);      
      this._profileService.createProfile(newProfile);
    }
    this.router.navigate(['/profile']);
  }

}