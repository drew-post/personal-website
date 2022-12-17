import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TargetSumGameRoutingModule } from './target-sum-game-routing.module';
import { TargetSumGameComponent } from './target-sum-game.component';

@NgModule({
  imports: [
    TargetSumGameRoutingModule,
    SharedModule
  ],
  declarations: [
    TargetSumGameComponent
  ],
})

export class TargetSumGameModule { }