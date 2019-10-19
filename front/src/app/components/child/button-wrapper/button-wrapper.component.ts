import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-wrapper',
  templateUrl: './button-wrapper.component.html',
  styleUrls: ['./button-wrapper.component.scss'],
})
export class ButtonWrapperComponent implements OnInit {
  @Input() showHint = false;
  @Input() showBack: boolean;
  constructor() { }

  ngOnInit() {}

}
