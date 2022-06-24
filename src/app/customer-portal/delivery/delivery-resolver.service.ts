import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AuthAPIService} from '../../service/auth-api.service';

@Injectable({
  providedIn: 'root'
})

export class DeliveryResolverService implements Resolve<any> {
  constructor(private Delivery: AuthAPIService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //console.log('Account resolver', route);
    return this.Delivery.Delivery().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }

}

