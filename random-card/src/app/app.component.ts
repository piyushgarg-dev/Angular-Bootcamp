import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  user: any;

  constructor(
    private userService: UserService,
    private toasterService: ToastrService
    ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(response => {
      this.user = response.results[0];
    },
    
    err => {
      this.toasterService.error('Something went wrong')
    }
    )
  }
}
