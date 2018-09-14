import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppState } from '../../app/app.global';

/**
 * Generated class for the PemasaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pemasaran',
  templateUrl: 'pemasaran.html',
})
export class PemasaranPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: AppState) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PemasaranPage');

      var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
  }

 changeTheme(theme) {
    this.global.set('theme', theme);
    console.log(theme);
  }

}
