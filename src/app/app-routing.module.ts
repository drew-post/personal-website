import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'projects/andioop',
    loadChildren: () => import('./components/andioop/andioop.module').then(m => m.AndIOopModule)
  },
  {
    path: 'projects/meettheteam',
    loadChildren: () => import('./components/meet-the-team/meet-the-team.module').then(m => m.MeetTheTeamModule),
  },
  {
    path: 'projects/personalwebsite',
    loadChildren: () => import('./components/personal-website/personal-website.module').then(m => m.PersonalWebsiteModule),
  },
  {
    path: 'projects/sygnomics',
    loadChildren: () => import('./components/sygnomics/sygnomics.module').then(m => m.SygnomicsModule),
  },
  {
    path: 'projects/targetsumgame',
    loadChildren: () => import('./components/target-sum-game/target-sum-game.module').then(m => m.TargetSumGameModule),
  },
  {
    path: 'projects/bakesaleapp',
    loadChildren: () => import('./components/bakesale-app/bakesale-app.module').then(m => m.BakesaleAppModule)
  },
  {
    path: 'projects/weatherapp',
    loadChildren: () => import('./components/weather-app/weather-app.module').then(m =>m.WeatherAppModule)
  },
  {
    path: 'projects/chatapp',
    loadChildren: () => import('./components/chat-app/chat-app.module').then(m => m.ChatAppModule)
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
