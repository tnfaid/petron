webpackJsonp([37],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedomanKomitePageModule", function() { return PedomanKomitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedoman_komite__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedomanKomitePageModule = /** @class */ (function () {
    function PedomanKomitePageModule() {
    }
    PedomanKomitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedoman_komite__["a" /* PedomanKomitePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedoman_komite__["a" /* PedomanKomitePage */]),
            ],
        })
    ], PedomanKomitePageModule);
    return PedomanKomitePageModule;
}());

//# sourceMappingURL=pedoman-komite.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedomanKomitePage; });
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
 * Generated class for the PedomanKomitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedomanKomitePage = /** @class */ (function () {
    function PedomanKomitePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedomanKomitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedomanKomitePage');
    };
    PedomanKomitePage.prototype.downloadAndOpenPdf = function () {
        window.open("http://www.petrokimia-gresik.com/Resources/Docs/Committee%20Risk%20Management.pdf", '_system', 'location=yes');
    };
    PedomanKomitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedoman-komite',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\pedoman-komite\pedoman-komite.html"*/'<!--\n\n  Generated template for the PedomanKomitePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>Pedoman Man.resiko</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h3 class="search-query">\n\n    <span>Showing: </span>\n\n    <ion-badge class="query-tag"></ion-badge>\n\n    <span class="query-explanation"> Pedoman Kerja Komite Man.resiko </span>\n\n  </h3>\n\n\n\n  <ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Pedoman Kerja Komite Man.resiko</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" (click)=\'downloadAndOpenPdf();\'>Download and Open PDF</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\pedoman-komite\pedoman-komite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PedomanKomitePage);
    return PedomanKomitePage;
}());

//# sourceMappingURL=pedoman-komite.js.map

/***/ })

});
//# sourceMappingURL=37.js.map