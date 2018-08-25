import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  selecttop1:boolean = true;
  selecttop6:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickTop1(){
    this.selecttop1 = true;
    this.selecttop6 = false;
  }

  clickTop6(){
    this.selecttop1 = false;
    this.selecttop6 = true;
  }

  clickTop10(){
    this.selecttop1 = false;
    this.selecttop6 = false;
  }

}
