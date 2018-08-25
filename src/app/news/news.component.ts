import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../../models/news';
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() aNews:News = null;
  @Input() clickedNews = false;
  @Output() clickedNewsOut = new EventEmitter<News>();
  
  listNews:News[] = [];

  constructor(
    private newsServices:NewsServicesService
  ) { }

  ngOnInit() {
    this.listNews = this.newsServices.getAllNews();
  }

  onClick(news){
    this.aNews = news;
    this.clickedNews = true;
    this.clickedNewsOut.emit(news);
  }

  back(){
    this.aNews = null;
    this.clickedNews = false;
    this.clickedNewsOut.emit(null);
  }

}
