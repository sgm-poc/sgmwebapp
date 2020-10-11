import { TestBed } from '@angular/core/testing';

import { RegionListService } from './region-list.service';

describe('RegionListService', () => {
  let service: RegionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
