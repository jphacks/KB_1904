import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuestEditPage } from 'src/app/quest-edit/quest-edit.page';

const routes: Routes = [
  {
    path: '',
    component: QuestEditPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [QuestEditPage],
})
export class QuestEditPageModule {}
