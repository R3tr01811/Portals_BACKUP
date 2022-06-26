import { TestBed } from '@angular/core/testing';

import { PoResolveService } from './po-resolve.service';

describe('PoResolveService', () => {
  let service: PoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
