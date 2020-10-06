import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public user: User;

    constructor(
        private userService: UserService
    ) { }

    /**
     * Init component view
     */
    public ngOnInit(): void {
        this.userService.user$
            .subscribe(user => this.user = user);
    }

}
