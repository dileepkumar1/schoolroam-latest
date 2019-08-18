import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { VideoSummaryComponent } from './video-summary/video-summary.component';



const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'home',
     component: HomeComponent,
     children:[
      {path:'', redirectTo:'index', pathMatch:'full'},
      { path: 'podcast', component:PodcastsComponent  },
      { path: 'index', component: VideoSummaryComponent},
      {path:'**', redirectTo:'index', pathMatch:'full'}

     ]
  },
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
