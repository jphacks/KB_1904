import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'child',
    loadChildren: () => import('./child/child.module').then(m => m.ChildPageModule),
  },
  { path: 'register-initial', loadChildren: './register-initial/register-initial.module#RegisterInitialPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
