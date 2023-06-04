import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmFilePage } from './confirm-file.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmFilePageRoutingModule {}
