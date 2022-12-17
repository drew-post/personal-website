import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalWebsiteComponent } from './personal-website.component';

const routes: Routes = [{ path: '', component: PersonalWebsiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalWebsiteRoutingModule { }