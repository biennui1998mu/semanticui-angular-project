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
  @Output() clickedNewsOut = new EventEmitter<News>();
  
  listNews:News[] = [];

  constructor(
    private newsServices:NewsServicesService
  ) { }

  ngOnInit() {
    this.newsServices.getAllNews().subscribe(
      listNews => {
        this.listNews = listNews;
      }
    )
  }

  onClick(news){
    this.aNews = news;
    this.clickedNewsOut.emit(news);
  }

  back(){
    this.aNews = null;
    this.clickedNewsOut.emit(null);
  }

}
