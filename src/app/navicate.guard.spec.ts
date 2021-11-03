import { TestBed } from '@angular/core/testing';

import { NavicateGuard } from './navicate.guard';

describe('NavicateGuard', () => {
  let guard: NavicateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavicateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
