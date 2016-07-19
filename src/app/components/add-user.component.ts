import { Component, EventEmitter, Output } from '@angular/core';
import {ControlGroup, Validators, FormBuilder} from '@angular/common';
import { ProfileService } from '../services/profile/index';
import { User } from '../services/profile/user';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: 'app/components/add-user.component.html',
  styles: [`
    .customImageClass {
      height: 150px;
      width: 150px;
    }
  `]
})
export class AddUser {
  baseImg;
  baseImgReturned: boolean = false;
  userItem: FirebaseListObservable<any>;  
  form: ControlGroup;

  constructor(
        private _fb: FormBuilder, 
        private _profileService: ProfileService,         
        private _router: Router) {
      this.form = _fb.group({
        firstName:  ['', Validators.required],
        lastName:   ['', Validators.required],
        joinedDate: ['', Validators.required],
        imageInput: []
      })  	
  }
  
  createUser(): void {    
    	let newUser = new User(
          this.form.find('firstName').value,
          this.form.find('lastName').value,
          this.form.find('joinedDate').value,
          this.baseImg
        );      
      this._profileService.createUser(newUser);
      this._router.navigate(['/users']);
  }

  selectImage($event) {
    var reader = new FileReader();
    reader.onloadend = () => {
      this.baseImg = reader.result;
      this.baseImgReturned = true;      
    }    
    reader.readAsDataURL($event.target.files[0]);
  }
}