import { TestBed } from '@angular/core/testing';

import { AuthResolveService } from './auth-resolve.service';

describe('AuthResolveService', () => {
  let service: AuthResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
