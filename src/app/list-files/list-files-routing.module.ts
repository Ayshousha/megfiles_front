import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFilesPage } from './list-files.page';

const routes: Routes = [
  {
    path: '',
    component: ListFilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFilesPageRoutingModule {}
