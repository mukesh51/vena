import {provideRouter, RouterConfig} from '@angular/router';

import {Users} from './components/users.component';
import {AddUser} from './components/add-user.component';
import { SignIn } from './components/sign-in.component';
import { MyProfile } from './components/my-profile.component';
import { FlashMessage } from './components/flash-message.component';

export const routes : RouterConfig = [
    {path: 'users', component: Users},  
    {path: 'profile', component: MyProfile},
    {path: 'addUser', component: AddUser},
    {path: 'signIn', component: SignIn},
    {path: 'flashMessage', component: FlashMessage},    
    {path: '**', component: SignIn}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];