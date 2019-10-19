import { Component, OnInit } from '@angular/core';
import { ChildModalPage } from '../child-modal/child-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
})
export class ChildDetailPage implements OnInit {
  pageName: 'quest' | 'reward';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.pageName = this.router.url.split('/').pop() as 'quest' | 'reward';
    console.log(this.pageName);
  }
}
