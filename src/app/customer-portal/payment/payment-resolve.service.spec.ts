import { TestBed } from '@angular/core/testing';

import { PaymentResolveService } from './payment-resolve.service';

describe('PaymentResolveService', () => {
  let service: PaymentResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
