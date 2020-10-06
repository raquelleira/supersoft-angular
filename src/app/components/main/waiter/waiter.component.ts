import { Component, OnInit } from '@angular/core';

import { Waiter } from './waiter.model';
import { WaiterService } from './waiter.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {
    constructor(
        private waiterService: WaiterService
    ) { }

    public ngOnInit(): void {
        this.waiterService.getWaiters();
    }
}
