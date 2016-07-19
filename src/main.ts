import { bootstrap } from '@angular/platform-browser-dynamic';
import { ComponentRef, enableProdMode, ReflectiveInjector } from '@angular/core';
import { VenaAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { AUTH_PROVIDERS, AuthRouteHelper } from './app/services/auth/index';
import { FIREBASE_APP_PROVIDERS } from './app/services/firebase/index';
import { PROFILE_PROVIDERS } from './app/services/profile/index';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


if (environment.production) {
  enableProdMode();
}

const providers: any[] = [
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  PROFILE_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
  
];

bootstrap(VenaAppComponent, providers)
  .then((appRef: ComponentRef<VenaAppComponent>) => {
    AuthRouteHelper.injector(appRef.injector as ReflectiveInjector);
  })
  .catch((error: Error) => console.error(error));
