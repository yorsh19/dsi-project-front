import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '56370cd960a745239ec174241240106';
  private apiUrl = 'http://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: any): Observable<any> {
    return this.http.get(
      this.apiUrl + '/current.json?key=' + this.apiKey + '6&q=' + city +'&aqi=no'
    );
  }
}
