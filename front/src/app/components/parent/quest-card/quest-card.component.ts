import { Component, Input, OnInit } from '@angular/core';
import { Quest } from '../../../../models';

@Component({
  selector: 'quest-card',
  templateUrl: './quest-card.component.html',
  styleUrls: ['./quest-card.component.scss'],
})
export class QuestCardComponent implements OnInit {
  @Input()
  quest: Quest;

  constructor() {}

  ngOnInit() {}
}
