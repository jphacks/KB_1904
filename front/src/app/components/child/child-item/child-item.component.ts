import { Component, Input, OnInit } from '@angular/core';
import { ChildModalPage } from '../../../child/child-modal/child-modal.page';
import { ModalController } from '@ionic/angular';
import {Quest} from '../../../../models';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss'],
})
export class ChildItemComponent implements OnInit {
  @Input() quest: Quest;
  @Input() showPeriod = false;

  constructor(
    private modalCtrl: ModalController,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ChildModalPage,
      componentProps: { quest: this.quest },
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: ['child-modal']
    });
    await modal.present();
  }
}
