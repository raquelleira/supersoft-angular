import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { User } from '../../shared/models/user.model';
import { UserService } from '../../core/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(
        private httpClient: HttpClient,
        private userService: UserService
    ) { }

    /**
     * Posts a login request to the API.
     * Stores the auth token in the session storage.
     *
     * @param {User} user
     */
    public login(user: User): Promise<any> {
        /*const url = 'url.do.login';
        return this.httpClient.post<User>(url, user)
            .pipe(
                tap((response: any) => {
                    this.userService.user = response.user;
                    sessionStorage.setItem ('app-token', response.token);
                })
            ).toPromise();*/
        this.userService.user = new User({
            id: '1',
            login: 'raquel.leira@gmail.com',
            name: 'Raquel Leira'
        });
        sessionStorage.setItem('app-user', JSON.stringify(this.userService.user));
        sessionStorage.setItem('app-token', 'token');
        return Promise.resolve();

    }
}
