import { TestBed } from '@angular/core/testing';

import { RfqResolveService } from './rfq-resolve.service';

describe('RfqResolveService', () => {
  let service: RfqResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RfqResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
