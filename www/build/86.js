webpackJsonp([86],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrosurPageModule", function() { return BrosurPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brosur__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrosurPageModule = /** @class */ (function () {
    function BrosurPageModule() {
    }
    BrosurPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brosur__["a" /* BrosurPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brosur__["a" /* BrosurPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__brosur__["a" /* BrosurPage */]
            ]
        })
    ], BrosurPageModule);
    return BrosurPageModule;
}());

//# sourceMappingURL=brosur.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrosurPage; });
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
 * Generated class for the BrosurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrosurPage = /** @class */ (function () {
    function BrosurPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BrosurPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrosurPage');
    };
    BrosurPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brosur',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\brosur\brosur.html"*/'<!--\n\n  Generated template for the BrosurPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Brosur</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	  <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/Pupuk/UREA.png">\n\n                    <p>Pupuk Urea</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>\n\n            <div class="item col col-4 ">\n\n                    <img img src="../assets/imgs/Pupuk/zza.png">\n\n                    <p>Pupuk ZA</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div> \n\n  </div>\n\n  <div class="row item-text-wrap text-center">   \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/Pupuk/SP-36.png">\n\n                    <p>Pupuk SP-36</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>   \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/Pupuk/petroganik.png">\n\n                    <p>Pupuk Petroganik</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/Pupuk/ZK.png">\n\n                    <p >Pupuk ZK</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/Pupuk/phonska.png">\n\n                    <p>Pupuk Phonska</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/Pupuk/npk.png">\n\n                    <p >Pupuk NPK Kebomas</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/Pupuk/Plus.png">\n\n                    <p>Pupuk Phonska Plus</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img style="width:175px;" src="../assets/imgs/Pupuk/petro.png">\n\n                    <p >Petro Biofertil</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">>\n\n                    <img src="../assets/imgs/non-pupuk/feed.png">\n\n                    <p>Petro Biofeed</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/non-pupuk/cass.png">\n\n                    <p >Petro CAS</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/non-pupuk/chick.png">\n\n                    <p>Petro Chick</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	 \n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/non-pupuk/cabe.png">\n\n                    <p >Petro Chili</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/non-pupuk/fish.png">\n\n                    <p>Petro Fish</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/non-pupuk/padi.png">\n\n                    <p >Petro Hibrid</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/non-pupuk/corn.png">\n\n                    <p>Petro Hi-corn</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/planning.png">\n\n                    <p >Petroponic</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/non-pupuk/seed.png">\n\n                    <p>PetroSeed</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/non-pupuk/rice.png">\n\n                    <p >FitRice</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                    <img src="../assets/imgs/non-pupuk/gladiator.png">\n\n                    <p>Gladiator</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                    <img src="../assets/imgs/non-pupuk/kapur.png">\n\n                    <p >Kapurpertanian</p>\n\n                <a>\n\n                	 <button ion-button class="buttonDownloadTahun">Download</button>\n\n                </a>	\n\n            </div>      \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\brosur\brosur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BrosurPage);
    return BrosurPage;
}());

//# sourceMappingURL=brosur.js.map

/***/ })

});
//# sourceMappingURL=86.js.map