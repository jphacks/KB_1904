import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { QuestService } from '../../../service';
import { Quest } from '../../../models';
import { selectAchievedQuests, selectOtherQuests, selectQuests } from '../../../store/quest.store';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-quest-root',
  templateUrl: './quest-root.page.html',
  styleUrls: ['./quest-root.page.scss'],
})
export class QuestRootPage implements OnInit {
  achievededQuests$: Observable<Quest[]>;
  otherQuests$: Observable<Quest[]>;

  constructor(
    private questSvc: QuestService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.achievededQuests$ = this.store.pipe(select(selectAchievedQuests));
    this.otherQuests$ = this.store.pipe(select(selectOtherQuests));
    this.otherQuests$.subscribe(_ => console.log(_));
  }

  ngOnInit() {
    this.questSvc.index().pipe(take(1)).subscribe();
  }
  navigateToDetail(id: number) {
    this.router.navigateByUrl(`tabs/quest/${id}`);
  }
}
