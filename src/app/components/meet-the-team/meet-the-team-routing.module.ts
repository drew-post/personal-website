import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetTheTeamComponent } from './meet-the-team.component';

const routes: Routes = [{ path: '', component: MeetTheTeamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetTheTeamRoutingModule { }
