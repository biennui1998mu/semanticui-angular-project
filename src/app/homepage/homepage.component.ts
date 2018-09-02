import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  newsOnClick:News = null;

  clickUpdate:boolean = false;

  newsClick(){
    this.clickUpdate = false;
  }

  updatesClick(){
    this.clickUpdate = true;
  }

  clickedNews(news){
    this.newsOnClick = news;
  }

  ngOnInit() {
  }

}
