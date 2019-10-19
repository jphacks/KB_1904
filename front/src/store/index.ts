import * as fromJwtToken from './jwt-token.store';
import * as fromUser from './user.store';
import * as fromQuest from './quest.store';
import * as fromReward from './reward.store';
import { ActionReducerMap } from '@ngrx/store';
export interface AppState {
  jwtToken: fromJwtToken.State;
  user: fromUser.State;
  quest: fromQuest.State;
  reward: fromReward.State;
}
export const reducers: ActionReducerMap<AppState> = {
  jwtToken: fromJwtToken.reducer,
  user: fromUser.reducer,
  quest: fromQuest.reducer,
  reward: fromReward.reducer,
};
