import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Quest } from 'src/models/quest';
import { ToastController } from '@ionic/angular';
import { QuestService } from 'src/service';
import { QuestApi } from 'src/api';

@Component({
  selector: 'app-quest-edit',
  templateUrl: './quest-edit.page.html',
  styleUrls: ['./quest-edit.page.scss'],
})
export class QuestEditPage implements OnInit {
  form = new FormGroup({
    image: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    questType: new FormControl('', [Validators.required]),
    point: new FormControl('', [Validators.required]),
    datetime: new FormControl('', []),
    description: new FormControl('', []),
  });
  constructor(
    private route: ActivatedRoute,
    private toast: ToastController,
    private questApi: QuestApi,
    private router: Router
  ) {}

  ngOnInit() {
    // ここら辺でidのあるなしを見て新規作成か更新か変えようと思ってる
  }
  submit(form: FormGroup, event) {
    const quest = {
      image: form.value.image,
      title: form.value.title,
      description: form.value.description,
      point: form.value.point,
      questType: form.value.questType,
      status: form.value.status,
      datetime: form.value.datetime,
    } as Quest;
    this.questApi.create(quest).subscribe(
      () => {
        this.router.navigateByUrl('tabs/quest');
      },
      _ => {
        this.toast.create({
          message: 'ネットワークエラー',
          duration: 3000,
        });
      }
    );
  }
}
