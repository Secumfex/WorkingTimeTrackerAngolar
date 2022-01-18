import { Component, OnInit, Input } from '@angular/core';

import { Data } from "../data";
import { DATA } from '../stubdata';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  selectedData?: Data;

  datas = DATA;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: Data): void {
    // we want to send the "selection" to the other component (controlarea)
    this.selectedData = data; // TODO send to service or something. Reactive?
  }
}
