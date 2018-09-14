import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * Generated class for the Lk3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lk3',
  templateUrl: 'lk3.html',
})
export class Lk3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http)
   {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lk3Page');
  }

}
