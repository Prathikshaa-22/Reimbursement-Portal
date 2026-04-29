import { TestBed } from '@angular/core/testing';

import { ApprovalPreService } from './approval-pre.service';

describe('ApprovalPreService', () => {
  let service: ApprovalPreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovalPreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
