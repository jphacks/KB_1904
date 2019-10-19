import { NgModule } from '@angular/core';
import { TopReportComponent } from './parent/top-report/top-report.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { QuestCardComponent } from './parent/quest-card/quest-card.component';
import { RewardCardComponent } from './parent/reward-card/reward-card.component';

@NgModule({
  declarations: [TopReportComponent, QuestCardComponent, RewardCardComponent],
  imports: [IonicModule, CommonModule],
  exports: [TopReportComponent, QuestCardComponent, RewardCardComponent],
})
export class ComponentsModule {}
