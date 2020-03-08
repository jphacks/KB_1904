import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuestRootPage } from './quest-root.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: QuestRootPage,
  },
  {
    path: 'create',
    loadChildren: () => import('../../quest-edit/quest-edit.module').then(m => m.QuestEditPageModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../quest-detail/quest-detail.module').then(m => m.QuestDetailPageModule),
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [QuestRootPage],
})
export class QuestRootPageModule {}
