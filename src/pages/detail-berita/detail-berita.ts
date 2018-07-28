import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DetailBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-berita',
  templateUrl: 'berita-detail.html',
})
export class DetailBeritaPage {
  berita: any;

  constructor(public navCtrl: NavController, public apiProvider : ApiProvider, public navParams: NavParams) {
    this.berita = this.navParams.get('berita');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBeritaPage');
  }



  // ionViewDidLoad() {
  //   this.apiProvider.load().subscribe((data: any) => {
  //     if (data && data.berita){
  //       for (const berita of data.berita){
  //         if (berita && berita.NewsID === this.navParams.data.beritaId){
  //           this.berita = berita;
  //           break;

  //           this.berita
  //             .subscribe(data => {
  //               console.log('detail berita : ', data);
  //             })
  //         }
  //       }
  //     }
  //   });
  // }

}
