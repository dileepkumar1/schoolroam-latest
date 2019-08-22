import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { VideoSummaryComponent } from './video-summary/video-summary.component';
import { PublishedBooksComponent } from './published-books/published-books.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { TravelBookComponent } from './travel-book/travel-book.component';
import { PrincipalDeskComponent } from './principal-desk/principal-desk.component'




const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'home',
     component: HomeComponent,
  },
  { path: 'two', component:HomeTwoComponent,

  children:[
    {path:'', redirectTo:'index', pathMatch:'full'},
    { path: 'podcast', component:PodcastsComponent  },
    { path: 'index', component: VideoSummaryComponent},
    { path: 'publishedbooks', component:PublishedBooksComponent},
    { path: 'travel-book', component:TravelBookComponent},
    { path: 'principal-desk', component:TravelBookComponent},
  ]
  },
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
