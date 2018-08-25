import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { updates } from '../../models/classexport';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  newsOnClick:News = null;
  updatesOnClick:updates = null;

  clickedNews(news){
    this.newsOnClick = news;
  }

  clickedUpdates(updates){
    this.updatesOnClick = updates;
  }
  ngOnInit() {
  }

}
