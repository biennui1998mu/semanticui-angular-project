import { Component, OnInit } from '@angular/core';
import { players } from '../../models/classexport';
import { NewsServicesService } from '../../services/news-services.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player:players = null;

  statistics:boolean = true;
  career:boolean = false;
  gallaries:boolean = false;

  idplayer:number;

  constructor(
    private servicesData:NewsServicesService,
    private router: ActivatedRoute) { 
      this.router.params.subscribe(key=>{
        this.idplayer = key['id'];
        this.servicesData.getPlayer(this.idplayer).subscribe(
        listplayer => {
          console.log(listplayer);
          this.player = listplayer[0];
      })
    })
  }

  ngOnInit() {
    
  }

  clickstatistics(){
    this.statistics = true;
    this.career = false;
    this.gallaries = false;
  }
  clickcareer(){
    this.statistics = false;
    this.career = true;
    this.gallaries = false;
  }
  clickgallaries(){
    this.statistics = false;
    this.career = false;
    this.gallaries = false;
  }

}
