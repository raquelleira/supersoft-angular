import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.router.navigate( ['/'] );
        return false;
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return this.canActivate(route, state);
    }

}
