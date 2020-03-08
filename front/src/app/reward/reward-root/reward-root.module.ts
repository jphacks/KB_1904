import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RewardRootPage } from './reward-root.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { QuestEditPageModule } from 'src/app/quest-edit/quest-edit.module';

const routes: Routes = [
  {
    path: '',
    component: RewardRootPage,
  },
  {
    path: 'create',
    loadChildren: () => import('../../reward-edit/reward-edit.module').then(m => m.RewardEditPageModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../reward-detail/reward-detail.module').then(m => m.RewardDetailPageModule),
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), ComponentsModule],
  declarations: [RewardRootPage],
})
export class RewardRootPageModule {}
