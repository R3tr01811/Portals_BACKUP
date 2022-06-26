import { TestBed } from '@angular/core/testing';

import { InvoiceResolveService } from './invoice-resolve.service';

describe('InvoiceResolveService', () => {
  let service: InvoiceResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
