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
import { AndioopComponent } from './components/andioop/andioop.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { PersonalWebsiteComponent } from './components/personal-website/personal-website.component';
import { SygnomicsComponent } from './components/sygnomics/sygnomics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    ProjectsComponent,
    AboutComponent,
    HeaderComponent,
    AndioopComponent,
    MeetTheTeamComponent,
    PersonalWebsiteComponent,
    SygnomicsComponent,
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
