import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { AuthService } from '../services/auth/index';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/components/nav-bar.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class NavBar{
	constructor(private auth: AuthService){}
	@Input() authenticated: boolean;
	@Input() isAdmin: boolean;
	@Input() displayName: string;
	@Input() displayImage: string;
  	@Output() signOut: EventEmitter<any> = new EventEmitter(false);
}