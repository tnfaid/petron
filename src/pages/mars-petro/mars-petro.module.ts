import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarsPetroPage } from './mars-petro';

@NgModule({
  declarations: [
    MarsPetroPage,
  ],
  imports: [
    IonicPageModule.forChild(MarsPetroPage),
  ],
})
export class MarsPageModule {}
