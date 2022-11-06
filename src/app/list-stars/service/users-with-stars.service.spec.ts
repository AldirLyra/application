import { TestBed } from '@angular/core/testing';

import { UsersWithStarsService } from './users-with-stars.service';

describe('UsersWithStarsService', () => {
  let service: UsersWithStarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersWithStarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
