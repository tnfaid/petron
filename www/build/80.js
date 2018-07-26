webpackJsonp([80],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorsoresPageModule", function() { return CorsoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corsores__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CorsoresPageModule = /** @class */ (function () {
    function CorsoresPageModule() {
    }
    CorsoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__corsores__["a" /* CorsoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__corsores__["a" /* CorsoresPage */]),
            ],
        })
    ], CorsoresPageModule);
    return CorsoresPageModule;
}());

//# sourceMappingURL=corsores.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorsoresPage; });
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
 * Generated class for the CorsoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CorsoresPage = /** @class */ (function () {
    function CorsoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CorsoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CorsoresPage');
    };
    CorsoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-corsores',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\corsores\corsores.html"*/'<ion-header class="headerHome">\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>CSR</ion-title>\n\n	</ion-navbar>\n\n</ion-header>	\n\n\n\n<ion-content padding="true" class="has-header" offset-50>\n\n        <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n                <a id="profil-button25" >\n\n                    <i class="icon" ><img class="imgCsr" src="../assets/imgs/CSR/binaLingkungan.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Bina Lingkungan</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a id="profil-button143">\n\n                    <i class="icon"><img class="imgCsr" img src="../assets/imgs/CSR/lolapil.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Lolapil</p>\n\n                </a>\n\n            </div>    \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4 ">\n\n                <a id="profil-button27">\n\n                    <i class="icon"><img class="imgCsr" img src="../assets/imgs/CSR/warta.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Kemitraan</p>\n\n                </a>\n\n            </div>    \n\n            <div class="item col col-4">\n\n                <a ui-sref="menu.Warta KBL()" id="profil-button29">\n\n                    <i class="icon"><img class="imgCsr" img src="../assets/imgs/CSR/mitra.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Warta KBL</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n</ion-content>'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\corsores\corsores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CorsoresPage);
    return CorsoresPage;
}());

//# sourceMappingURL=corsores.js.map

/***/ })

});
//# sourceMappingURL=80.js.map