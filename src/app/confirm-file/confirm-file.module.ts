import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmFilePageRoutingModule } from './confirm-file-routing.module';

import { ConfirmFilePage } from './confirm-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmFilePageRoutingModule
  ],
  declarations: [ConfirmFilePage]
})
export class ConfirmFilePageModule {}
