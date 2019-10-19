import { Component, Input, OnInit } from '@angular/core';
import { ChildModalPage } from '../../../child/child-modal/child-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.scss'],
})
export class ChildItemComponent implements OnInit {
  @Input() showPeriod = false;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ChildModalPage,
      componentProps: { value: 123 },
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: ['child-modal']
    });
    await modal.present();
  }
}
