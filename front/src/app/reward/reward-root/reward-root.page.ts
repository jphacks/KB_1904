import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { RewardService } from '../../../service';
import { Reward } from '../../../models';
import { selectRequestedRewards, selectOtherRewards } from '../../../store/reward.store';

@Component({
  selector: 'app-reward-root',
  templateUrl: './reward-root.page.html',
  styleUrls: ['./reward-root.page.scss'],
})
export class RewardRootPage implements OnInit {
  requestedRewards$: Observable<Reward[]>;
  otherRewards$: Observable<Reward[]>;

  constructor(
    private rewardSvc: RewardService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.requestedRewards$ = this.store.pipe(
      select(selectRequestedRewards)
    );
    this.otherRewards$ = this.store.pipe(
      select(selectOtherRewards)
    );
  }

  ngOnInit() {
    this.rewardSvc.index().subscribe();
  }

  navigateToDetail(id: number) {
    this.router.navigateByUrl(`tabs/reward/${id}`);
  }
}
