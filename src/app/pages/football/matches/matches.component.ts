import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  isLoading = false;
  matches: any;
  alertClass = 'alert-warning';
  alertMessage = '';
  message = 'No hay partidos para hoy';

  constructor(
    private footballService: FootballService,
    public _modalDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches() {
    this.isLoading = true;
    this.footballService.getMatch().subscribe((data) => {
      this.matches = data.matches;
      this.isLoading = false;
    });
  }

}
