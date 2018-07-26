import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-berita',
  templateUrl: 'detail-berita.html',
})
export class DetailBeritaPage {
  berita: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.berita = this.navParams.get('berita');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DetailBeritaPage');
  // }

}
