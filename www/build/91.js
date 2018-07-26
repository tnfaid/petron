webpackJsonp([91],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BantuanPageModule", function() { return BantuanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bantuan__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BantuanPageModule = /** @class */ (function () {
    function BantuanPageModule() {
    }
    BantuanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bantuan__["a" /* BantuanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bantuan__["a" /* BantuanPage */]),
            ],
        })
    ], BantuanPageModule);
    return BantuanPageModule;
}());

//# sourceMappingURL=bantuan.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BantuanPage; });
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
 * Generated class for the BantuanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BantuanPage = /** @class */ (function () {
    function BantuanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BantuanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BantuanPage');
    };
    BantuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bantuan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\bantuan\bantuan.html"*/'<!--\n\n  Generated template for the BantuanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    		<ion-title>Bantuan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n		\n\n  <ion-list>\n\n    <button [navPush]="\'FaQsPage\'" ion-item>\n\n      <ion-icon item-start><img src="assets/imgs/bantuan/faq.png" style="width: 30px;height: 30px;"></ion-icon>\n\n      FaQs\n\n    </button>\n\n\n\n    <button [navPush]="\'KontakPage\'" ion-item>\n\n      <ion-icon item-start><img src="assets/imgs/bantuan/kontak.png" style="width: 30px;height: 30px;"></ion-icon>\n\n      Kontak\n\n    </button>\n\n\n\n    <button [navPush]="\'InfoAppPage\'" ion-item>\n\n      <ion-icon item-start><img src="assets/imgs/bantuan/info.png" style="width: 30px;height: 30px;"></ion-icon>\n\n      Info App\n\n    </button>\n\n\n\n    <button [navPush]="\'KritikPage\'" ion-item>\n\n      <ion-icon item-start><img src="assets/imgs/bantuan/kritik.png" style="width: 35px;height: 40px;"></ion-icon>\n\n      Kritik dan Saran\n\n    </button>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\bantuan\bantuan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BantuanPage);
    return BantuanPage;
}());

//# sourceMappingURL=bantuan.js.map

/***/ })

});
//# sourceMappingURL=91.js.map