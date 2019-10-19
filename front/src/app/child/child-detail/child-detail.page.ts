import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChildModalPage } from '../child-modal/child-modal.page';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
})
export class ChildDetailPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openModal() {
    console.log('hoge');
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
