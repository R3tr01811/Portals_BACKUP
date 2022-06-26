import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {AuthAPIService} from "../../service/auth-api.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CreditDebitResolveService implements Resolve<any> {
  constructor(private CreditDebit: AuthAPIService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //console.log('Account resolver', route);
    return this.CreditDebit.Credit_vendor().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
