import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../api';
import {Child, Parent, Quest, Reward} from '../../../models';
import {DatePipe} from '@angular/common';
import {ModalController} from '@ionic/angular';
import {QuestService, RewardService} from '../../../service';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.page.html',
  styleUrls: ['./child-modal.page.scss'],
})
export class ChildModalPage implements OnInit {
  value: Quest | Reward;
  constructor(
    private authSvc: AuthApi,
    private datePipe: DatePipe,
    private modalCtrl: ModalController,
    private questSvc: QuestService,
    private rewardSvc: RewardService,
  ) { }

  ngOnInit() {
    console.log(this.value);
  }

  submitQuest() {
    this.questSvc.update({id: this.value.id, status: 'finished'}).subscribe();
    this.modalCtrl.dismiss();
  }
}
