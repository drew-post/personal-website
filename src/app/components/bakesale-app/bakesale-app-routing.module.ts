import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BakesaleAppComponent } from './bakesale-app.component';

const routes: Routes = [{ path: '', component: BakesaleAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BakesaleAppRoutingModule { }