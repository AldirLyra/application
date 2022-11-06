import { TestBed } from '@angular/core/testing';

import { UserWithStarsService } from './user-with-stars.service';

describe('UserWithStarsService', () => {
  let service: UserWithStarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithStarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
