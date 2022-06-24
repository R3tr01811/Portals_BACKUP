import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {AuthAPIService} from "../../service/auth-api.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InquiryResolveService implements Resolve<any> {
  constructor(private Inquiry: AuthAPIService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //console.log('Account resolver', route);
    return this. Inquiry.Inquiry().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}
