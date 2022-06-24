import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "../customer-portal/sidebar/sidebar.component";
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {LeaveReqComponent} from "./leave-req/leave-req.component";

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'account',
        component:AccountComponent
      },
      {
        path:'leave-req',
        component:LeaveReqComponent
      },
      {
        path:'pay-slip',
        component:LeaveReqComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeePortalRoutingModule { }
