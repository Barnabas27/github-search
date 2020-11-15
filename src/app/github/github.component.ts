import { Component, OnInit } from '@angular/core';
import { GithubProfilesService } from '../github-profiles.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
profile: any;
repos: any;
  constructor(public GithubProfilesService: GithubProfilesService) { }

  getProfileInfo(username: string){
        this.GithubProfilesService.getProfileInfo(username).subscribe(profile => this.profile = profile);
console.log(this.profile)
    this.GithubProfilesService.getRepoInfo(username).subscribe(repos => this.repos = repos);
    }

  ngOnInit(): void {
    this.getProfileInfo('barnabas27');
  }

}
