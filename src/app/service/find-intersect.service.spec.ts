import { TestBed } from '@angular/core/testing';

import { FindIntersectService } from './find-intersect.service';

describe('FindIntersectService', () => {
  let service: FindIntersectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindIntersectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
