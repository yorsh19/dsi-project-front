import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {

  competitions: any[] = [];
  teams: any[] = [];
  players: any[] = [];

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.getAreaList();
  }

  getAreaList() {
    this.footballService.getAreaList().subscribe(data => {
      console.log(data);
    });
  }
}
