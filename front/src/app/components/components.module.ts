import { NgModule } from '@angular/core';
import { TopReportComponent } from './top-report/top-report.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { QuestCardComponent } from './quest-card/quest-card.component';
import { RewardCardComponent } from './reward-card/reward-card.component';

@NgModule({
  declarations: [TopReportComponent, QuestCardComponent, RewardCardComponent],
  imports: [IonicModule, CommonModule],
  exports: [TopReportComponent, QuestCardComponent, RewardCardComponent],
})
export class ComponentsModule {}
