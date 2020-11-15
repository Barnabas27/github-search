import { TestBed } from '@angular/core/testing';

import { GithubProfilesService } from './github-profiles.service';

describe('GithubProfilesService', () => {
  let service: GithubProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
