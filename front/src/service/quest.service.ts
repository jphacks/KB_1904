import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store';
import { QuestApi } from 'src/api';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Quest } from 'src/models/quest';
import { SetQuest, SetQuests } from 'src/store/quest.store';

@Injectable()
export class QuestService {
  constructor(private store: Store<AppState>, private api: QuestApi) {}

  index(): Observable<Quest[]> {
    return this.api.index().pipe(
      map((t: any) => t.data),
      map((t: any) => {
        return t.map(_ => {
          return this.store.dispatch(new SetQuest(_.attributes));
        });
      })
    );
  }
  get(id: number): Observable<Quest> {
    return this.api.get(id).pipe(
      map((t: any) => t.data.attributes)
    );
  }
  update(quest: any): Observable<Quest> {
    return this.api.get(quest).pipe(tap(t => this.store.dispatch(new SetQuest(t))));
  }
  approve(id: number): Observable<Quest> {
    return this.api.approve(id).pipe(tap(t => this.store.dispatch(new SetQuest(t))));
  }
}
