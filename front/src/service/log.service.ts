import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { LogApi } from 'src/api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SetAchievements, SetAcquisitions, SetGrants } from 'src/store/log.store';
import { QuestAchievement, RewardAcquisition, PointGrant } from 'src/models';

@Injectable()
export class LogService {
  constructor(private store: Store<AppState>, private api: LogApi) {}

  achievements(): Observable<QuestAchievement[]> {
    return this.api.achievements().pipe(tap(t => this.store.dispatch(new SetAchievements(t))));
  }
  acquisitions(): Observable<RewardAcquisition[]> {
    return this.api.acquisitions().pipe(tap(t => this.store.dispatch(new SetAcquisitions(t))));
  }
  grants(): Observable<PointGrant[]> {
    return this.api.grants().pipe(tap(t => this.store.dispatch(new SetGrants(t))));
  }
}
