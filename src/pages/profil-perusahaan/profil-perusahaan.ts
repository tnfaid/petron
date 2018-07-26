import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfilPerusahaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-perusahaan',
  templateUrl: 'profil-perusahaan.html',
})
export class ProfilPerusahaanPage {

  constructor(
  public navCtrl: NavController, public navParams: NavParams, 
  public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPerusahaanPage');
  }

  PdfProfil() {
    let confirm = this.alertCtrl.create({
      title: 'Buka Profil Perusahaan?',
      message: 'Apakah anda yakin ingin mengunjungi laman PDF Profil Perusahaan?.',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Buka',
          handler: () => {
            window.open("http://www.petrokimia-gresik.com/Resources/Docs/CP%20Petrokimia%20Gresik%20small.pdf",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
}