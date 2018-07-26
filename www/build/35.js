webpackJsonp([35],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PemasaranPageModule", function() { return PemasaranPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pemasaran__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PemasaranPageModule = /** @class */ (function () {
    function PemasaranPageModule() {
    }
    PemasaranPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pemasaran__["a" /* PemasaranPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pemasaran__["a" /* PemasaranPage */]),
            ],
        })
    ], PemasaranPageModule);
    return PemasaranPageModule;
}());

//# sourceMappingURL=pemasaran.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PemasaranPage; });
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
 * Generated class for the PemasaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PemasaranPage = /** @class */ (function () {
    function PemasaranPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PemasaranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PemasaranPage');
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
    PemasaranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pemasaran',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\pemasaran\pemasaran.html"*/'<ion-header class="headerHome">\n\n  <ion-navbar no-border-bottom color="header">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Pemasaran</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<button class="accordion">Sistem Distribusi</button>\n\n<div class="panel">\n\n\n\n  <button class="accordion">Tanpa Gudang Penyangga</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Melalui Gudang Penyangga</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n</div>\n\n\n\n<button class="accordion">Layanan Penjualan</button>\n\n<div class="panel">\n\n\n\n  <button class="accordion">Subsidi</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Non Subsidi</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n</div>\n\n\n\n<button class="accordion">Distributor</button>\n\n<div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n</div>\n\n\n\n<button class="accordion">Staf Perwakilan Daerah Penjualan</button>\n\n<div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n</div>\n\n\n\n<button class="accordion">Gudang Penyangga</button>\n\n<div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n</div>\n\n\n\n<button class="accordion">Kontak Pemasaran</button>\n\n<div class="panel">\n\n\n\n  <button class="accordion">Pusat Layanan Pelanggan</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Informasi Pupuk Bersubsidi</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Informasi Pupuk Non Subsidi</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Informasi Produk Non Pupuk</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Informasi Layanan Jasa</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n  <button class="accordion">Pelayanan Kerjasama Produksi Petroganik</button>\n\n  <div class="panel">\n\n  <p>Lorem ipsum...</p>\n\n  </div>\n\n\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\pemasaran\pemasaran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PemasaranPage);
    return PemasaranPage;
}());

//# sourceMappingURL=pemasaran.js.map

/***/ })

});
//# sourceMappingURL=35.js.map