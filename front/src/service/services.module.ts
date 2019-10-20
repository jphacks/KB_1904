import { AuthService } from './auth.service';
import { QuestService } from './quest.service';
import { RewardService } from './reward.service';
import { UserService } from './user.service';
import { MessagingService } from './messaging.service';
import { LogService } from './log.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [
    AuthService,
    QuestService,
    RewardService,
    UserService,
    MessagingService,
    LogService
  ],
})

export class ServiceModule {}
