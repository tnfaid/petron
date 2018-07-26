webpackJsonp([55],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KritikPageModule", function() { return KritikPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kritik__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KritikPageModule = /** @class */ (function () {
    function KritikPageModule() {
    }
    KritikPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kritik__["a" /* KritikPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kritik__["a" /* KritikPage */]),
            ],
        })
    ], KritikPageModule);
    return KritikPageModule;
}());

//# sourceMappingURL=kritik.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KritikPage; });
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
 * Generated class for the KritikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KritikPage = /** @class */ (function () {
    function KritikPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KritikPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KritikPage');
    };
    KritikPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kritik',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\kritik\kritik.html"*/'<!--\n\n  Generated template for the KritikPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Kritik dan Saran</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<ion-card class="cardKritik">\n\n	  <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText"  floating>Nama :</ion-label>\n\n	    <ion-input type="text"></ion-input>\n\n	  </ion-item>\n\n	  <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText" floating>Alamat :</ion-label>\n\n	    <ion-textarea type="text"></ion-textarea>\n\n	  </ion-item>\n\n	  <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText" floating>Telepon :</ion-label>\n\n	    <ion-input type="text"></ion-input>\n\n	  </ion-item>\n\n	  <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText"  floating>Email :</ion-label>\n\n	    <ion-input type="text"></ion-input>\n\n	  </ion-item>\n\n	 <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText" floating>Judul :</ion-label>\n\n	    <ion-input type="text"></ion-input>\n\n	  </ion-item>\n\n	  <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText" floating>Pesan :</ion-label>\n\n	    <ion-textarea type="text"></ion-textarea>\n\n	  </ion-item>\n\n	  <ion-item class="borderInput">\n\n	    <ion-label class="label label-md labelText" floating>Verifikasi :</ion-label>\n\n	    <ion-input type="text"></ion-input>\n\n	  </ion-item>\n\n	  <ion-card class="cardVerifikasi">\n\n	  	<ion-item class="textKode">KODE</ion-item>\n\n	  </ion-card>\n\n	  <button class="buttonKritik" ion-button>Kirim</button>\n\n	</ion-card>\n\n	\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\kritik\kritik.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], KritikPage);
    return KritikPage;
}());

//# sourceMappingURL=kritik.js.map

/***/ })

});
//# sourceMappingURL=55.js.map