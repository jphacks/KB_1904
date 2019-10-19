import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { QuestApi } from 'src/api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Quest } from 'src/models/quest';
import { SetQuest, SetQuests } from 'src/store/quest.store';

@Injectable()
export class QuestService {
  constructor(private store: Store<AppState>, private api: QuestApi) {}

  get(id: number): Observable<Quest> {
    return this.api.get(id).pipe(tap(t => this.store.dispatch(new SetQuest(t))));
  }
  index(): Observable<Quest[]> {
    return this.api.index().pipe(tap(t => this.store.dispatch(new SetQuests(t))));
  }
}
