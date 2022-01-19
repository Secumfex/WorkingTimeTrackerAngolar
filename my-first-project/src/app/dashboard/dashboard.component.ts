import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ExternalDataService } from "../external-data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datas?: Data[];
  constructor(private externalDataService: ExternalDataService) { }

  ngOnInit(): void {
    this.getDatas();
  }

  getDatas(): void {
    this.externalDataService.getData()
      .subscribe(datas => this.datas = datas.slice(0, 3));
  }
}
