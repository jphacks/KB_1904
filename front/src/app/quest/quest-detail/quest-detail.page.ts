import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../../store';
import { Store, select } from '@ngrx/store';
import { QuestService } from '../../../service';
import { Quest } from '../../../models';
import { selectQuest } from '../../../store/quest.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-detail',
  templateUrl: './quest-detail.page.html',
  styleUrls: ['./quest-detail.page.scss'],
})
export class QuestDetailPage implements OnInit {
  questId: number;
  quest$: Observable<Quest>;

  constructor(private questSvc: QuestService, private store: Store<AppState>, private route: ActivatedRoute) {
    this.questId = Number(this.route.snapshot.paramMap.get('id'));
    this.quest$ = this.store.pipe(select(selectQuest(this.questId)));
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
