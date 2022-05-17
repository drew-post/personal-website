import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { AndioopComponent } from './andioop/andioop.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomePageComponent 
  },
  { 
    path: 'projects', 
    component: ProjectsComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { 
    path: 'projects/andioop', 
    component: AndioopComponent 
  },
  { 
    path: 'projects/meettheteam', 
    component: MeetTheTeamComponent 
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
