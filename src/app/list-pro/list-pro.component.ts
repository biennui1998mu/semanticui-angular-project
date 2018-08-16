import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent implements OnInit {

  constructor() { }

  currentNews:News = null;
  currentNewsClick:boolean;

  ngOnInit() {
  }

}
