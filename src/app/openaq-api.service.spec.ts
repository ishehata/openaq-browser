import { TestBed } from '@angular/core/testing';

import { OpenaqApiService } from './openaq-api.service';

describe('OpenaqApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenaqApiService = TestBed.get(OpenaqApiService);
    expect(service).toBeTruthy();
  });
});
