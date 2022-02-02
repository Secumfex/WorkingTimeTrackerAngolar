import { Component, OnInit, Input } from '@angular/core';

import { Data } from "../data";
import { ExternalDataService } from '../external-data.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  selectedData?: Data;

  datas: Data[] = [];

  constructor(private externalDataService: ExternalDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.externalDataService.getDatas().subscribe( datas => {
      this.datas = datas;
    });
  }

  onSelect(data: Data): void {
    this.selectedData = data;
  }
}
