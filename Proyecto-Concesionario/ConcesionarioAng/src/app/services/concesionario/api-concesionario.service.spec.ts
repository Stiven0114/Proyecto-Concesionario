import { TestBed } from '@angular/core/testing';

import { ApiConcesionarioService } from './api-concesionario.service';

describe('ApiConcesionarioService', () => {
  let service: ApiConcesionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConcesionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
