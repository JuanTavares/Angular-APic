import { TestBed } from '@angular/core/testing';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('UserNotTaken.ValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNotTakenValidatorService = TestBed.get(UserNotTakenValidatorService);
    expect(service).toBeTruthy();
  });
});
