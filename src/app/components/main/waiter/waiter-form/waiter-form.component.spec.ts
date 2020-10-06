import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterFormComponent } from './waiter-form.component';

describe('WaiterFormComponent', () => {
  let component: WaiterFormComponent;
  let fixture: ComponentFixture<WaiterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
