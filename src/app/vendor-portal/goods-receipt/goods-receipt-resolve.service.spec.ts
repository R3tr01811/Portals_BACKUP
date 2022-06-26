import { TestBed } from '@angular/core/testing';

import { GoodsReceiptResolveService } from './goods-receipt-resolve.service';

describe('GoodsReceiptResolveService', () => {
  let service: GoodsReceiptResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsReceiptResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
