import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest-root',
  templateUrl: './quest-root.page.html',
  styleUrls: ['./quest-root.page.scss'],
})
export class QuestRootPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToDetail() {
    this.router.navigateByUrl(`tabs/quest/${1}`);
  }
}
