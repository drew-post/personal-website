import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MeetTheTeamRoutingModule } from './meet-the-team-routing.module';
import { MeetTheTeamComponent } from './meet-the-team.component';

@NgModule({
  imports: [
    MeetTheTeamRoutingModule,
    SharedModule
  ],
  declarations: [
    MeetTheTeamComponent
  ],
})

export class MeetTheTeamModule { }
