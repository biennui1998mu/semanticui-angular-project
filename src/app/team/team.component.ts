import { Component, OnInit } from '@angular/core';
import { teams } from '../../models/classexport';
import { NewsServicesService } from '../../services/news-services.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  searchInputText:string = '';
  listTeams:teams[] = [];
  showInfo:boolean = true;
  showUR:boolean = false;
  showOUC:boolean = false;
  showA:boolean = false;
  dateDay;
  dateHour;
  dateMinute;
  dateSecond;
  coverteam: string = "https://i.redd.it/l7p01nrdxue01.png";

  constructor(private newsServices:NewsServicesService) { }

  ngOnInit() {
    this.newsServices.getAllTeam().subscribe(
      listTeams => {
        this.listTeams = listTeams;
      }
    )

    setInterval(()=>{
      this.getDateAcom();
    },1000);
  }

  getDateAcom(){
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
      let countDown = new Date('September 03, 2018, 9:00:00 AM').getTime()
      let now = new Date().getTime();
      let distance = countDown - now;
      this.dateDay = Math.floor(distance / (day)),
      this.dateHour = Math.floor((distance % (day)) / (hour)),
      this.dateMinute = Math.floor((distance % (hour)) / (minute)),
      this.dateSecond = Math.floor((distance % (minute)) / second);
  }

  searchInput(){
    if(this.searchInputText.length >1 && this.searchInputText.length <11){
    }
  }

  clickInfo(){
    this.showInfo = true;
    this.showUR = false;
    this.showOUC = false;
    this.showA = false;
  }
  clickUR() {
    this.showInfo = false;
    this.showUR = true;
    this.showOUC = false;
    this.showA = false;
  }
  clickOUC() {
    this.showInfo = false;
    this.showUR = false;
    this.showOUC = true;
    this.showA = false;
  }
  clickA() {
    this.showInfo = false;
    this.showUR = false;
    this.showOUC = false;
    this.showA = true;
  }
}
