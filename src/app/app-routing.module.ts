import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './service/auth.guard';
import {LandingPageComponent} from "./landing-page/landing-page.component";

const routes: Routes = [

  { path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'login',
    component:AuthComponent
  },
  {
    path:'home',
    component:LandingPageComponent
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer-portal/customer-portal.module').then(m => m.CustomerPortalModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor-portal/vendor-portal.module').then(m => m.VendorPortalModule),
    canActivate:  [AuthGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee-portal/employee-portal.module').then(m => m.EmployeePortalModule),
    canActivate: [AuthGuard]
  },
  {
    path:"**",
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
