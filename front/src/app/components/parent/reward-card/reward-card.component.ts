import { Component, OnInit, Input } from '@angular/core';
import { Reward } from '../../../../models';

@Component({
  selector: 'reward-card',
  templateUrl: './reward-card.component.html',
  styleUrls: ['./reward-card.component.scss'],
})
export class RewardCardComponent implements OnInit {
  @Input()
  reward: Reward;

  constructor() {}

  ngOnInit() {}
}
