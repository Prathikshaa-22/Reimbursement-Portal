import { TestBed } from '@angular/core/testing';

import { ClaimForm } from './claim-form';

describe('ClaimForm', () => {
  let service: ClaimForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
