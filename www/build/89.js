webpackJsonp([89],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeritaPageModule", function() { return BeritaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__berita__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BeritaPageModule = /** @class */ (function () {
    function BeritaPageModule() {
    }
    BeritaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__berita__["a" /* BeritaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__berita__["a" /* BeritaPage */]),
            ],
        })
    ], BeritaPageModule);
    return BeritaPageModule;
}());

//# sourceMappingURL=berita.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaPage; });
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
 * Generated class for the BeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeritaPage = /** @class */ (function () {
    function BeritaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BeritaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeritaPage');
    };
    BeritaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-berita',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\berita\berita.html"*/'<ion-header>\n\n\n\n	<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    	<ion-title>Berita</ion-title>\n\n  	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<a class="linkBerita" [navPush]="\'BeritaReportasePage\'">\n\n		<ion-card class="cardButtonBerita contentBerita">\n\n		    <ion-card-content >\n\n		       Berita / Reportase\n\n		    </ion-card-content>\n\n  		</ion-card>\n\n  	</a>\n\n  	<a class="linkBerita" [navPush]="\'PengumumanPage\'">\n\n		<ion-card class="cardButtonBerita">\n\n		    <ion-card-content >\n\n		       Pengumuman\n\n		    </ion-card-content>\n\n  		</ion-card>\n\n  	</a>\n\n  	<a class="linkBerita" [navPush]="\'SiaranPersPage\'">\n\n		<ion-card class="cardButtonBerita ">\n\n		    <ion-card-content >\n\n		       Siaran Pers\n\n		    </ion-card-content>\n\n  		</ion-card>\n\n  	</a>\n\n  	<a class="linkBerita" [navPush]="\'ArtikelPage\'">\n\n		<ion-card class="cardButtonBerita ">\n\n		    <ion-card-content >\n\n		       Artikel\n\n		    </ion-card-content>\n\n  		</ion-card>\n\n  	</a>\n\n  	<a class="linkBerita" [navPush]="\'KegiatanTahunanPage\'">\n\n		<ion-card class="cardButtonBerita ">\n\n		    <ion-card-content >\n\n		       Kegiatan Setiap Tahun\n\n		    </ion-card-content>\n\n  		</ion-card>\n\n  	</a>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\berita\berita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BeritaPage);
    return BeritaPage;
}());

//# sourceMappingURL=berita.js.map

/***/ })

});
//# sourceMappingURL=89.js.map