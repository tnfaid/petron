webpackJsonp([62],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KegiatanTahunanPageModule", function() { return KegiatanTahunanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kegiatan_tahunan__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KegiatanTahunanPageModule = /** @class */ (function () {
    function KegiatanTahunanPageModule() {
    }
    KegiatanTahunanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kegiatan_tahunan__["a" /* KegiatanTahunanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kegiatan_tahunan__["a" /* KegiatanTahunanPage */]),
            ],
        })
    ], KegiatanTahunanPageModule);
    return KegiatanTahunanPageModule;
}());

//# sourceMappingURL=kegiatan-tahunan.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KegiatanTahunanPage; });
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
 * Generated class for the KegiatanTahunanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KegiatanTahunanPage = /** @class */ (function () {
    function KegiatanTahunanPage(navCtrl) {
        this.navCtrl = navCtrl;
        //NEWS CARDS
        this.cards1 = new Array(5); //untuk jumlah card yang akan ditampilkan
    }
    KegiatanTahunanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kegiatan-tahunan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\kegiatan-tahunan\kegiatan-tahunan.html"*/'<!--\n\n  Generated template for the KegiatanTahunanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    	<ion-title>Kegiatan Tahunan</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<!--========================= SELECT TAHUN KEGIATAN =====================-->\n\n	<ion-list class="selectTahun">\n\n	  <ion-item>\n\n	    <ion-label class="selectText">Pilih Tahun</ion-label>\n\n	    <ion-select [(ngModel)]="tahun" cancelText="Batal" okText="Pilih">\n\n	     	<ion-option>2016</ion-option>\n\n	     	<ion-option>2015</ion-option>\n\n	     	<ion-option>2014</ion-option>\n\n	     	<ion-option>2013</ion-option>\n\n	    </ion-select>\n\n	  </ion-item>\n\n	</ion-list>\n\n	<!--========================= CARDS KEGIATAN SETIAP TAHUN PDF =====================-->\n\n	<ion-card *ngFor="let card of cards1" class="cardUtamaKegiatan">\n\n		<ion-card  class="cardTahunan">\n\n		  <ion-card-header class="headerCardTahun">\n\n		    Kegiatan Tahun\n\n		  </ion-card-header>\n\n		  <ion-card-content class="contentCardTahun">\n\n		    <img class="kegiatanTahun" src="../assets/imgs/paper.jpg"/>\n\n		  </ion-card-content>\n\n		</ion-card>\n\n		    <button ion-button class="buttonDownloadTahun">Download</button>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\kegiatan-tahunan\kegiatan-tahunan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], KegiatanTahunanPage);
    return KegiatanTahunanPage;
}());

//# sourceMappingURL=kegiatan-tahunan.js.map

/***/ })

});
//# sourceMappingURL=62.js.map