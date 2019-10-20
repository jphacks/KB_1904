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
  id: number;
  quest$: Observable<Quest>;

  constructor(
    private questSvc: QuestService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.quest$ = this.store.pipe(select(selectQuest(this.id)));
  }

  ngOnInit() {
    this.questSvc.get(this.id).subscribe(_ => {
      console.log(_);
    });
  }

  approve() {
    this.questSvc.approve(this.id).subscribe();
  }

  reject() {
    const quest = { id: this.id, status: 'none' };
    this.questSvc.update(quest).subscribe();
  }
}
