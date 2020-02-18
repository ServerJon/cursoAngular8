import { TestBed } from '@angular/core/testing';

import { InfogithubService } from './infogithub.service';

describe('InfogithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfogithubService = TestBed.get(InfogithubService);
    expect(service).toBeTruthy();
  });
});
