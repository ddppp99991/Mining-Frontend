import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricDepositComponent } from './electric-deposit.component';

describe('ElectricDepositComponent', () => {
  let component: ElectricDepositComponent;
  let fixture: ComponentFixture<ElectricDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
