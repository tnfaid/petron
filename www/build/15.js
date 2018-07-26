webpackJsonp([15],{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TanyaGcgPageModule", function() { return TanyaGcgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tanya_gcg__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TanyaGcgPageModule = /** @class */ (function () {
    function TanyaGcgPageModule() {
    }
    TanyaGcgPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tanya_gcg__["a" /* TanyaGcgPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tanya_gcg__["a" /* TanyaGcgPage */]),
            ],
        })
    ], TanyaGcgPageModule);
    return TanyaGcgPageModule;
}());

//# sourceMappingURL=tanya-gcg.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TanyaGcgPage; });
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
 * Generated class for the TanyaGcgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TanyaGcgPage = /** @class */ (function () {
    function TanyaGcgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TanyaGcgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TanyaGcgPage');
    };
    TanyaGcgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tanya-gcg',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\tanya-gcg\tanya-gcg.html"*/'<!--\n\n  Generated template for the TanyaGcgPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n	<button ion-button menuToggle>\n\n		<ion-icon name="menu"></ion-icon>\n\n	</button>\n\n    <ion-title>tanya jawab GCG</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h3 class="search-query">\n\n    	<span>Showing: </span>\n\n    	<ion-badge class="query-tag"></ion-badge>\n\n    	<span class="query-explanation"> Tanya Jawab GCG</span>\n\n  	</h3>\n\n  	<ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Mengapa perusahaan perlu mengimplementasikan Good Corporate Governance (GCG) ?</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" [navPush]="\'Tanya1Page\'">View</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n\n\n  	<ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Apa sebenarnya pengertian dari Corporate Governance ?</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" [navPush]="\'Tanya2Page\'">View</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n\n\n  	<ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Apa yang melatar belakangi timbulnya Corporate Governance ?</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" [navPush]="\'Tanya3Page\'">View</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n\n\n  	<ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Di Indonesia juga dikenal istilah Code for Good Corporate Governance atau Code for CG, apakah ini sebenarnya ?</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" [navPush]="\'Tanya4Page\'">View</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n\n\n  	<ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Bagaimana PT Petrokimia Gresik mengimplementasikan GCG dalam pelaksanaan pengelolaan perusahaan ?</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" [navPush]="\'Tanya5Page\'">View</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n\n\n  	<ion-card class="category-concept-card cardHome">\n\n    <ion-card-header>\n\n      <h2 class="category-title" class="textDesc text-wrap">Sejauh mana pelaksanaan internal control di PT Petrokimia Gresik mampu mengawal implementasi prinsip-prinsip GCG ?</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" [navPush]="\'Tanya6Page\'">View</ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\tanya-gcg\tanya-gcg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TanyaGcgPage);
    return TanyaGcgPage;
}());

//# sourceMappingURL=tanya-gcg.js.map

/***/ })

});
//# sourceMappingURL=15.js.map