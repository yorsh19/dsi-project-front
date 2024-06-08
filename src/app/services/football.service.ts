import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAreaList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/areas`);
  }

  getCompetitionList(areas: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/?areas=${areas}`);
  }

  getCompetition(competitionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}`);
  }

  getTeams(competitionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}/teams`);
  }

  getScorers(competitionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}/scorers`);
  }

  getMatch(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matches`);
  }

}
