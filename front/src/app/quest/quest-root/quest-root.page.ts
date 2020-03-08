import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { QuestService } from '../../../service';

import { selectAchievedQuests, selectOtherQuests } from 'src/store/quest.store';
import { Quest } from 'src/models/quest';

@Component({
  selector: 'app-quest-root',
  templateUrl: './quest-root.page.html',
  styleUrls: ['./quest-root.page.scss'],
})
export class QuestRootPage implements OnInit {
  achievededQuests$: Observable<Quest[]>;
  otherQuests$: Observable<Quest[]>;

  constructor(private questSvc: QuestService, private store: Store<AppState>, private router: Router) {
    this.achievededQuests$ = this.store.pipe(select(selectAchievedQuests));
    this.otherQuests$ = this.store.pipe(select(selectOtherQuests));
  }

  ngOnInit() {
    this.questSvc.index().subscribe();
  }

  navigateToDetail(id: number) {
    this.router.navigateByUrl(`tabs/quest/${id}`);
  }
  fabClicked() {
    this.router.navigateByUrl(`tabs/quest/create`);
  }
}
