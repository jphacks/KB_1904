import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { QuestApi, RewardApi } from 'src/api';
import { Quest } from 'src/models/quest';
import { Reward } from 'src/models';

@Component({
  selector: 'app-reward-edit',
  templateUrl: './reward-edit.page.html',
  styleUrls: ['./reward-edit.page.scss'],
})
export class RewardEditPage implements OnInit {
  form = new FormGroup({
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    point: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
  });
  constructor(
    private route: ActivatedRoute,
    private toast: ToastController,
    private rewardApi: RewardApi,
    private router: Router
  ) {}

  ngOnInit() {
    // ここら辺でidのあるなしを見て新規作成か更新か変えようと思ってる
  }
  submit(form: FormGroup, event) {
    const reward = {
      id: null,
      image: form.value.image || '',
      name: form.value.name,
      description: form.value.description,
      point: form.value.point,
      status: 'none',
      createdAt: null,
    } as Reward;
    this.rewardApi.create(reward).subscribe(
      () => {
        this.router.navigateByUrl('tabs/reward');
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
