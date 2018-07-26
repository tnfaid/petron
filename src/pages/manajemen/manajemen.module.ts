import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManajemenPage } from './manajemen';

@NgModule({
  declarations: [
    ManajemenPage,
  ],
  imports: [
    IonicPageModule.forChild(ManajemenPage),
  ],
})
export class ManajemenPageModule {}
