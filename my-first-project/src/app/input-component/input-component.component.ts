import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data';
import { DATA } from '../stubdata';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  //The @Input() lets this be bound or injected to other components or something
  @Input() data?: Data;

  datas = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
