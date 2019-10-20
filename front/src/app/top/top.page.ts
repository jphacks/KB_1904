import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestAchievement, RewardAcquisition, PointGrant, Reward } from 'src/models';
import { LogService, RewardService } from 'src/service'
import { Observable } from 'rxjs';
import { AppState } from 'src/store';
import { Store, select } from '@ngrx/store';
import { selectAchievements, selectAcquisitions, selectGrants } from 'src/store/log.store';
import { selectOtherRewards } from 'src/store/reward.store';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
  achievements$: Observable<QuestAchievement[]>;
  rewards$: Observable<Reward[]>;
//   acquisitions$: Observable<RewardAcquisition[]>;
//   grants$: Observable<PointGrant[]>;

  constructor(
    private http: HttpClient,
    private rewardSvc: RewardService,
    private logSvc: LogService,
    private store: Store<AppState>,
  ) {
    this.achievements$ = this.store.pipe(
      select(selectAchievements)
    );
    this.rewards$ = this.store.pipe(
      select(selectOtherRewards)
    );
//     this.acquisitions$ = this.store.pipe(
//       select(selectAcquisitions)
//     );
//     this.grants$ = this.store.pipe(
//       select(selectGrants)
//     );
  }

  ngOnInit() {
    this.logSvc.achievements();
    this.rewardSvc.index().subscribe();
  }
}
