import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SygnomicsComponent } from './sygnomics.component';

const routes: Routes = [{ path: '', component: SygnomicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SygnomicsRoutingModule { }