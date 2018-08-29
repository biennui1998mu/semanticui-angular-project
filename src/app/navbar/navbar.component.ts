import { Component, OnInit } from '@angular/core';
import { NewsServicesService } from '../../services/news-services.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { players } from '../../models/classexport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private services:NewsServicesService,
  private route: Router) { }

  ngOnInit() {
  }
  searchString:string='';
  listseach:players[] = [];

  onSearch(){
    let stringS = this.searchString.trim();
    if (stringS.length > 2) this.route.navigateByUrl("/search?searchString="+this.searchString);
  }

}
