import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Waiter } from '../waiter.model';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-waiter-form',
  templateUrl: './waiter-form.component.html',
  styleUrls: ['./waiter-form.component.scss'],
  providers: [FormBuilder]
})
export class WaiterFormComponent implements OnInit {

    public waiter: Waiter;
    public waiterForm: FormGroup;

    constructor(
        private waiterService: WaiterService,
        private formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.waiter = this.waiterService.editingWaiter;
        this.waiterForm = this.buildForm();
    }

    public cancel(): void {
        this.waiterService.finishEditWaiter();
    }

    public submit(): void {
        this.waiterService.submitWaiter(this.waiterForm.getRawValue());
    }

    private buildForm(): FormGroup {
        return this.formBuilder.group({
            id: this.waiter?.id || null,
            name: [this.waiter?.name || null, Validators.required],
            startTime: this.waiter?.startTime,
            endTime: this.waiter?.endTime,
            phone: this.waiter?.phone,
            status: this.waiter?.status,
            shift: this.waiter?.shift
        });
    }
}
