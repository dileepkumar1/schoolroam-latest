import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { VideoSummaryComponent } from './video-summary/video-summary.component';
import { MDBBootstrapModule,CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { PublishedBooksComponent } from './published-books/published-books.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { TravelBookComponent } from './travel-book/travel-book.component';
import { PrincipalDeskComponent } from './principal-desk/principal-desk.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PodcastsComponent,
    VideoSummaryComponent,
    PublishedBooksComponent,
    HomeTwoComponent,
    TravelBookComponent,
    PrincipalDeskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    WavesModule,
     MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  
  
})
export class AppModule { }
