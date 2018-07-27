import { TestBed, inject } from '@angular/core/testing';

import { dataApi } from './dataApi.service';

describe('ApicallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [dataApi]
    });
  });

  it('should be created', inject([dataApi], (service: dataApi) => {
    expect(service).toBeTruthy();
  }));
});
