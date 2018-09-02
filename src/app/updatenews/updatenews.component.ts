import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { news_contents, News } from '../../models/news';
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-updatenews',
  templateUrl: './updatenews.component.html',
  styleUrls: ['./updatenews.component.css']
})
export class UpdatenewsComponent implements OnInit {
  @Input() aNews:News = null;
  @Output() clickedNewsOut = new EventEmitter<News>();

  
  newscontentlist:news_contents[] = [];
  title:string = '';
  listNews:News[] = [];

  add:boolean = true;
  update:boolean = false;

  clickadd(){
    this.add = true;
    this.update = false;
  }
  clickupdate(){
    this.add = false;
    this.update = true;
  }

  constructor(
    private newsservices:NewsServicesService
  ) { }

  ngOnInit() {
    this.newsservices.getAllNews().subscribe(
      listNews => {
        this.listNews = listNews;
      }
    )
  }
  onClick(news){
    this.aNews = news;
    this.clickedNewsOut.emit(news);
  }

  textInput:string = '';
  imgInput:string = '';

  private formData ={
    title:'',
    contents:[] = [],
    idUser:null
  }

  preparedata():boolean{
    if (this.newscontentlist.length > 0 && this.title.length > 2){
      this.formData.title = this.title;
      this.formData.contents = this.newscontentlist;
      this.formData.idUser = 1
      return true;
    }
    return false;
  }

  onSubmit(){
    if (this.preparedata()){
      this.newsservices.uploadNews(this.formData).subscribe(
        res => {
          console.log(res)
        }
      )
    }
  }

  chooseEdit(){

  }
  deletenews(news){

  }
}
