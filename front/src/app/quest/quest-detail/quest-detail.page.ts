import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { QuestService } from '../../../service';
import { Quest } from '../../../models';
import { selectQuest } from '../../../store/quest.store';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.page.html',
  styleUrls: ['./quest-detail.page.scss'],
})
export class QuestDetailPage implements OnInit {
  questId: number;
  quest$: Observable<Quest>;

  constructor(
    private questSvc: QuestService,
    public navParams: NavParams,
    private store: Store<AppState>,
  ) {
    this.questId = this.navParams.get('questId');
    this.quest$ = this.store.pipe(
      select(selectQuest(this.questId))
    );
  }

  ngOnInit() {
    this.questSvc.get(this.questId).subscribe();
  }

  approve() {
    this.questSvc.approve(this.questId).subscribe();
  }

  reject() {
    const quest = { id: this.questId, status: 'none' };
    this.questSvc.update(quest).subscribe();
  }
}
