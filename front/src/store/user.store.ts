import { Action } from '@ngrx/store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Parent, Child } from 'src/models';

export const SET_CURRENT_PARENT = '[User] SetCurrentParent';
export const SET_CURRENT_CHILD = '[User] SetCurrntChild';

export class SetCurrentParent implements Action {
  readonly type = SET_CURRENT_PARENT;
  constructor(public parent: Parent) {}
}
export class SetCurrentChild implements Action {
  readonly type = SET_CURRENT_CHILD;
  constructor(public child: Child) {}
}
export type All = SetCurrentParent | SetCurrentChild;

export interface State {
  currentParent: Parent;
  currentChild: Child;
}
export const initialState = {
  currentParent: null,
  currentChild: null,
};

export const selectFeature = createFeatureSelector<State>('user');
export const getCurrentParent = createSelector(
  selectFeature,
  (state: State) => state.currentParent
);
export const getCurrentChild = createSelector(
  selectFeature,
  (state: State) => state.currentChild
);

export function reducer(state: State = initialState, action: All): State {
  switch (action.type) {
    case SET_CURRENT_PARENT:
      return { ...state, currentParent: action.parent };
    case SET_CURRENT_CHILD:
      return { ...state, currentChild: action.child };
    default: {
      return state;
    }
  }
}
