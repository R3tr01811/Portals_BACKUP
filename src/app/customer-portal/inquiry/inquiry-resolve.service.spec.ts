import { TestBed } from '@angular/core/testing';

import { InquiryResolveService } from './inquiry-resolve.service';

describe('InquiryResolveService', () => {
  let service: InquiryResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
