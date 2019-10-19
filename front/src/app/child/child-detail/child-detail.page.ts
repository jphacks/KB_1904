import { Component, OnInit } from '@angular/core';
import { ChildModalPage } from '../child-modal/child-modal.page';
import { Router } from '@angular/router';
import {QuestService, UserService, AuthService} from '../../../service';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
})
export class ChildDetailPage implements OnInit {
  pageName: 'quest' | 'reward';
  constructor(
    private router: Router,
    private questSvc: QuestService,
    private authSvc: AuthService,
    private userSvc: UserService,
  ) { }

  ngOnInit() {
    this.pageName = this.router.url.split('/').pop() as 'quest' | 'reward';
    this.authSvc.login('hoge@hoge.com', 'hogenyan').subscribe(_ => console.log(_));
    this.userSvc.getChild().subscribe(_ => {
      console.log(_);
    });
    // this.questSvc.get()
  }
}
