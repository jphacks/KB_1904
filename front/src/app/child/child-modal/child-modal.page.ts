import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../api';
import { Child, Parent } from '../../../models';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.page.html',
  styleUrls: ['./child-modal.page.scss'],
})
export class ChildModalPage implements OnInit {

  constructor(
    private authSvc: AuthApi
  ) { }

  ngOnInit() {
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
