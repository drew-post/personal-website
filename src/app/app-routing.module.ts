import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { AndIOopComponent } from './components/andioop/andioop.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { PersonalWebsiteComponent } from './components/personal-website/personal-website.component';
import { SygnomicsComponent } from './components/sygnomics/sygnomics.component';
import { TargetSumGameComponent } from './components/target-sum-game/target-sum-game.component';
import { BakesaleAppComponent } from './components/bakesale-app/bakesale-app.component'

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
    component: AndIOopComponent 
  },
  { 
    path: 'projects/meettheteam', 
    component: MeetTheTeamComponent 
  },
  {
    path: 'projects/personalwebsite',
    component: PersonalWebsiteComponent
  },
  {
    path: 'projects/sygnomics',
    component: SygnomicsComponent
  },
  {
    path: 'projects/targetsumgame',
    component: TargetSumGameComponent
  },
  {
    path: 'projects/bakesaleapp',
    component: BakesaleAppComponent
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
