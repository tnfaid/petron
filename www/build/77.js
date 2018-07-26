webpackJsonp([77],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosisPageModule", function() { return DosisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dosis__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DosisPageModule = /** @class */ (function () {
    function DosisPageModule() {
    }
    DosisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dosis__["a" /* DosisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dosis__["a" /* DosisPage */]),
            ],
        })
    ], DosisPageModule);
    return DosisPageModule;
}());

//# sourceMappingURL=dosis.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosisPage; });
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
 * Generated class for the DosisPemupukanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DosisPage = /** @class */ (function () {
    function DosisPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    DosisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DosisPage');
    };
    DosisPage.prototype.openActionSheet = function () {
        console.log('opening');
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Another One",
            buttons: [{
                    text: 'View',
                    handler: function () {
                        console.log("View Clicked");
                    }
                }, {
                    text: 'Download',
                    handler: function () {
                        console.log("Download Clicked");
                    }
                }]
        });
        actionsheet.present();
    };
    DosisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dosis',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\dosis\dosis.html"*/'<!--\n\n  Generated template for the DosisPemupukanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Dosis Pemupukan</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div class="row item-text-wrap text-center">\n\n		<ion-card>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      Pupuk Tunggal\n\n      </ion-card-title>\n\n    <a>\n\n         <button ion-button (click)="openActionSheet()" class="button">Open</button>\n\n    </a>	\n\n  </ion-card-content>\n\n</ion-card>		\n\n	</div>\n\n\n\n	<div class="row item-text-wrap text-center">\n\n		<ion-card>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      Pupuk Majemuk\n\n      </ion-card-title>\n\n    <a>\n\n       <button ion-button (click)="openActionSheet()" class="button">Open</button>\n\n    </a>	\n\n  </ion-card-content>\n\n</ion-card>		\n\n	</div>\n\n\n\n	<div class="row item-text-wrap text-center">\n\n		<ion-card>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      Pupuk Berimbang\n\n      </ion-card-title>\n\n    <a>\n\n    	 <button ion-button (click)="openActionSheet()" class="button">Open</button>\n\n    </a>	\n\n  </ion-card-content>\n\n</ion-card>		\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\dosis\dosis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], DosisPage);
    return DosisPage;
}());

//# sourceMappingURL=dosis.js.map

/***/ })

});
//# sourceMappingURL=77.js.map