import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';//api

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
  //------------------------- TAMPILAN GAMBAR HOME --------------------------------------//
  cards1: any;
  cards2: any;
  slideData = [{ image: "../assets/imgs/sni17_con.jpg" }, { image: "../assets/imgs/proper 17_con.jpg" }]
  slideLength: boolean = false;

  //------------------------- TAMPILAN BERITA HOME --------------------------------------//
  beritaku: Observable<any>;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.beritaku = this.apiProvider.getBerita();

    this.beritaku
      .subscribe(data => {
        console.log('dataku: ', data);
      })
  }

  openDetails(berita) {
    this.navCtrl.push('BeritaDetailPage', { berita: berita });
  }
}
