webpackJsonp([28],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPerusahaanPageModule", function() { return ProfilPerusahaanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_perusahaan__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilPerusahaanPageModule = /** @class */ (function () {
    function ProfilPerusahaanPageModule() {
    }
    ProfilPerusahaanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profil_perusahaan__["a" /* ProfilPerusahaanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil_perusahaan__["a" /* ProfilPerusahaanPage */]),
            ],
        })
    ], ProfilPerusahaanPageModule);
    return ProfilPerusahaanPageModule;
}());

//# sourceMappingURL=profil-perusahaan.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPerusahaanPage; });
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
 * Generated class for the ProfilPerusahaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPerusahaanPage = /** @class */ (function () {
    function ProfilPerusahaanPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ProfilPerusahaanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPerusahaanPage');
    };
    ProfilPerusahaanPage.prototype.PdfProfil = function () {
        var confirm = this.alertCtrl.create({
            title: 'Buka Profil Perusahaan?',
            message: 'Apakah anda yakin ingin mengunjungi laman PDF Profil Perusahaan?.',
            buttons: [
                {
                    text: 'Batal',
                    handler: function () {
                        console.log('Canceled');
                    }
                },
                {
                    text: 'Buka',
                    handler: function () {
                        window.open("http://www.petrokimia-gresik.com/Resources/Docs/CP%20Petrokimia%20Gresik%20small.pdf", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilPerusahaanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil-perusahaan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\profil-perusahaan\profil-perusahaan.html"*/'<!--\n\n  Generated template for the ProfilPerusahaanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n    <ion-title>profilPerusahaan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\profil-perusahaan\profil-perusahaan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ProfilPerusahaanPage);
    return ProfilPerusahaanPage;
}());

//# sourceMappingURL=profil-perusahaan.js.map

/***/ })

});
//# sourceMappingURL=28.js.map