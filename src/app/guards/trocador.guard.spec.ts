import { TestBed } from '@angular/core/testing';

import { TrocadorGuard } from './trocador.guard';

describe('TrocadorGuard', () => {
  let guard: TrocadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TrocadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
