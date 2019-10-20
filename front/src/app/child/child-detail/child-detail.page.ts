import { Component, OnInit } from '@angular/core';
import { ChildModalPage } from '../child-modal/child-modal.page';
import { Router } from '@angular/router';
import {QuestService, UserService, AuthService} from '../../../service';
import {Child} from '../../../models/child';
import { take } from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import { selectQuests} from '../../../store/quest.store';
import {AppState} from '../../../store';
import {Quest, Reward} from 'src/models';
import {Observable} from 'rxjs';
import { selectRewards } from '../../../store/reward.store';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
})
export class ChildDetailPage implements OnInit {
  pageName: 'quest' | 'reward';
  child: Child;
  quests$: Observable<Array<Quest>>;
  rewards$: Observable<Array<Reward>>;
  constructor(
    private router: Router,
    private questSvc: QuestService,
    private authSvc: AuthService,
    private userSvc: UserService,
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
    this.questSvc.index().pipe(take(1)).subscribe();
    this.pageName = this.router.url.split('/').pop() as 'quest' | 'reward';
    this.child = ((await this.userSvc.getChild().toPromise()) as any).data.attributes as Child;
    console.log(this.child);
    if (this.pageName === 'quest') {
      this.quests$ = this.store.pipe(select(selectQuests));
      this.quests$.subscribe(_ => {
        console.log(_);
      });
    }
  }
}
