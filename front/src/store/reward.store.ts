import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Reward } from 'src/models/reward';

export const SET_REWARDS = '[Reward] SetRewards';
export const SET_REWARD = '[Reward] SetReward';

export class SetRewards implements Action {
  readonly type = SET_REWARDS;
  constructor(public rewards: Reward[]) {}
}
export class SetReward implements Action {
  readonly type = SET_REWARD;
  constructor(public reward: Reward) {}
}

export type All = SetRewards | SetReward;

export interface State {
  rewards: {};
}
export const initialState = {
  rewards: {},
};
export const selectFeature = createFeatureSelector<State>('reward');
export const selectRewards = createSelector(
  selectFeature,
  s => Object.keys(s.rewards).map(k => s.rewards[k])
);
export const selectReward = (id: string) =>
  createSelector(
    selectFeature,
    s => s.rewards[id]
  );
export function reducer(state: State = initialState, action: All): State {
  switch (action.type) {
    case SET_REWARDS: {
      const rewards = state.rewards;
      action.rewards.forEach(reward => (rewards[reward.id] = reward));
      return { ...state, rewards };
    }
    case SET_REWARD: {
      const rewards = state.rewards;
      const reward = action.reward;
      rewards[reward.id] = reward;
      return { ...state, rewards };
    }
  }
}
