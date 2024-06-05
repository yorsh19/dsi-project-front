import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FootballService } from 'src/app/services/football.service';
import { ViewPlayersComponent } from './view-players/view-players.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[] = [];
  competitions: any[] = [];
  areas: any[] = [];
  area: any;
  competition: any;

  constructor(private footballService: FootballService,
    public _modalDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAreaList();
  }

  getTeams() {
    this.footballService.getTeams(this.competition).subscribe(data => {
      this.teams = data.teams;
    });
  }

  getAreaList() {
    this.footballService.getAreaList().subscribe(data => {
      console.log(data);
      this.areas = data.areas;
    });
  }

  getCompetitionList() {
    this.footballService.getCompetitionList(this.area).subscribe(data => {
      this.competitions = data.competitions;
    });
  }

  viewPlayers(row: any) {
    let dialogWidth = '70%';
    let dialogMaxWidth = '80%';
    if (window.innerWidth < 768) {
      dialogWidth = '95%';
      dialogMaxWidth = '95%';
    }
    if (window.innerWidth < 1025 && window.innerWidth>768) {
      console.log("width: ", window.innerWidth)
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
