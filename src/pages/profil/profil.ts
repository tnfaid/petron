import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppState } from '../../app/app.global';

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  items: any;


  //------------------------- TAMPILAN GAMBAR HOME --------------------------------------//
  cards1: any;
  cards2: any;
  cards3: any;
  slideData = [{ image: "../assets/imgs/logopetro.jpg" }, { image: "../assets/imgs/block_kanan.jpg" }, { image: "../assets/imgs/block_kiri.jpg" }]
  slideLength: boolean = false;
  //-------------------------------------------------------------------------------------//

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,  public global: AppState) 
  {
    this.initializeItems();
  }

  changeTheme(theme) {
    this.global.set('theme', theme);
    console.log(theme);
  }

  initializeItems() {
    this.items = [
      {ListPage: 'MaknaLogoPage', ListName: 'Makna Logo' },
      {ListPage: 'SejPerusahaanPage', ListName: 'Sejarah Perusahaan' },
      {ListPage: 'VisiMisiPage', ListName: 'Visi Misi & Tata Nilai' },
      {ListPage: 'FasInfrasPage', ListName: 'Fasilitas Infrastruktur' },
      {ListPage: 'ManajemenPage', ListName: 'Manajemen' },
      {ListPage: 'Lk3Page', ListName: 'Lingkungan & K3' },
      {ListPage: 'KomitAuditPage', ListName: 'Komite Audit' },
      {ListPage: 'ProfPenunjangPage', ListName: 'Profesi Penunjang' },
      {ListPage: 'KapProdukPage', ListName: 'Kapasitas Produksi' },
      {ListPage: 'SdmPage', ListName: 'Sumber Daya Manusia' },
      {ListPage: 'KomitManResikoPage', ListName: 'Komite Manajemen Resiko' },
      {ListPage: 'AnPerusahaanPage', ListName: 'Anak Perusahaan & Usaha Patungan' },
      {ListPage: 'PengPrestasiPage', ListName: 'Penghargaan & Prestasi' },
      {ListPage: 'MarsPetroPage', ListName: 'Mars Petrokimia Gresik' },
      {ListPage: 'VideoProfilPage', ListName:'Video Profil Perusahaan' }
    ];
  }

  

  getItems(ev: any) {

    this.initializeItems();
    let val = ev.target.value;

      if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.ListName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    public openPage(item: any): void {
        this.navCtrl.push(item.ListPage);
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
