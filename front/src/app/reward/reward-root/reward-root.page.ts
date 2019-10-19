import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-root',
  templateUrl: './reward-root.page.html',
  styleUrls: ['./reward-root.page.scss'],
})
export class RewardRootPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToDetail() {
    this.router.navigateByUrl(`tabs/quest/${1}`);
  }
}
