import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayElectricCostComponent } from './day-electric-cost.component';

describe('DayElectricCostComponent', () => {
  let component: DayElectricCostComponent;
  let fixture: ComponentFixture<DayElectricCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayElectricCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayElectricCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
