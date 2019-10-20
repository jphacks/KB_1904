import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../api';
import {Child, Parent, Quest} from '../../../models';
import {DatePipe} from '@angular/common';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.page.html',
  styleUrls: ['./child-modal.page.scss'],
})
export class ChildModalPage implements OnInit {
  quest: Quest;
  constructor(
    private authSvc: AuthApi,
    private datePipe: DatePipe,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.quest);
  }

  hoge() {
    this.modalCtrl.dismiss();
  }
}
