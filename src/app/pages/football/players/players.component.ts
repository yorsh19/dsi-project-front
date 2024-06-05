import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any[] = [];

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.getScorers();
  }

  getScorers() {
    this.footballService.getScorers('PL').subscribe(data => {
      this.players = data.scorers;
    });
  }
}
