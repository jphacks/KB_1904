import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { QuestAchievement, RewardAcquisition, PointGrant } from 'src/models';

export const SET_ACHIEVEMENTS = '[Log] SetAchievements';
export const SET_ACQUISITIONS = '[Log] SetAcquisitions';
export const SET_GRANTS = '[Log] SetGrants';

export class SetAchievements implements Action {
  readonly type = SET_ACHIEVEMENTS;
  constructor(public logs: QuestAchievement[]) {}
}

export class SetAcquisitions implements Action {
  readonly type = SET_ACQUISITIONS;
  constructor(public logs: RewardAcquisition[]) {}
}

export class SetGrants implements Action {
  readonly type = SET_GRANTS;
  constructor(public logs: PointGrant[]) {}
}

export type All = SetAchievements | SetAcquisitions | SetGrants;

export interface State {
  achievements: {};
  acquisitions: {};
  grants: {};
}
export const initialState = {
  achievements: {},
  acquisitions: {},
  grants: {}
};

export const selectFeature = createFeatureSelector<State>('log');
export const selectAchievements = createSelector(
  selectFeature,
  s => s ? Object.keys(s.achievements).map(k => s.achievements[k]) : []
);
export const selectAcquisitions = createSelector(
  selectFeature,
  s => s ? Object.keys(s.acquisitions).map(k => s.acquisitions[k]) : []
);
export const selectGrants = createSelector(
  selectFeature,
  s => s ? Object.keys(s.grants).map(k => s.grants[k]) : []
);

export function reducer(state: State = initialState, action: All): State {
  switch (action.type) {
    case SET_ACHIEVEMENTS: {
      const logs = state.achievements;
      console.log(logs)
      action.logs.forEach(log => (logs[log.id] = log));
      return { ...state, achievements: logs };
    }
    case SET_ACQUISITIONS: {
      const logs = state.acquisitions;
      action.logs.forEach(log => (logs[log.id] = log));
      return { ...state, acquisitions: logs };
    }
    case SET_GRANTS: {
      const logs = state.grants;
      action.logs.forEach(log => (logs[log.id] = log));
      return { ...state, grants: logs };
    }
    default: {
      return state;
    }
  }
}
