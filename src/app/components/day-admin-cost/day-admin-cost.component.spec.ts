import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAdminCostComponent } from './day-admin-cost.component';

describe('DayAdminCostComponent', () => {
  let component: DayAdminCostComponent;
  let fixture: ComponentFixture<DayAdminCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAdminCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAdminCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
