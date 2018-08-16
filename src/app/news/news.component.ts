import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() aNews:News = null;
  @Input() clickedNews = false;
  
  vidu:News ={
    id:1,
    title: "abc",
    content: "content nek",
    created_at: "asdasd",
    updated_at: "asdasd"
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(news){
    this.aNews = news;
    this.clickedNews = true;
  }

  back(){
    this.aNews = null;
    this.clickedNews = false;
  }

}
