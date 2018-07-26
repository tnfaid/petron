webpackJsonp([6],{

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniPageModule", function() { return TestimoniPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testimoni__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestimoniPageModule = /** @class */ (function () {
    function TestimoniPageModule() {
    }
    TestimoniPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testimoni__["a" /* TestimoniPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__testimoni__["a" /* TestimoniPage */]),
            ],
        })
    ], TestimoniPageModule);
    return TestimoniPageModule;
}());

//# sourceMappingURL=testimoni.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimoniPage; });
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
 * Generated class for the TestimoniPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestimoniPage = /** @class */ (function () {
    function TestimoniPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestimoniPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestimoniPage');
    };
    TestimoniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-testimoni',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\testimoni\testimoni.html"*/'<!--\n\n  Generated template for the TestimoniProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Testimoni Produk</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div class="row item-text-wrap text-center">\n\n		<ion-card>\n\n  <img src="../assets/imgs/Pupuk/kebomas.png"style="width: 150px;height: 150px;">\n\n  <ion-card-content>\n\n    <a [navPush]="\'Video1Page\'">\n\n         <ion-card-title> \n\n          NPK Kebomas Horti \n\n         </ion-card-title> \n\n    </a>	\n\n  </ion-card-content>\n\n</ion-card>		\n\n	</div>\n\n\n\n	<div class="row item-text-wrap text-center">\n\n		<ion-card>\n\n  <img src="../assets/imgs/Pupuk/npk.png"style="width: 150px;height: 150px;">\n\n  <ion-card-content>\n\n     <a [navPush]="\'Video2Page\'">\n\n         <ion-card-title> \n\n          NPK Kebomas \n\n         </ion-card-title> \n\n    </a>\n\n\n\n  </ion-card-content>\n\n</ion-card>		\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\testimoni\testimoni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TestimoniPage);
    return TestimoniPage;
}());

//# sourceMappingURL=testimoni.js.map

/***/ })

});
//# sourceMappingURL=6.js.map