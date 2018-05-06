import { TestBed, inject } from '@angular/core/testing';

import { AtmServiceService } from './atm-service.service';

describe('AtmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtmServiceService]
    });
  });

  it('should be created', inject([AtmServiceService], (service: AtmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
