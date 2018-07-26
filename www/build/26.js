webpackJsonp([26],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PupukPageModule", function() { return PupukPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pupuk__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PupukPageModule = /** @class */ (function () {
    function PupukPageModule() {
    }
    PupukPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pupuk__["a" /* PupukPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pupuk__["a" /* PupukPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pupuk__["a" /* PupukPage */]
            ]
        })
    ], PupukPageModule);
    return PupukPageModule;
}());

//# sourceMappingURL=pupuk.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PupukPage; });
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
 * Generated class for the PupukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PupukPage = /** @class */ (function () {
    function PupukPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    PupukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PupukPage');
    };
    PupukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pupuk',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\pupuk\pupuk.html"*/'<!--\n\n  Generated template for the PupukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Pupuk</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n               <img src="../assets/imgs/Pupuk/UREA.png"> \n\n                <a [navPush]="\'UreaPage\'">\n\n                    <p>Urea</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'ZaPage\'">\n\n                    <img src="../assets/imgs/Pupuk/zza.png">\n\n                    <p class="text-menuProfil">ZA</p>\n\n                </a>\n\n            </div>     \n\n  </div>\n\n  <div class="row item-text-wrap text-center" >    \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'Sp36Page\'">\n\n                    <img src="../assets/imgs/Pupuk/SP-36.png">\n\n                    <p>SP-36</p>\n\n                </a>\n\n            </div>\n\n        <div class="item col col-4 ">\n\n                <a [navPush]="\'ZkPage\'">\n\n                    <img src="../assets/imgs/Pupuk/ZK.png">\n\n                    <p>ZK</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">    \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PhonskaPage\'">\n\n                    <img src="../assets/imgs/Pupuk/phonska.png">\n\n                    <p>Phonska</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'NpkPage\'">\n\n                    <img src="../assets/imgs/Pupuk/npk.png">\n\n                    <p>NPK</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'KclPage\'">\n\n                    <img src="../assets/imgs/Pupuk/KCL.png">\n\n                    <p >KCL</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PetroganikPage\'">\n\n                    <img src="../assets/imgs/Pupuk/petroganik.png">\n\n                    <p>Petroganik</p>\n\n                </a>\n\n            </div>    \n\n  </div>\n\n    <div class="row item-text-wrap text-center"> \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'BiofertilPage\'">\n\n                    <img style="width:175px;" src="../assets/imgs/Pupuk/petro.png">\n\n                    <p>Petro Biofretil</p>\n\n                </a>\n\n            </div>\n\n         <div class="item col col-4 ">\n\n                <a [navPush]="\'PhospatePage\'">\n\n                    <img src="../assets/imgs/Pupuk/rock.png">\n\n                    <p>Rock Phospate</p>\n\n                </a>\n\n            </div>      \n\n  </div>\n\n  <div class="row item-text-wrap text-center"> \n\n       <div class="item col col-4">\n\n                <a [navPush]="\'KomoditiPage\'">\n\n                    <img style="width:125px;" src="../assets/imgs/Pupuk/pupuk.png">\n\n                    <p >Pupuk Spesifikasi Komoditi</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\pupuk\pupuk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PupukPage);
    return PupukPage;
}());

//# sourceMappingURL=pupuk.js.map

/***/ })

});
//# sourceMappingURL=26.js.map