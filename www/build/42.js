webpackJsonp([42],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedomanEtikPageModule", function() { return PedomanEtikPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedoman_etik__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedomanEtikPageModule = /** @class */ (function () {
    function PedomanEtikPageModule() {
    }
    PedomanEtikPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedoman_etik__["a" /* PedomanEtikPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedoman_etik__["a" /* PedomanEtikPage */]),
            ],
        })
    ], PedomanEtikPageModule);
    return PedomanEtikPageModule;
}());

//# sourceMappingURL=pedoman-etik.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedomanEtikPage; });
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
 * Generated class for the PedomanEtikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedomanEtikPage = /** @class */ (function () {
    function PedomanEtikPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedomanEtikPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedomanEtikPage');
    };
    PedomanEtikPage.prototype.downloadAndOpenPdf = function () {
        window.open("http://www.petrokimia-gresik.com/Resources/Docs/PEBK_2017.pdf", '_system', 'location=yes');
    };
    PedomanEtikPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedoman-etik',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\pedoman-etik\pedoman-etik.html"*/'<!--\n\n  Generated template for the PedomanEtikPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar color="header">\n\n    <ion-title>pedoman Etika</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h3 class="search-query">\n\n    <span>Showing: </span>\n\n    <ion-badge class="query-tag"></ion-badge>\n\n    <span class="query-explanation"> Pedoman Etika Kerja </span>\n\n  </h3>\n\n\n\n  <ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Pedoman Etika kerja</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" (click)=\'downloadAndOpenPdf();\'>Download and Open PDF</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\pedoman-etik\pedoman-etik.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PedomanEtikPage);
    return PedomanEtikPage;
}());

//# sourceMappingURL=pedoman-etik.js.map

/***/ })

});
//# sourceMappingURL=42.js.map