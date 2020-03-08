import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { RewardService } from '../../../service';
import { Reward } from '../../../models';
import { selectReward } from '../../../store/reward.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.page.html',
  styleUrls: ['./reward-detail.page.scss'],
})
export class RewardDetailPage implements OnInit {
  rewardId: number;
  reward$: Observable<Reward>;

  constructor(private rewardSvc: RewardService, private store: Store<AppState>, private route: ActivatedRoute) {
    this.rewardId = Number(this.route.snapshot.paramMap.get('id'));
    this.reward$ = this.store.pipe(select(selectReward(this.rewardId)));
  }

  ngOnInit() {
    this.rewardSvc.get(this.rewardId).subscribe();
  }

  approve() {
    this.rewardSvc.approve(this.rewardId).subscribe();
  }
}
