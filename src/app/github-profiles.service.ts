import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubProfilesService {

  constructor(public http: HttpClient) { }
  getProfileInfo(username: string){ return this.http.get("https://api.github.com/users/" + username + "?access_token=" + environment.apiKey);
   }



getRepoInfo(username: string){
   return this.http.get("https://api.github.com/users/" + username + "/repos?access_token=" + environment.apiKey); 
    }
}