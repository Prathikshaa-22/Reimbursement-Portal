import { TestBed } from '@angular/core/testing';

import { ApprovalClaimsService } from './approval-claims.service';

describe('ApprovalClaimsService', () => {
  let service: ApprovalClaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovalClaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
