import { NgModule } from '@angular/core';

import { AuthApi } from './auth';
import { QuestApi } from './quest';
import { RewardApi } from './reward';
import { UserApi } from './user';
import { LogApi } from './log';

@NgModule({
  providers: [
    AuthApi,
    QuestApi,
    RewardApi,
    UserApi,
    LogApi
  ],
})
export class ApisModule {}
