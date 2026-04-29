import { TestBed } from '@angular/core/testing';

import { PreApproval } from './pre-approval';

describe('PreApproval', () => {
  let service: PreApproval;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreApproval);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
