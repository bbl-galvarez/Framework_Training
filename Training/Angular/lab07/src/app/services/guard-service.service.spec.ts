import { TestBed, inject } from '@angular/core/testing';

import { GuardServiceService } from './guard-service.service';

describe('GuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardServiceService]
    });
  });

  it('should be created', inject([GuardServiceService], (service: GuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
