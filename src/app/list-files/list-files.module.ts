import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFilesPageRoutingModule } from './list-files-routing.module';

import { ListFilesPage } from './list-files.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFilesPageRoutingModule
  ],
  declarations: [ListFilesPage]
})
export class ListFilesPageModule {}
