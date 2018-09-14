import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeritaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-berita-detail',
  templateUrl: 'berita-detail.html',
})
export class BeritaDetailPage {
  //------------------------- TAMPILAN GAMBAR HOME --------------------------------------//

 // Tampilan detail
  berita: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.berita = this.navParams.get('berita');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeritaDetailPage');
  }

}
