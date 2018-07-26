import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KomitAuditPage } from './komit-audit';

@NgModule({
  declarations: [
    KomitAuditPage,
  ],
  imports: [
    IonicPageModule.forChild(KomitAuditPage),
  ],
})
export class KomitAuditPageModule {}
