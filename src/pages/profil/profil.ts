import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  OpenUrl5(){
    let confirm = this.alertCtrl.create({
      title: 'Open Profil Perusahaan PDF?',
      message: 'Are you sure want to open Profil Perusahaan PDF? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.petrokimia-gresik.com/Resources/Docs/CP%20Petrokimia%20Gresik%20small.pdf",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }

  OpenUrl01(){
    let open = this.alertCtrl.create({
      title: 'Open Struktur Organisasi  PDF?',
      message: 'Are you sure want to open Profil Perusahaan PDF? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.petrokimia-gresik.com/Resources/Docs/struktur%20organisasi_2018.pdf",'_system', 'location=yes');
          }
        }
      ]
    });
    open.present();
  }

  KegInovasi() {
    let inov = this.alertCtrl.create({
      title: 'Open Kegiatan Inovasi PDF?',
      message: 'Are you sure want to open Kegiatan Inovasi PDF? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.petrokimia-gresik.com/Resources/Docs/FOTO%20KEGIATAN%20INOVASI.pdf",'_system', 'location=yes');
          }
        }
      ]
    });
    inov.present();
  }


}
