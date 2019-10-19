import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { RewardService } from '../../../service';
import { Reward } from '../../../models';
import { selectReward } from '../../../store/reward.store';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.page.html',
  styleUrls: ['./reward-detail.page.scss'],
})
export class RewardDetailPage implements OnInit {
  rewardId: number;
  reward$: Observable<Reward>;

  constructor(
    private rewardSvc: RewardService,
    public navParams: NavParams,
    private store: Store<AppState>,
  ) {
    this.rewardId = this.navParams.get('rewardId');
    this.reward$ = this.store.pipe(
      select(selectReward(this.rewardId))
    );
  }

  ngOnInit() {
    this.rewardSvc.get(this.rewardId).subscribe();
  }

  approve() {
    this.rewardSvc.approve(this.rewardId).subscribe();
  }
}
