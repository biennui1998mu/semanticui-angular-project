import { Component, OnInit } from '@angular/core';
import { news_contents } from '../../models/news';
import { NewsServicesService } from '../../services/news-services.service';

@Component({
  selector: 'app-updatenews',
  templateUrl: './updatenews.component.html',
  styleUrls: ['./updatenews.component.css']
})
export class UpdatenewsComponent implements OnInit {
  newscontentlist:news_contents[] = [];
  title:string = '';

  constructor(
    private newsservices:NewsServicesService
  ) { }

  ngOnInit() {
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

  chooseAdd(){
    if(this.textInput.length > 1){
      let temp:news_contents = new news_contents;
      temp.content = this.textInput;
      temp.img =  this.imgInput
      this.newscontentlist.push(temp)
    }
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

}

