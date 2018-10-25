import { TestBed } from '@angular/core/testing';

import { DsoToolkitAngularService } from './dso-toolkit-angular.service';

describe('DsoToolkitAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DsoToolkitAngularService = TestBed.get(DsoToolkitAngularService);
    expect(service).toBeTruthy();
  });
});
