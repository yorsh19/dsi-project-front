import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competitions: any[] = [];
  areas: any[] = [];
  competition: any;
  isLoading = false;

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.getAreaList();
    //this.getCompetition();
  }

  getCompetitionList() {
    this.footballService.getCompetitionList(this.competition).subscribe(data => {
      this.competitions = data.competitions;
    });
  }

  getAreaList() {
    this.footballService.getAreaList().subscribe(data => {
      console.log(data);
      this.areas = data.areas;
    });
  }
}
