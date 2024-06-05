import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiUrl = 'http://localhost:8080';
  private apiKey = '96a428ad93b640e9b9218c3f8fa9cc9e';  // Reemplaza con tu API Key

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Auth-Token': this.apiKey
    });
  }

  getAreaList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/areas`, { headers: this.getHeaders() });
  }

  getCompetitionList(areas: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/?areas=${areas}`, { headers: this.getHeaders() });
  }

  getCompetition(competitionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}`, { headers: this.getHeaders() });
  }

  getCompetitionStandings(competitionId: string, season: string, matchday: string): Observable<any> {
    const params = new HttpParams()
      .set('season', season)
      .set('matchday', matchday);
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}/standings`, { headers: this.getHeaders(), params });
  }

  getCompetitionMatches(competitionId: string, matchday: string): Observable<any> {
    const params = new HttpParams().set('matchday', matchday);
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}/matches`, { headers: this.getHeaders(), params });
  }

  getTeams(competitionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}/teams`, { headers: this.getHeaders() });
  }

  getScorers(competitionId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/competitions/${competitionId}/scorers`, { headers: this.getHeaders() });
  }

  getTeam(teamId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams/${teamId}`, { headers: this.getHeaders() });
  }

  getTeamMatches(teamId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams/${teamId}/matches`, { headers: this.getHeaders() });
  }

  getPerson(personId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/persons/${personId}`, { headers: this.getHeaders() });
  }

  getPersonMatches(personId: string, limit: string): Observable<any> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get(`${this.apiUrl}/persons/${personId}/matches`, { headers: this.getHeaders(), params });
  }

  getMatch(matchId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/matches/${matchId}`, { headers: this.getHeaders() });
  }

  getMatchHead2Head(matchId: string, limit: string): Observable<any> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get(`${this.apiUrl}/matches/${matchId}/head2head`, { headers: this.getHeaders(), params });
  }
}
