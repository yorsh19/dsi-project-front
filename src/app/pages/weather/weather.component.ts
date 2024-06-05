import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: any;
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getCurrentWeather(){
    this.weatherService.getCurrentWeather(this.city).subscribe(data => {
      this.weather = data;
    })
  }
}
