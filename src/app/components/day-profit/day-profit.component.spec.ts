import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayProfitComponent } from './day-profit.component';

describe('DayProfitComponent', () => {
  let component: DayProfitComponent;
  let fixture: ComponentFixture<DayProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
