import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { NewsServicesService } from '../../services/news-services.service';
import { players } from '../../models/classexport';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private services: NewsServicesService) { 
      this.router.queryParams.subscribe(key=>{
        this.searchString = key['searchString'];
        this.searchFunc();
      })
  }

  ngOnInit() {
    console.log(this.searchString);
    
  }

  searchString:string ='';
  listSearch:players[] = [];

  searchFunc(){
    let searchString = this.searchString.trim();
    if (searchString.length > 2) {
      this.services.searchPlayer(searchString).pipe(
        debounceTime(500)
      ).subscribe(
        listfound =>{
          console.log(listfound)
          this.listSearch = listfound;
        }
      )
    }
  }

}
