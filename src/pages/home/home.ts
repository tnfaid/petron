import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';//api
import { HttpClient } from '@angular/common/http';//api

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

  beritaku : Observable<any>;
  data :any;
  constructor(public navCtrl: NavController, public httpClient : HttpClient) {
    this.beritaku = this.httpClient.get('http://127.0.0.1/rest-ci-old/index.php/News');   
    this.beritaku
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }

  openDetails(berita) {
    this.navCtrl.push('BeritaDetailPage', { berita: this.beritaku});
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
