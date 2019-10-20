import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuestDetailPage } from './quest-detail.page';
import { QuestEditPage } from 'src/app/quest-edit/quest-edit.page';

const routes: Routes = [
  {
    path: '',
    component: QuestDetailPage,
  },
  {
    path: 'edit',
    component: QuestEditPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [QuestDetailPage],
})
export class QuestDetailPageModule {}
