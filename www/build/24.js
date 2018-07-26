webpackJsonp([24],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdmPageModule", function() { return SdmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdm__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SdmPageModule = /** @class */ (function () {
    function SdmPageModule() {
    }
    SdmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sdm__["a" /* SdmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sdm__["a" /* SdmPage */]),
            ],
        })
    ], SdmPageModule);
    return SdmPageModule;
}());

//# sourceMappingURL=sdm.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdmPage; });
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
 * Generated class for the SdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SdmPage = /** @class */ (function () {
    function SdmPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sdm = "jumKar";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    SdmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SdmPage');
    };
    SdmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sdm',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\sdm\sdm.html"*/'<!--\n\n  Generated template for the SdmPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n    <ion-title>Sumber Daya Manusia</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n  <ion-card-header>\n\n    SDM dibagi menjadi dua:\n\n  </ion-card-header>\n\n\n\n  <ion-list>\n\n    <button ion-item [navPush]="\'JumKaryawanPage\'">\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Jumlah Karyawan\n\n    </button>\n\n    <button ion-item [navPush]="\'FasPenunjangPage\'">\n\n      <ion-icon name="cart" item-start></ion-icon>\n\n      Fasilitas Penunjang\n\n    </button>\n\n   </ion-list>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\sdm\sdm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SdmPage);
    return SdmPage;
}());

//# sourceMappingURL=sdm.js.map

/***/ })

});
//# sourceMappingURL=24.js.map