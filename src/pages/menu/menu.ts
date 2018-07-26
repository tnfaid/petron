import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'HomePage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', icon: 'home' },
    { title: 'Pemasaran', pageName: 'PemasaranPage', icon: 'cart' },
    { title: 'Berita', pageName: 'BeritaPage', icon: 'list-box' },
    { title: 'Laporan', pageName: 'LaporanPage', icon: 'document' },
    { title: 'TataKelola', pageName: 'TataKelolaPage', icon: 'md-analytics' },
    { title: 'Profil', pageName: 'ProfilPage', icon: 'person' },
    { title: 'InfoProduk', pageName: 'InfoProdukPage', icon: 'cube' },
    { title: 'CSR', pageName: 'CorsoresPage', icon: 'md-globe' },
    { title: 'Tautan', pageName: 'TautanPage', icon: 'md-contacts' },
    { title: 'Bantuan', pageName: 'BantuanPage', icon: 'md-help-circle' }
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}