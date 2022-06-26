import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs';
import { AuthAPIService } from '../service/auth-api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form:FormGroup;
  err:string;
  flag:boolean = false;
  user:string;
  constructor(private router: Router,
              private api:AuthAPIService,
              private route: ActivatedRoute) {

    this.form = new FormGroup({
      usrname: new FormControl<string|null>(null,Validators.required),
      password: new FormControl<string|null>(null,Validators.required)
    });

    if (this.api.loggedIn) {
      this.router.navigate(['/portal']);
    }
}

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.user = this.route.snapshot.queryParamMap.get('user');
    console.log(this.user);
  }

  login(){
    this.flag = true;
    const val = this.form.value;
    if (this.form.invalid) {
      return;
    }

    if(this.user === "customer"){
      this.api.login_customer(val.usrname, val.password)
        .subscribe({
          next: (v) => {
            console.log(v)
          },
          error: (e) => {
            this.flag=false;
            if (e.status==401){
              this.err = "Check email and password"
            }
            else if(e.status==500){
              this.err = "Internal Server Error"
            }
            else{
              this.err = "Something Went Wrong ;(("
            }
            console.error(e)
          },
          complete: () => {
            this.flag=true;
            this.router.navigate(['../customer/home']);
            console.info('Login() Completed.');
          }
        });
    }
    else if(this.user === "vendor" ){
      this.api.login_vendor(val.usrname, val.password)
        .subscribe({
          next: (v) => {
            console.log(v)
          },
          error: (e) => {
            this.flag=false;
            if (e.status==401){
              this.err = "Check email and password"
            }
            else if(e.status==500){
              this.err = "Internal Server Error"
            }
            else{
              this.err = "Something Went Wrong ;(("
            }
            console.error(e)
          },
          complete: () => {
            this.flag=true;
            this.router.navigate(['../vendor/home']);
            console.info('Login() Completed.');
          }
        });
    }
    else if(this.user === "employee" ){}

  }
}
