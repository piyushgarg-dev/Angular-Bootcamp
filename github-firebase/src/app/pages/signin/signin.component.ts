import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    const {email, password} = f.form.value;

    this.auth.signIn(email, password)
    .then(res => {
      this.router.navigateByUrl('/')
      this.toast.success('Account created successfully')
    })
    .catch(err => this.toast.error(err.message))
  }

}
