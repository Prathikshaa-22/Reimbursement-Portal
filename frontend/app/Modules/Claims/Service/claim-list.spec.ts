import { TestBed } from '@angular/core/testing';

import { ClaimList } from './claim-list';

describe('ClaimList', () => {
  let service: ClaimList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
