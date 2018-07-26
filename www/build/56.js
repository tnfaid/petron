webpackJsonp([56],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontakPageModule", function() { return KontakPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kontak__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KontakPageModule = /** @class */ (function () {
    function KontakPageModule() {
    }
    KontakPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kontak__["a" /* KontakPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kontak__["a" /* KontakPage */]),
            ],
        })
    ], KontakPageModule);
    return KontakPageModule;
}());

//# sourceMappingURL=kontak.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KontakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KontakPage = /** @class */ (function () {
    function KontakPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KontakPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KontakPage');
        //=============================== SCRIPT ACCORDION ============================//
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");
                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                }
                else {
                    panel.style.display = "block";
                }
            });
        }
    };
    KontakPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kontak',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\kontak\kontak.html"*/'<!--\n\n  Generated template for the KontakPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Kontak</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n	<button class="accordion">Kantor Pusat</button>\n\n		<div class="panel">\n\n\n\n				<ion-card class="cardKontak">\n\n				  <ion-card-content>\n\n					  <ion-list>\n\n					     <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/alamat.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      Jl. Jenderal Ahmad Yani - Gresik 61119\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/telpon.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      031-3981811, 3982100, 3982200\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/fax.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      031-3981722, 3982272\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/email.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      pg@petrokimia-gresik.com\n\n					    </ion-item>\n\n\n\n					  </ion-list>\n\n				  </ion-card-content>\n\n\n\n				</ion-card>\n\n		</div>\n\n	<button class="accordion">Kantor Perwakilan</button>\n\n		<div class="panel">\n\n\n\n				<ion-card class="cardKontak">\n\n				  <ion-card-content>\n\n					  <ion-list>\n\n					     <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/alamat.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      Jl. Tanah Abang III no.16 Jakarta 10160\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/telpon.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					       021-3446459, 3446645\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/fax.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      021-3841994\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/email.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      perjaka@petrokimia-gresik.com\n\n					    </ion-item>\n\n\n\n					  </ion-list>\n\n				  </ion-card-content>\n\n\n\n				</ion-card>\n\n		</div>\n\n	<button class="accordion">Pusat Pelayanan Pelanggan</button>\n\n		<div class="panel">\n\n\n\n				<ion-card class="cardKontak">\n\n				  <ion-card-content>\n\n					  <ion-list>\n\n					     <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/telpon.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      08001888777\n\n					    </ion-item>\n\n					    <ion-item>(bebas pulsa)</ion-item>\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/sms.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      0811344774\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/fax.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      031-3979976\n\n					    </ion-item>\n\n\n\n					    <ion-item text-wrap>\n\n					      <ion-icon item-start><img src="assets/imgs/kontak/email.png" style="width: 30px;height: 30px;"></ion-icon>\n\n					      konsumen@petrokimia-gresik.com\n\n					    </ion-item>\n\n\n\n					  </ion-list>\n\n				  </ion-card-content>\n\n\n\n				</ion-card>\n\n		</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\kontak\kontak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], KontakPage);
    return KontakPage;
}());

//# sourceMappingURL=kontak.js.map

/***/ })

});
//# sourceMappingURL=56.js.map