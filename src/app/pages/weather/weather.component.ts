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
  isLoading = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getCurrentWeather(){
    this.isLoading = true;
    this.weatherService.getCurrentWeather(this.city).subscribe(data => {
      this.weather = data;
      this.isLoading = false;
    })
  }
}
