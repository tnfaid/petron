import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the SdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sdm',
  templateUrl: 'sdm.html',
})
export class SdmPage {

  sdm: string = "jumKar";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
  	this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SdmPage');
  }

}