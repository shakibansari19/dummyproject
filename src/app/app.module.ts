import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleCircleComponent } from './components/people-circle/people-circle.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleListComponent,
    PeopleDetailsComponent,
    PeopleCircleComponent,
    PlanetsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
