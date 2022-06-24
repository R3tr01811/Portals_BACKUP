import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private dataSource = new BehaviorSubject({});
  data = this.dataSource.asObservable();
  private jsonData: {};

  constructor() {
    this.jsonData = {};
  }
  setJSONData(val: object) {
    this.dataSource.next(val);
  }
  getJSONData() {
    return this.data;
  }

}
