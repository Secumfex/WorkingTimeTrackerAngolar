import { Component, OnInit } from '@angular/core';

import { Data } from "../data";

@Component({
  selector: 'app-controlarea',
  templateUrl: './controlarea.component.html',
  styleUrls: ['./controlarea.component.css']
})
export class ControlareaComponent implements OnInit {

  // The Data interface is defined in ../data.ts
  data: Data = {
    id: 1234,
    name: "Kartoffel"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
