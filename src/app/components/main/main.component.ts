import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    opened: boolean;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.userService.emitUser(this.userService.user);
    }

    public logout(): void {
        this.userService.logout()
            .then(() => this.router.navigate(['/']));
    }

}
