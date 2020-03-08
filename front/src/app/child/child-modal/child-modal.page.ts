import { Component, OnInit } from '@angular/core';
import { AuthApi } from '../../../api';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.page.html',
  styleUrls: ['./child-modal.page.scss'],
})
export class ChildModalPage implements OnInit {
  constructor(private authSvc: AuthApi) {}

  ngOnInit() {}
}
