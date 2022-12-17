import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TargetSumGameComponent } from './target-sum-game.component';

const routes: Routes = [{ path: '', component: TargetSumGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetSumGameRoutingModule { }