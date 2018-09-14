import { ApiProvider } from './../../providers/api/api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Refresher, List, ItemSliding, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';//api
import { AppState } from '../../app/app.global';

/**
 * Generated class for the BeritaReportasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita-reportase',
  templateUrl: 'berita-reportase.html',
})
export class BeritaReportasePage {
  openMenu = false;
  @ViewChild('beritaList', { read: List }) beritaList: List;

   beritaku: Observable<any>;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider,
   public toastCtrl : ToastController, public global: AppState) {
    this.beritaku = this.apiProvider.getBerita();

    this.beritaku
      .subscribe(data => {
        console.log('dataku: ', data);
      })
  }

  IonViewDidLoad(){
     this.updateBerita();
  }

  updateBerita(){
    // Close any open sliding items when the berita updates
    this.beritaList && this.beritaList.closeSlidingItems();

    this.apiProvider.getBerita();
  }

  openDetails(berita) {
    this.navCtrl.push('BeritaDetailPage', { berita: berita });
  }

  doRefresh(refresher: Refresher) {
    this.beritaku = this.apiProvider.getBerita();

      // simulate a network request that would take longer
      // than just pulling from out local json file
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Sessions have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
   };

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToArtikel() {
    this.navCtrl.push('ArtikelPage');
  }

  goToHome() {
    this.navCtrl.push('HomePage');
  }

  goToTahunan() {
    this.navCtrl.push('KegiatanTahunanPage');
  }

  goToPengumuman() {
    this.navCtrl.push('PengumumanPage');
  }

  goToSiaranPers() {
    this.navCtrl.push('SiaranPersPage');
  }

  goToPengaturan() {
    this.navCtrl.push('');
  }

}
