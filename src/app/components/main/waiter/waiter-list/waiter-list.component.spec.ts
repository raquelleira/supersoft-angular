import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterListComponent } from './waiter-list.component';

describe('WaiterListComponent', () => {
  let component: WaiterListComponent;
  let fixture: ComponentFixture<WaiterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
