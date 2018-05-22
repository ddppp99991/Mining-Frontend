import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfitHistoryComponent } from './project-profit-history.component';

describe('ProjectProfitHistoryComponent', () => {
  let component: ProjectProfitHistoryComponent;
  let fixture: ComponentFixture<ProjectProfitHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfitHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
