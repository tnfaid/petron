webpackJsonp([33],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengumumanPageModule", function() { return PengumumanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pengumuman__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PengumumanPageModule = /** @class */ (function () {
    function PengumumanPageModule() {
    }
    PengumumanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pengumuman__["a" /* PengumumanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pengumuman__["a" /* PengumumanPage */]),
            ],
        })
    ], PengumumanPageModule);
    return PengumumanPageModule;
}());

//# sourceMappingURL=pengumuman.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengumumanPage; });
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
 * Generated class for the PengumumanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PengumumanPage = /** @class */ (function () {
    function PengumumanPage(navCtrl) {
        this.navCtrl = navCtrl;
        //NEWS CARDS
        this.cards1 = new Array(5); //untuk jumlah card yang akan ditampilkan
    }
    PengumumanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pengumuman',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\pengumuman\pengumuman.html"*/'<!--\n\n  Generated template for the PengumumanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n   		<ion-title>Pengumuman</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="rowBeritaReportase">\n\n	  <span>\n\n	    <input class="basic-slide" id="date" type="date" placeholder="Select Date" />\n\n	    <label for="name">Date</label>\n\n	  </span>\n\n	</div>\n\n\n\n	<ion-card *ngFor="let card of cards1" class="cardHome">\n\n\n\n      <ion-item >\n\n      	<ion-avatar item-left>\n\n          <img class="avatarCard" src="../assets/imgs/Pupuk/pupuk.png" />\n\n        </ion-avatar>\n\n\n\n        <p class="textDesc text-wrap">PG Kucurkan Bantuan Untuk Korban Banjir Di Lamongan</p>\n\n\n\n         <ion-row>\n\n        <ion-col right text-right>\n\n          <ion-note class="cardLink">\n\n            Selengkapnya ...\n\n          </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      </ion-item>\n\n \n\n     \n\n \n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\pengumuman\pengumuman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], PengumumanPage);
    return PengumumanPage;
}());

//# sourceMappingURL=pengumuman.js.map

/***/ })

});
//# sourceMappingURL=33.js.map