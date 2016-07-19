import { Component , OnInit} from '@angular/core';
import { NavBar } from './components/nav-bar.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth/index';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({  
  selector: 'vena-app',  
  providers:[UserService],
  templateUrl: 'app/vena.component.html',  
  directives: [ROUTER_DIRECTIVES, NavBar]
})
export class VenaAppComponent implements OnInit {
  title = 'vena works!';
  items: FirebaseListObservable<any>;

  constructor( 
    private _router: Router, 
    private _userService: UserService, 
    private _auth: AuthService) {}

  ngOnInit() {
    this.items = this._userService.getUsers();    
  	this._router.navigate(['/']);
  }

  signOut(): void {
    this._auth.signOut();
    this._router.navigate(['/']);
    
  }
}
