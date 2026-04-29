import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPreDetails } from './approval-pre-details.component';

describe('ApprovalPreDetails', () => {
  let component: ApprovalPreDetails;
  let fixture: ComponentFixture<ApprovalPreDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalPreDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovalPreDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
