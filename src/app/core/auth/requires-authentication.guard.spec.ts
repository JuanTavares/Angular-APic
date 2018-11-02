import { TestBed, async, inject } from '@angular/core/testing';

import { RequiresAuthenticationGuard } from './requires-authentication.guard';

describe('RequiresAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequiresAuthenticationGuard]
    });
  });

  it('should ...', inject([RequiresAuthenticationGuard], (guard: RequiresAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
