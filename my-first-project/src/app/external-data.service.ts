import { Injectable } from '@angular/core';
import { Data } from './data';
import { DATA } from './stubdata';

@Injectable({
  providedIn: 'root'
})
export class ExternalDataService {

  getData(): Data[] {
    return DATA;
  }

  constructor() { }
}
