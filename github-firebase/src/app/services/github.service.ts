import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName: string) {
    const URL = `https://api.github.com/users/${userName}`;
    return this.http.get(URL)
  }

  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
