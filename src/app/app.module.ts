import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootballComponent } from './pages/football/football.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { RemovebgComponent } from './pages/removebg/removebg.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './core/material.module';
import { CompetitionsComponent } from './pages/football/competitions/competitions.component';
import { TeamsComponent } from './pages/football/teams/teams.component';
import { PlayersComponent } from './pages/football/players/players.component';
import { MatchesComponent } from './pages/football/matches/matches.component';
import { ViewPlayersComponent } from './pages/football/teams/view-players/view-players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootballComponent,
    NavbarComponent,
    WeatherComponent,
    RemovebgComponent,
    CompetitionsComponent,
    TeamsComponent,
    PlayersComponent,
    MatchesComponent,
    ViewPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
