import { Injectable } from '@angular/core';
import { Data } from './data';
import { DATA } from './stubdata';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalDataService {

  getDatas(): Observable<Data[]> {
    const data = of(DATA); // Still just a stub.
    return data;
  }

  getData(id:number): Observable<Data> {
    // For now, assume that a data with the specified `id` always exists.
    // This is why there is an ! at the end.
    const data = DATA.find( data => data.id == id)!;
    return of(data);
  }

  constructor() { }
}
