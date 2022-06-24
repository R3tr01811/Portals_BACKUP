import { TestBed } from '@angular/core/testing';

import { CreditDebitResolveService } from './credit-debit-resolve.service';

describe('CreditDebitResolveService', () => {
  let service: CreditDebitResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditDebitResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
