import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit, OnChanges {

  @Input() repoUrl: string;
  repos = [];

  constructor(
    private github: GithubService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.repoUrl) {
      this.github.getRepos(this.repoUrl).subscribe((repos: []) => {
        this.repos = repos;

        this.ref.detectChanges();
      }, 
      (err) => console.log(err))
    }
  }

}
