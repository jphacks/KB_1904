import { Component, Input, OnInit } from '@angular/core';
import { ChildModalPage } from '../../../child/child-modal/child-modal.page';
import { ModalController } from '@ionic/angular';
import {Quest, Reward} from '../../../../models';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss'],
})
export class ChildItemComponent implements OnInit {
  @Input() value: Quest | Reward;
  @Input() showPeriod = false;
  hoge = false;

  constructor(
    private modalCtrl: ModalController,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    if (!this.value) {
      this.value = {
        title: 'Nintendo Switch',
        description: '欲しいやろ？',
        point: 10000,
        period: new Date()
      } as Quest;
      this.hoge = true;
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ChildModalPage,
      componentProps: { value: this.value },
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: ['child-modal']
    });
    await modal.present();
  }
}
