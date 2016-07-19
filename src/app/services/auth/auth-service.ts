import { Injectable } from '@angular/core';
import {AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
    private authState: FirebaseAuthState;
        

    constructor(public auth$: FirebaseAuth) {
        this.authState = auth$.getAuth();

        auth$.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
        });

        
    }

    get authenticated(): boolean {        
        return this.authState !== null && !this.expired;
    }

    get displayName(): string {
        if (this.authState != null) {
            return this.authState.facebook.displayName;    
        } else {
            return '';
        }
    }

    get displayImage(): string {
        if (this.authState != null) {
            return this.authState.facebook.profileImageURL;    
        } else {
            return '';
        }
    }

    get expired(): boolean {
        return !this.authState || (this.authState.expires * 1000) < Date.now();
    }

    get id(): string {        
        return this.authenticated ? this.authState.uid : '';
    }

    get isAdmin(): boolean { 
        if(this.authenticated) {
            if(this.authState.uid === 'facebook:10207841413166646') {
                return true;
            }
        }       
        return false;
    }

    signInWithGoogle(): Promise<FirebaseAuthState> {
        return this.auth$.login({
            provider: AuthProviders.Google
        });
    }

    signInWithTwitter(): Promise<FirebaseAuthState> {
        return this.auth$.login({
            provider: AuthProviders.Twitter
        });
    }

    signInWithFacebook(): Promise<FirebaseAuthState> {
        return this.auth$.login({
            provider: AuthProviders.Facebook
        });
    }

    signOut(): void {
        this.auth$.logout();
    }
}