import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardService', () => {
  let authGuardService: AuthGuardService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthGuardService], imports: [ RouterTestingModule ]});
    authGuardService = TestBed.get(AuthGuardService)
  });

  it('should be created', () => {
    expect(authGuardService).toBeTruthy();
  });
});
