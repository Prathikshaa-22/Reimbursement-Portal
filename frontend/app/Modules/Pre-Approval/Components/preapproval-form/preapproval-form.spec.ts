import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreapprovalForm } from './preapproval-form';

describe('PreapprovalForm', () => {
  let component: PreapprovalForm;
  let fixture: ComponentFixture<PreapprovalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreapprovalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PreapprovalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
