import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth/index';
import { IProfile, Profile } from './profile';
import { IUser, User } from './user';


@Injectable()
export class ProfileService {
  profileItem$: FirebaseObjectObservable<IProfile[]>;
  profileItemAsList$: FirebaseListObservable<any[]>;
  userItemAsList$: FirebaseListObservable<any[]>;

  constructor(af: AngularFire, auth: AuthService) {
    console.log("in constructor.... "+auth.id);
    console.log("Angular Fire Object is "+af);    
    this.profileItem$ = af.database.object(`/profiles/${auth.id}`) as FirebaseObjectObservable<IProfile[]>;
    console.log("this.profileItem$ "+this.profileItem$);   
    this.userItemAsList$ = af.database.list(`/users`) as FirebaseListObservable<any>;
    console.log("this.userItemAsList$ "+this.userItemAsList$);  
  }

  createProfile(myProfile: IProfile): Promise<any> {
    return this.profileItem$.set(myProfile);
  }

  retrieveProfile(id: string,af: AngularFire) {
    console.log("in retrieve profile "+id);    
    this.profileItemAsList$ = af.database.list(`/profiles/${id}`) as FirebaseListObservable<any>;    
    return this.profileItemAsList$;    
  }

  createUser(user: IUser): Promise<any> {
    return this.userItemAsList$.push(user);
  }
  
}