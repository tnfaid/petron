import { ApiProvider } from '../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';//api
import { DetailBeritaPage } from '../detail-berita/detail-berita';

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

  cards1: any;
  cards2: any;
  slideData = [{ image: "../assets/imgs/sni17_con.jpg" },{ image: "../assets/imgs/proper 17_con.jpg"}]
  slideLength: boolean = false;

  beritaku : any[] = [];
  data :any;
  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.beritaku = this.apiProvider.getBerita();   
    this.beritaku
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }

  openDetails(beritaku: any) {
    this.navCtrl.push('DetailBeritaPage', { berita: beritaku.NewsID});
  }
 //  constructor(public navCtrl: NavController) {
 //  	if(this.slideData.length>0) {
 //      this.slideLength = true;
	// }
	//NEWS CARDS
	// this.cards1 = new Array(1);//untuk jumlah card yang akan ditampilkan
	// this.cards2 = new Array(1);
 //  }


}
