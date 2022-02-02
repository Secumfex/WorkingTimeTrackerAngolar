import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../data';
import { ExternalDataService } from '../external-data.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  data?: Data;

  constructor(
    private route: ActivatedRoute,
    private externalDataService: ExternalDataService) { }

  ngOnInit(): void {

  }

  getData(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.externalDataService.getData(id)
  }
}
