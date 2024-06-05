import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public nombreComercial = 'RaldAdmin';

  menuItems: any[] = [
    {
      idModulo: 1,
      descripcionModulo: 'Football',
      icon: 'https://www.football-data.org/assets/logo.jpg',
      url: 'football',
      flEstado: 1,
    },
    {
      idModulo: 2,
      descripcionModulo: 'Weather',
      icon: 'https://cdn.weatherapi.com/v4/images/weatherapi_logo.png',
      url: 'weather',
      flEstado: 1,
    },
    {
      idModulo: 3,
      descripcionModulo: 'Remove BG',
      icon: 'https://play-lh.googleusercontent.com/4kF2IUQxdLs86iAVsmnHA1B34uO-dvtszKM8qzscc1InZb-2_JI0WANyOiWiV3qyNg',
      url: 'removebg',
      flEstado: 1,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToModule(menu: any) {
    this.router.navigate([menu.url], {
      state: { paginas: menu.paginas },
    });
  }

}
