import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KomisPage } from './komis';

@NgModule({
  declarations: [
    KomisPage,
  ],
  imports: [
    IonicPageModule.forChild(KomisPage),
  ],
})
export class KomisPageModule {}
