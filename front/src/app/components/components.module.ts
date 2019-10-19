import { NgModule } from '@angular/core';
import { TopReportComponent } from './parent/top-report/top-report.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { QuestCardComponent } from './parent/quest-card/quest-card.component';
import { RewardCardComponent } from './parent/reward-card/reward-card.component';
import { ButtonWrapperComponent } from './child/button-wrapper/button-wrapper.component';
import { BackButtonComponent } from './child/back-button/back-button.component';
import { HintButtonComponent } from './child/hint-button/hint-button.component';

@NgModule({
  declarations: [
    TopReportComponent,
    QuestCardComponent,
    QuestCardComponent,
    RewardCardComponent,
    ButtonWrapperComponent,
    BackButtonComponent,
    HintButtonComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    TopReportComponent,
    QuestCardComponent,
    QuestCardComponent,
    RewardCardComponent,
    ButtonWrapperComponent,
    BackButtonComponent,
    HintButtonComponent,
  ],
})
export class ComponentsModule {}
