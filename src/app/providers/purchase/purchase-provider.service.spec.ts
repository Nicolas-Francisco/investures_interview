import { TestBed } from '@angular/core/testing';

import { PurchaseProviderService } from './purchase-provider.service';

describe('PurchaseProviderService', () => {
  let service: PurchaseProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
