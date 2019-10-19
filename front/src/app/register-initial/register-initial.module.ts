import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterInitialPage } from './register-initial.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterInitialPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes), ReactiveFormsModule],
  declarations: [RegisterInitialPage],
})
export class RegisterInitialPageModule {}
