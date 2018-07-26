webpackJsonp([70],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoProdukPageModule", function() { return InfoProdukPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_produk__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoProdukPageModule = /** @class */ (function () {
    function InfoProdukPageModule() {
    }
    InfoProdukPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_produk__["a" /* InfoProdukPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_produk__["a" /* InfoProdukPage */]),
            ],
        })
    ], InfoProdukPageModule);
    return InfoProdukPageModule;
}());

//# sourceMappingURL=info-produk.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoProdukPage; });
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
 * Generated class for the InfoProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoProdukPage = /** @class */ (function () {
    function InfoProdukPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideData = [{ image: "../assets/imgs/sni17_con.jpg" }, { image: "../assets/imgs/proper 17_con.jpg" }];
        this.slideLength = false;
        if (this.slideData.length > 0) {
            this.slideLength = true;
        }
        //NEWS CARDS
        this.cards1 = new Array(1); //untuk jumlah card yang akan ditampilkan
        this.cards2 = new Array(1);
    }
    InfoProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-produk',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\info-produk\info-produk.html"*/'<ion-header class="headerHome">\n\n  <ion-navbar no-border-bottom color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Info Produk</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="has-header">\n\n  <ion-slides autoplay="5000" loop="true" speed="3000" style="width:100%;height:200px;" class="slideImage">\n\n      <ion-slide *ngFor="let slide of slideData">\n\n        <img src="{{slide.image}}" />\n\n      </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ul>\n\n    <li><a ui-sref="menu.pupuk()" id="infoProduk-button52" class="btn paper paper-raise-flatten" [navPush]="\'PupukPage\'">Pupuk</a></li>\n\n    <li><a ui-sref="menu.nonPupuk()" id="infoProduk-button53" class="btn paper paper-raise-flatten" [navPush]="\'NonPage\'">Non Pupuk</a></li>\n\n    <li><a ui-sref="menu.brosur()" id="infoProduk-button54" class="btn paper paper-raise-flatten" [navPush]="\'BrosurPage\'">Brosur</a></li>\n\n    <li><a ui-sref="menu.dosisPemupukan()" id="infoProduk-button55" class="btn paper paper-raise-flatten" [navPush]="\'DosisPage\'">Dosis Pemupukan</a></li>\n\n    <li><a ui-sref="menu.testimoniProduk()" id="infoProduk-button56" class="btn paper paper-raise-flatten" [navPush]="\'TestimoniPage\'">Testimoni Produk</a></li>\n\n  </ul>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\info-produk\info-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], InfoProdukPage);
    return InfoProdukPage;
}());

//# sourceMappingURL=info-produk.js.map

/***/ })

});
//# sourceMappingURL=70.js.map