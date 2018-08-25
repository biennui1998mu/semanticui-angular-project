import { Component, OnInit, Input } from '@angular/core';
import { fakemaps } from "../../models/fakemaps";
import { Maps } from "../../models/classexport";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  maps = fakemaps;
  constructor() { }

  ngOnInit() {
  }

  selectmap: Maps=null;
  onSelect(map: Maps): void {
    this.selectmap = map;
  }

  selectintro(){
    this.selectmap = null;
  }
}
