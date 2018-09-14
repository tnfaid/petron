import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WartaKblPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-warta-kbl',
  templateUrl: 'warta-kbl.html',
})
export class WartaKblPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WartaKblPage');
  }

  downloadAndOpenPdf2016(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/Program%20Kemitraan%20dan%20Bina%20Lingkungan%20%202016.pdf",'_system', 'location=yes');
  }

  downloadAndOpenPdf2014(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/Warta%20PKBL%20PKG%202014.pdf",'_system', 'location=yes');
  }

}
