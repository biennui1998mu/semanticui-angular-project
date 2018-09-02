import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../../models/news';
import { NewsServicesService } from '../../services/news-services.service';
import { comment } from '../../models/classexport';

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
        console.log(listNews);
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

  newscomment:comment[] = [];
  textInput:string = '';
  emailInput:string = '';
  comment:string = '';

  private commentData ={
    email:'',
    comment: '',
    idNews: null,
  }

  preparedata():boolean{
    if (this.textInput.length > 0){
      this.commentData.idNews = this.aNews.id;
      this.commentData.email = this.emailInput;
      this.commentData.comment = this.textInput;
      return true;
    }
    return false;
  }

  onSubmit(){
    if (this.textInput.length > 1) {
      let tempt:comment = new comment;
      tempt.comment = this.textInput;
      this.newscomment.push(tempt);
    }
    if (this.preparedata()){
      this.emailInput = '';
      this.textInput = '';
      this.newsServices.uploadComment(this.commentData).subscribe(
        res => {
          console.log(res)
        }
      )
    }else{
      console.log('lmao');
    }
  }

}
