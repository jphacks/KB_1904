import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { RewardApi } from 'src/api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Reward } from 'src/models/reward';
import { SetReward, SetRewards } from 'src/store/reward.store';

@Injectable()
export class RewardService {
  constructor(private store: Store<AppState>, private api: RewardApi) {}

  get(id: number): Observable<Reward> {
    return this.api.get(id).pipe(tap(t => this.store.dispatch(new SetReward(t))));
  }
  index(): Observable<Reward[]> {
    return this.api.index().pipe(tap(t => this.store.dispatch(new SetRewards(t))));
  }
}
