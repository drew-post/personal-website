import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { AndIOopComponent } from './components/andioop/andioop.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { PersonalWebsiteComponent } from './components/personal-website/personal-website.component';
import { SygnomicsComponent } from './components/sygnomics/sygnomics.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { TargetSumGameComponent } from './components/target-sum-game/target-sum-game.component';
import { BakesaleAppComponent } from './components/bakesale-app/bakesale-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    ProjectsComponent,
    AboutComponent,
    HeaderComponent,
    AndIOopComponent,
    MeetTheTeamComponent,
    PersonalWebsiteComponent,
    SygnomicsComponent,
    ComingSoonComponent,
    TargetSumGameComponent,
    BakesaleAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
