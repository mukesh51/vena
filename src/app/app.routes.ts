import {provideRouter, RouterConfig} from '@angular/router';

import {Users} from './components/users.component';
import {AddUser} from './components/add-user.component';
import { SignIn } from './components/sign-in.component';
import { MyProfile } from './components/my-profile.component';

export const routes : RouterConfig = [
    {path: 'users', component: Users},  
    {path: 'profile', component: MyProfile},
    {path: 'addUser', component: AddUser},
    {path: 'signIn', component: SignIn},
    {path: '**', component: Users}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];