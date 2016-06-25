import { ReflectiveInjector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';

let appInjector: ReflectiveInjector;

export class AuthRouteHelper {
    static injector(injector?: ReflectiveInjector): ReflectiveInjector {
        if (injector) appInjector = injector;
        return appInjector;
    }

    static dependencies(): {auth: AuthService, router: Router} {
        const injector: ReflectiveInjector = AuthRouteHelper.injector();
        const auth: AuthService = injector.get(AuthService);
        const router: Router = injector.get(Router);
        return {auth, router};
    }

    static requireAuth(): boolean {
        const { auth, router } = AuthRouteHelper.dependencies();
        if(!auth.authenticated) router.navigate(['/SignIn']);
        return auth.authenticated;
    }

    static requireUnauth(): boolean {
        const { auth, router } = AuthRouteHelper.dependencies();
        if(auth.authenticated) router.navigate(['/Users']);
        return !auth.authenticated;
    }
}