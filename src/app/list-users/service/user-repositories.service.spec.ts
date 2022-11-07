import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserRepositoriesService } from './user-repositories.service';

describe('UserRepositoriesService', () => {
  let service: UserRepositoriesService;

  const httpStub = {
    get: (_params: any) => of([
      {
        name: 'name 1',
        description: 'description 1',
        html_url: 'html_url 1',
        owner: {
          login: 'login 1'
        }
      }
    ])
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        service,
        {
          provide: HttpClient,
          useValue: httpStub
        },
      ],
    });

    service = TestBed.inject(UserRepositoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
