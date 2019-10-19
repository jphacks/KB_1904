import { AuthService } from './auth.service';
import { QuestService } from './quest.service';
import { RewardService } from './reward.service';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    AuthService,
    QuestService,
    RewardService,
    UserService,
  ],
})

export class ServiceModule {}
