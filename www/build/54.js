webpackJsonp([54],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaporanPageModule", function() { return LaporanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__laporan__ = __webpack_require__(409);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LaporanPageModule = /** @class */ (function () {
    function LaporanPageModule() {
    }
    LaporanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__laporan__["a" /* LaporanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__laporan__["a" /* LaporanPage */]),
            ],
        })
    ], LaporanPageModule);
    return LaporanPageModule;
}());

//# sourceMappingURL=laporan.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaporanPage; });
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


var LaporanPage = /** @class */ (function () {
    function LaporanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laporanData = [{ image: "../assets/imgs/sni17_con.jpg" }, { image: "../assets/imgs/proper 17_con.jpg" }];
    }
    LaporanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LaporanPage');
    };
    LaporanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-laporan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\laporan\laporan.html"*/'<ion-header class="headerHome">\n\n  	<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Laporan</ion-title>\n\n\n\n		<label class= "item item-input item-select selectTahun" end>\n\n	    \n\n	      <select>\n\n	        <option>2016</option>\n\n	        <option>2015</option>\n\n	        <option>2014</option>\n\n	      </select>\n\n	   	</label>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="has-header">\n\n\n\n   <div class="row item-text-wrap text-center">\n\n      <div class="item col col-4" style="margin-right: 10px;" *ngFor="let laporan of laporanData">\n\n        <div class = "card list">\n\n          <div class = "item item-divider " >\n\n            Laporan Hasil\n\n          </div>\n\n          <div class = "item item-text-wrap">\n\n            <img src="{{laporan.image}}">\n\n          </div>\n\n        </div>\n\n        <div class = "item buttonDownload ">\n\n          Download\n\n        </div>\n\n      </div>  \n\n  </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\laporan\laporan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LaporanPage);
    return LaporanPage;
}());

//# sourceMappingURL=laporan.js.map

/***/ })

});
//# sourceMappingURL=54.js.map