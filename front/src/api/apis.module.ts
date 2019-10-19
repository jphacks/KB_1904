import { NgModule } from '@angular/core';

import { AuthApi } from './auth';
import { QuestApi } from './quest';
import { RewardApi } from './reward';
import { UserApi } from './user';

@NgModule({
  providers: [
    AuthApi,
    QuestApi,
    RewardApi,
    UserApi
  ],
})
export class ApisModule {}
