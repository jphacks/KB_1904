import * as jwtToken from './jwt-token.store';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  jwtToken: jwtToken.State;
}

export const reducers: ActionReducerMap<AppState> = {
  jwtToken: jwtToken.reducer,
};
