import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: any): Observable<any> {
    return this.http.get(this.apiUrl + '/api/weather?city='+ city);
  }
}
