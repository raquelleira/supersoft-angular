import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Waiter } from './../waiter.model';
import { WaiterService } from './../waiter.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waiter-list',
  templateUrl: './waiter-list.component.html',
  styleUrls: ['./waiter-list.component.scss']
})
export class WaiterListComponent implements OnInit, AfterViewInit {

    public columns: string[] = ['id', 'name', 'shift', 'status', 'phone', 'actions'];
    public waiters: MatTableDataSource<Waiter>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private waiterService: WaiterService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        this.waiterService.waiters$
            .subscribe(waiters => {
                if (waiters?.length > 0) {
                    this.waiters = new MatTableDataSource(waiters);
                }
            });
    }

    public ngAfterViewInit(): void {
        if (this.waiters) {
            this.waiters.paginator = this.paginator;
            this.waiters.sort = this.sort;
        }
    }

    public applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.waiters.filter = filterValue.trim().toLowerCase();

        if (this.waiters.paginator) {
            this.waiters.paginator.firstPage();
        }
    }

    public addWaiter(): void {
        console.log(this.waiterService);
        this.waiterService.editWaiter(new Waiter({}));
        this.navigateForm();
    }

    public editWaiter(waiter: Waiter): void {
        this.waiterService.editWaiter(waiter);
        this.navigateForm();
    }

    private navigateForm(): void {
        this.router.navigate(['waiter-form'], { relativeTo: this.route });
    }

}
