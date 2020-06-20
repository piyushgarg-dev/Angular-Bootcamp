import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router,
  ) { 
    auth.getUser().subscribe(user => {
      if(user) return this.email = user.email;
    },
    (err) => console.log(err)
    )
  }

  ngOnInit(): void {
  }

  async handleSignOut() {
    try {
      await this.auth.signOut();
      this.toast.success('Logged out successfully');
      this.router.navigateByUrl('/signin');
      this.email = null;
    }
    catch(err) {
      this.toast.error('Something went wrong')
    }
  }

}
