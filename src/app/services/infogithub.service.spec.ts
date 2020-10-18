import { TestBed } from '@angular/core/testing';

import { InfogithubService } from './infogithub.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InfogithubService', () => {
  let infogithubService: InfogithubService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [InfogithubService], imports: [HttpClientTestingModule]});
    infogithubService = TestBed.get(InfogithubService);
  });

  it('should be created', () => {
    expect(infogithubService).toBeTruthy();
  });
});
