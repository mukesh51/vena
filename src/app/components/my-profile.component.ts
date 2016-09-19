import { Component, EventEmitter, Output } from '@angular/core';
import {ControlGroup, Validators, FormBuilder} from '@angular/common';
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
  form: ControlGroup;

  constructor(private _fb: FormBuilder, 
              private _profileService: ProfileService,
              private _auth: AuthService, 
              private _router: Router, 
              private _af: AngularFire) {

              this.form = _fb.group({
                  firstName:  ['', Validators.required],
                  lastName:   ['', Validators.required]    
              });

              console.log("In constructor of my-profile.component");

              this.renderProfile();  	
  }

  renderProfile() {
    console.log("inside render of my-profile.component");
      if(this._auth.id) {
        console.log("ID INSIDE MY PROFILE"+this._auth.id);
      this.profileItem = this._profileService.retrieveProfile(this._auth.id,this._af);
      this.profileItem.subscribe(snapshot => {
        this.profile = snapshot;
        console.log("profile is "+this.profile);  		
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
      this._router.navigateByUrl('/signIn');
    }
  } 

  saveProfile(): void {    
    	let newProfile = new Profile(this.form.find('firstName').value,this.form.find('lastName').value);      
      this._profileService.createProfile(newProfile);
      this._router.navigate(['/profile']);
  }
  

}