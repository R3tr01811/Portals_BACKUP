import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {AuthAPIService} from "../../service/auth-api.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaymentResolveService implements Resolve<any> {
  constructor(private Auth: AuthAPIService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //console.log('Account resolver', route);
    return this.Auth.Payment_vendor().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
