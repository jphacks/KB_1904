import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../api';
import {Child, Parent, Quest} from '../../../models';
import {DatePipe} from '@angular/common';

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
  ) { }

  ngOnInit() {
    console.log(this.quest);
  }

  hoge() {
    this.authSvc.register(
      {
        name: 'nyan',
        email: 'hoge@hoge.com',
      } as any,
      {
        name: 'hoge',
        sex: 'male'
      } as any,
      'hogenyan'
    ).subscribe(_ => {
      console.log(_);
    });
  }
}
