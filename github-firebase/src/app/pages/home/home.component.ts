import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  username: string;
  Error = null;

  constructor(
    private ref: ChangeDetectorRef,
    private github: GithubService
  ) { }

  ngOnInit(): void {
  }

  handleFind() {
    this.github.getUserDetails(
      this.username
    )
    .subscribe(user => {
      this.user = user;
      this.Error = null;
      this.ref.detectChanges()
    }, 
    
    (err) => {
      this.user = null;
      this.Error = "User not found";
      this.ref.detectChanges();
    })
  }

}
