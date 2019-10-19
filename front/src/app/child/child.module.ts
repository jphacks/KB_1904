import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';
import { ChildPage } from './child.page';
import { ChildDetailPage } from './child-detail/child-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChildPage,
  },
  {
    path: 'quest',
    component: ChildDetailPage
  },
  {
    path: 'reward',
    component: ChildDetailPage
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), ComponentsModule],
  declarations: [ChildPage],
})
export class ChildPageModule {}
