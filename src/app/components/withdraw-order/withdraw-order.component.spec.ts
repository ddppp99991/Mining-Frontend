import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawOrderComponent } from './withdraw-order.component';

describe('WithdrawOrderComponent', () => {
  let component: WithdrawOrderComponent;
  let fixture: ComponentFixture<WithdrawOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
