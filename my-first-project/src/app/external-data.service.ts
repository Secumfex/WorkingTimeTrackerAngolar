import { Injectable } from '@angular/core';
import { Data } from './data';
import { DATA } from './stubdata';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalDataService {

  getData(): Observable<Data[]> {
    const data = of(DATA); // Still just a stub.
    return data;
  }

  constructor() { }
}
