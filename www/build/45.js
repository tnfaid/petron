webpackJsonp([45],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonPageModule", function() { return NonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__non__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NonPageModule = /** @class */ (function () {
    function NonPageModule() {
    }
    NonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__non__["a" /* NonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__non__["a" /* NonPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__non__["a" /* NonPage */]
            ]
        })
    ], NonPageModule);
    return NonPageModule;
}());

//# sourceMappingURL=non.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonPage; });
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
 * Generated class for the NonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NonPage = /** @class */ (function () {
    function NonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NonPage');
    };
    NonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-non',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\non\non.html"*/'<!--\n\n  Generated template for the NonPupukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>NonPupuk</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	 <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'CementPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/cement.png">\n\n                    <p>Cement Retarder</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'KimiaPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/mia.png">\n\n                    <p class="text-menuProfil">Bahan Kimia</p>\n\n                </a>\n\n            </div>     \n\n  </div>\n\n  <div class="row item-text-wrap text-center" >   \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'KapurPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/kapur.png">\n\n                    <p>kapurpertanian</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'CasPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/cass.png">\n\n                    <p>Petro Cas</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">   \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'GladiatorPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/gladiator.png">\n\n                    <p>Petro Gladiator</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'HibridPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/padi.png">\n\n                    <p>Petro Hibrid</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'SeedPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/seed.png">\n\n                    <p >Petro Seed</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'CornPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/corn.png">\n\n                    <p>Petro Hi-corn</p>\n\n                </a>\n\n            </div>   \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n             <div class="item col col-4 ">\n\n                <a [navPush]="\'FishPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/fish.png">\n\n                    <p>Petro Fish</p>\n\n                </a>\n\n            </div>\n\n        <div class="item col col-4">\n\n                <a [navPush]="\'ChiliPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/cabe.png">\n\n                    <p >Petro Chili</p>\n\n                </a>\n\n            </div>             \n\n  </div>\n\n  <div class="row item-text-wrap text-center"> \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'BiofeedPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/feed.png">\n\n                    <p>Petro Biofeed</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'ChickPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/chick.png">\n\n                    <p>Petro Chick</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'RicePage\'">\n\n                    <img src="../assets/imgs/non-pupuk/rice.png">\n\n                    <p>Fit Rice</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'JasaPage\'">\n\n                    <img src="../assets/imgs/non-pupuk/jasa.png">\n\n                    <p>Jasa</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\non\non.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NonPage);
    return NonPage;
}());

//# sourceMappingURL=non.js.map

/***/ })

});
//# sourceMappingURL=45.js.map