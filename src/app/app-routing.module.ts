import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FootballComponent } from './pages/football/football.component';
import { RemovebgComponent } from './pages/removebg/removebg.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { CompetitionsComponent } from './pages/football/competitions/competitions.component';
import { TeamsComponent } from './pages/football/teams/teams.component';
import { PlayersComponent } from './pages/football/players/players.component';
import { MatchesComponent } from './pages/football/matches/matches.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'football', component: FootballComponent, children: [
      {
        path: '', redirectTo: 'teams', pathMatch: 'full'
      },
      {
        path: 'competitions', component: CompetitionsComponent
      },
      {
        path: 'teams', component: TeamsComponent
      },
      {
        path: 'players', component: PlayersComponent
      },
      {
        path: 'matches', component: MatchesComponent
      },
    ]
  },
  {
    path: 'weather', component: WeatherComponent
  },
  {
    path: 'removebg', component: RemovebgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
