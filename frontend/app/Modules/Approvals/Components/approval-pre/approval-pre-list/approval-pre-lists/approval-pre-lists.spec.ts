import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPreLists } from './approval-pre-lists.component';

describe('ApprovalPreLists', () => {
  let component: ApprovalPreLists;
  let fixture: ComponentFixture<ApprovalPreLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalPreLists],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovalPreLists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
