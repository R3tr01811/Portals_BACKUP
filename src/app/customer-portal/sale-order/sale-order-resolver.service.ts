import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AuthAPIService} from '../../service/auth-api.service';

@Injectable({
  providedIn: 'root'
})

export class SaleOrderResolverService implements Resolve<any> {
  constructor(private SaleOrder: AuthAPIService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //console.log('Account resolver', route);
    return this.SaleOrder.saleOrd().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}

