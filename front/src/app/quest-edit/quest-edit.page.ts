import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-edit',
  templateUrl: './quest-edit.page.html',
  styleUrls: ['./quest-edit.page.scss'],
})
export class QuestEditPage implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    questType: new FormControl('', [Validators.required]),
    point: new FormControl('', [Validators.required]),
    datetime: new FormControl('', []),
    description: new FormControl('', []),
  });
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ここら辺でidのあるなしを見て新規作成か更新か変えようと思ってる
  }
}
