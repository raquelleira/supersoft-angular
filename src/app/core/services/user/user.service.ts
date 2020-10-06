import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../../../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public user$: Observable<User>;

    private loggedUser: User;
    private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);;

    constructor(
        private httpClient: HttpClient
    ) {
        this.user$ = this.userSubject.asObservable();
    }

    /**
     * Checks if there's a token.
     * @returns {Promise<any>}
     */
    public isLoggedIn(): boolean {
        return !! sessionStorage?.getItem('app-token');
    }

    public logout(): Promise<any> {
        // const url = 'url.do.logout';
        // return this.httpClient.post<User>(url, this.user).toPromise();
        this.user = null;
        this.emitUser(null);
        sessionStorage.clear();
        return Promise.resolve();
    }

    /**
     * Gets the current logged in user
     */
    public get user(): User {
        return this.loggedUser ? this.loggedUser : JSON.parse(sessionStorage.getItem('app-user'));
    }

    /**
     * Sets the current logged user
     */
    public set user(user: User) {
        this.loggedUser = user;
        this.emitUser(user);
    }

    /**
     * Emits an user to the observable subscribers
     */
    public emitUser(user: User): void {
        this.userSubject.next(user);
    }
}
