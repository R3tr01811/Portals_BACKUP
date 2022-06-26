import { Component, OnInit } from '@angular/core';
import {AuthAPIService} from "../../service/auth-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user:any;
  constructor(private auth:AuthAPIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.auth.getUsr();
    console.log(this.user);
  }

}
