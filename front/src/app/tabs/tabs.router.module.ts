import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'top',
        children: [
          {
            path: '',
            loadChildren: () => import('../top/top.module').then(m => m.TopPageModule),
          },
        ],
      },
      {
        path: 'quest',
        children: [
          {
            path: '',
            loadChildren: () => import('../quest/quest-root/quest-root.module').then(m => m.QuestRootPageModule),
          },
        ],
      },
      {
        path: 'reward',
        children: [
          {
            path: '',
            loadChildren: () => import('../reward/reward-root/reward-root.module').then(m => m.RewardRootPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/child',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/child',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
