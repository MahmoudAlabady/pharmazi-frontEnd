import { TestBed } from '@angular/core/testing';

import { ApiPharmaziService } from './api-pharmazi.service';

describe('ApiPharmaziService', () => {
  let service: ApiPharmaziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPharmaziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
