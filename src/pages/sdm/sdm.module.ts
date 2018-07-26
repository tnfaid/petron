import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SdmPage } from './sdm';

@NgModule({
  declarations: [
    SdmPage,
  ],
  imports: [
    IonicPageModule.forChild(SdmPage),
  ],
})
export class SdmPageModule {}
