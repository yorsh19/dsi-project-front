import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FootballService } from 'src/app/services/football.service';
import { ViewPlayersComponent } from './view-players/view-players.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];
  competition: any;
  areas: any[] = [];
  area: any;
  competitions: any = [
    {
      id: 2000,
      name: 'FIFA World Cup',
      emblem: "https://crests.football-data.org/qatar.png",
      flag: null,
    },
    {
      id: 2001,
      name: 'UEFA Champions League',
      emblem: "https://crests.football-data.org/CL.png",
      flag: "https://crests.football-data.org/EUR.svg"
    },
    {
      id: 2002,
      name: 'Bundesliga',
      emblem: "https://crests.football-data.org/BL1.png",
      flag: "https://crests.football-data.org/759.svg"
    },
    {
      id: 2003,
      name: 'Eredivisie',
    emblem: "https://crests.football-data.org/ED.png",
    },
    {
      id: 2013,
      name: 'Campeonato Brasileiro Série A',
      emblem: "https://crests.football-data.org/bsa.png",
    },
    {
      id: 2014,
      name: 'Primera Division',
      emblem: "https://crests.football-data.org/PD.png",
      flag: "https://crests.football-data.org/760.svg"
    },
    {
      id: 2015,
      name: 'Ligue 1',
      flag: "https://crests.football-data.org/773.svg",
      emblem: "https://crests.football-data.org/FL1.png",
    },
    {
      id: 2016,
      name: 'Championship',
      emblem: "https://crests.football-data.org/ELC.png",
      flag: "https://crests.football-data.org/770.svg"
    },
    {
      id: 2017,
      name: 'Primeira Liga',
      emblem: "https://crests.football-data.org/PPL.png",
      flag: "https://crests.football-data.org/765.svg"
    },
    {
      id: 2018,
      name: 'European Championship',
      emblem: "https://crests.football-data.org/ec.png",
      flag: "https://crests.football-data.org/EUR.svg"
    },
    {
      id: 2019,
      name: 'Serie A',
      emblem: "https://crests.football-data.org/SA.png",
      flag: "https://crests.football-data.org/784.svg"
    },
    {
      id: 2021,
      name: 'Premier League',
      emblem: "https://crests.football-data.org/PL.png",
      flag: "https://crests.football-data.org/770.svg"
    },
    {
      id: 2152,
      name: 'Copa Libertadores',
      emblem: "https://crests.football-data.org/CLI.svg",
      flag: "https://crests.football-data.org/CLI.svg"
    },
  ];
  isLoading = false;

  constructor(
    private footballService: FootballService,
    public _modalDialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  getTeams() {
    this.isLoading = true;
    this.footballService.getTeams(this.competition).subscribe((data) => {
      this.teams = data.teams;
      this.isLoading = false;
    });
  }

  viewPlayers(row: any) {
    let dialogWidth = '70%';
    let dialogMaxWidth = '80%';
    if (window.innerWidth < 768) {
      dialogWidth = '95%';
      dialogMaxWidth = '95%';
    }
    if (window.innerWidth < 1025 && window.innerWidth > 768) {
      console.log('width: ', window.innerWidth);
      dialogWidth = '95%';
      dialogMaxWidth = '95%';
    }
    const dialogRef = this._modalDialog.open(ViewPlayersComponent, {
      autoFocus: false,
      hasBackdrop: true,
      maxWidth: dialogMaxWidth,
      width: dialogWidth,
      maxHeight: '95%',
      disableClose: true,
    });
    dialogRef.componentInstance.param = row.squad;
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 1) {
      }
    });
  }
}
