import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const {email, password} = f.form.value;

    this.auth.signUp(email, password)
    .then(res => {
      this.router.navigateByUrl('/')
      this.toast.success('Account created successfully')
    })
    .catch(err => this.toast.error(err.message))
  }

}
