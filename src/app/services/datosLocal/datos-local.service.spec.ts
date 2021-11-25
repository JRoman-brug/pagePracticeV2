import { TestBed } from '@angular/core/testing';

import { DatosLocalService } from './datos-local.service';

describe('DatosLocalService', () => {
  let service: DatosLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
