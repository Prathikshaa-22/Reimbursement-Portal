import { TestBed } from '@angular/core/testing';

import { ClaimsListService } from './claims-list.service';

describe('ClaimsListService', () => {
  let service: ClaimsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
