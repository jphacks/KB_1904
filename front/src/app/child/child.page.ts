import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  pushOtherPage(to: 'quest' | 'reward') {
    this.router.navigateByUrl(`/child/${to}`);
  }
}
