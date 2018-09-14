import { ApiProvider } from './../../providers/api/api';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Refresher, List, ItemSliding, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';//api
import { AppState } from '../../app/app.global';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // searchTerm : any="";

 

  @ViewChild('beritaList', { read: List }) beritaList: List;
  openMenu = false;
  //------------------------- TAMPILAN GAMBAR HOME --------------------------------------//
  slideData = [{ image: "www.petrokimia-gresik.com/Resources/Images/Slideshow/[0].jpg" }, { image: "../assets/imgs/proper 17_con.jpg" }]
  slideLength: boolean = false;
  //------------------------- TAMPILAN BERITA HOME --------------------------------------//
  beritaku: Observable<any>;
  queryText : '';

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
     this.updateSchedule();
  }

  updateSchedule(){
    this.beritaList && this.beritaList.closeSlidingItems();

    this.apiProvider.getBerita().subscribe((data :any) => {
      this.beritaku = data.beritaku;
    });
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

  changeTheme(theme) {
    this.global.set('theme', theme);
    console.log(theme);
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToReportase() {
    this.navCtrl.push('BeritaReportasePage');
  }

  goToPengumuman() {
    this.navCtrl.push('PengumumanPage');
  }

  goToSiaran() {
    this.navCtrl.push('SiaranPersPage');
  }

  goToArtikel() {
    this.navCtrl.push('ArtikelPage');
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToLaporan() {
    this.navCtrl.push('LaporanPage');
  }

}