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
    this.profileItem$ = af.object(`/profiles/${auth.id}`) as FirebaseObjectObservable<IProfile[]>;   
    this.userItemAsList$ = af.list(`/users`) as FirebaseListObservable<any>;  
  }

  createProfile(myProfile: IProfile): Promise<any> {
    return this.profileItem$.set(myProfile);
  }

  retrieveProfile(id: string,af: AngularFire) {    
    this.profileItemAsList$ = af.list(`/profiles/${id}`) as FirebaseListObservable<any>;    
    return this.profileItemAsList$;    
  }

  createUser(user: IUser): Promise<any> {
    return this.userItemAsList$.push(user);
  }

  // removeProfile(myProfile: IProfile): Promise<any> {
  //   return this.profileItem$.remove(myProfile.$key);
  // }

  // updateProfile(myProfile: IProfile, changes: any): Promise<any> {
  //   return this.profileItem$.update(myProfile.$key, changes);
  // }
}