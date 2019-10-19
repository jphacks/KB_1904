import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';
import { ChildPage } from './child.page';

const routes: Routes = [
  {
    path: '',
    component: ChildPage,
  },
  {
    path: 'quest',
    children: [
      {
        path: '',
        loadChildren: () => import('./child-detail/child-detail.module').then(m => m.ChildDetailPageModule),
      },
    ],
  },
  {
    path: 'reward',
    children: [
      {
        path: '',
        loadChildren: () => import('./child-detail/child-detail.module').then(m => m.ChildDetailPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [ChildPage],
})
export class ChildPageModule {}
