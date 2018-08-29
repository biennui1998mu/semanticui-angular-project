import { Component, OnInit } from '@angular/core';
import { NewsServicesService } from '../../services/news-services.service';
import { teams, players } from '../../models/classexport';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  selecttop1:boolean = true;
  selecttop6:boolean = false;
  proteams:boolean = true;
  proplayers:boolean = false;

  constructor(private servicesData: NewsServicesService) { }

  listTeam:teams[] = [];
  listTop5:teams[] =[];
  listTop10:teams[] =[];
  listTop20:teams[] =[];

  listplayer:players[] = [];


  ngOnInit() {
    this.servicesData.getAllTeam().subscribe(
      listTeam => {
        this.listTeam = listTeam;
        if(listTeam.length > 0){
          this.listTop5 = this.listTeam.slice(0,5);
          this.listTop10 = this.listTeam.slice(5,10);
          this.listTop20 = this.listTeam.slice(10);
        }
      }
    )
    this.servicesData.getAllplayer().subscribe(
      listplayer => {
        this.listplayer = listplayer;
        if(listplayer.length > 0) {
          this.listplayer = this.listplayer.slice(0,5);
        }
      }
    )

  }

  clickTop1(){
    this.selecttop1 = true;
    this.selecttop6 = false;
  }
  clickTop6(){
    this.selecttop1 = false;
    this.selecttop6 = true;
  }
  clickTop10(){
    this.selecttop1 = false;
    this.selecttop6 = false;
  }

  clickproteams(){
    this.proteams = true;
    this.proplayers = false;
  }
  clickproplayers(){
    this.proteams = false;
    this.proplayers = true;
  }
}
