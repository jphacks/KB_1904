import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { Quest } from 'src/models/quest';

export const SET_QUESTS = '[Quest] SetQuests';
export const SET_QUEST = '[Quest] SetQuest';

export class SetQuests implements Action {
  readonly type = SET_QUESTS;
  constructor(public quests: Quest[]) {}
}
export class SetQuest implements Action {
  readonly type = SET_QUEST;
  constructor(public quest: Quest) {}
}

export type All = SetQuests | SetQuest;

export interface State {
  quests: {};
}
export const initialState = {
  quests: {},
};
export const selectFeature = createFeatureSelector<State>('quest');
export const selectQuests = createSelector(
  selectFeature,
  s => Object.keys(s.quests).map(k => s.quests[k])
);
export const selectAchievedQuests = createSelector(
  selectFeature,
  s => Object.keys(s.quests).map(k => s.quests[k]).filter(q => q.status === 'requested')
);
export const selectOtherQuests = createSelector(
  selectFeature,
  s => Object.keys(s.quests).map(k => s.quests[k]).filter(q => q.status !== 'requested')
);
export const selectQuest = (id: number) =>
  createSelector(
    selectFeature,
    s => s.quests[id]
  );
export function reducer(state: State = initialState, action: All): State {
  switch (action.type) {
    case SET_QUESTS: {
      const quests = state.quests;
      action.quests.forEach(quest => (quests[quest.id] = quest));
      return { ...state, quests };
    }
    case SET_QUEST: {
      const quests = state.quests;
      const quest = action.quest;
      quests[quest.id] = quest;
      return { ...state, quests };
    }
    default: {
      return state;
    }
  }
}
