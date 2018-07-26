webpackJsonp([93],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnPerusahaanPageModule", function() { return AnPerusahaanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__an_perusahaan__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnPerusahaanPageModule = /** @class */ (function () {
    function AnPerusahaanPageModule() {
    }
    AnPerusahaanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__an_perusahaan__["a" /* AnPerusahaanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__an_perusahaan__["a" /* AnPerusahaanPage */]),
            ],
        })
    ], AnPerusahaanPageModule);
    return AnPerusahaanPageModule;
}());

//# sourceMappingURL=an-perusahaan.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnPerusahaanPage; });
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
 * Generated class for the AnPerusahaanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnPerusahaanPage = /** @class */ (function () {
    function AnPerusahaanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnPerusahaanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnPerusahaanPage');
    };
    AnPerusahaanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-an-perusahaan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\an-perusahaan\an-perusahaan.html"*/'<!--\n\n  Generated template for the AnPerusahaanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Anak Perusahaan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h6>  Anak Perusahaan & Usaha Patungan </h6>\n\n	<table>\n\n		<thead>\n\n		<tr>\n\n			<th>1. PT PETROSIDA GRESIK</th>\n\n			<th></th>\n\n			<th></th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Line of Business</td>\n\n			<td>Industry of Active Pesticides  </td>\n\n			<td></td>\n\n		</tr>\n\n		<tr>\n\n			<td></td>\n\n			<td>Pesticides formulation</td>\n\n			<td></td>\n\n		</tr>\n\n		<tr>\n\n			<td></td>\n\n			<td>Liquid fertilizer</td>\n\n			<td></td>\n\n		</tr>\n\n		<tr>\n\n			<td>Shares</td>\n\n			<td>PT Petrokimia Gresik</td>\n\n			<td> 99,99%</td>\n\n		</tr>\n\n		<tr>\n\n			<td></td>\n\n			<td>K3PG</td>\n\n			<td>0,01%</td>\n\n		</tr>\n\n		</tbody>\n\n	</table>\n\n	<br><br>\n\n	<table>\n\n		<thead>\n\n		<tr>\n\n			<th>1. PT PETROKIMIA KAYAKU</th>\n\n			<th></th>\n\n			<th></th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Line of Business</td>\n\n			<td>Industry of Pesticides formulation (Insecticide, Herbicide, fungicide)  </td>\n\n			<td></td>\n\n		</tr>\n\n		<tr>\n\n			<td></td>\n\n			<td>PT Petrokimia Gresik</td>\n\n			<td>60%</td>\n\n		</tr>\n\n		<tr>\n\n			<td></td>\n\n			<td>Nippon Kayaku Co.Ltd</td>\n\n			<td>20%</td>\n\n		</tr>\n\n		<tr>\n\n			<td></td>\n\n			<td>Mitsubishi Corporation</td>\n\n			<td> 20%</td>\n\n		</tr>\n\n		</tbody>\n\n	</table>\n\n	<br>\n\n	<h4>Usaha Patungan</h4><br>\n\n	<h5>PT KAWASAN INDUSTRI GRESIK (KIG)</h5><br>\n\n	<p>Bisnis Utama :<br>\n\n	Menyiapkan lahan, sarana, prasarana dan berbagai fasilitas yang diperlukan untuk menunjang kegiatan aneka industri, termasuk di dalamnya Kawasan Berikat (Export Processing Zone).<br>\n\n	Saham PT Petrokimia Gresik : 35%</p><br>\n\n	<h5>PT PETRONIKA</h5><br>\n\n	<p>Bisnis Utama : <br>\n\n	Produsen bahan platicizer Diocthyl Phthalate (DOP)<br>\n\n	Saham PT Petrokimia Gresik : 20%</p>\n\n	<br>\n\n	<h5>PT PETROCENTRAL</h5><br>\n\n	<p>Bisnis Utama : <br>\n\n	Produsen Sodium Tripoly Phosphate (STPP) <br>\n\n	Saham PT Petrokimia Gresik : 9,8%</p><br>\n\n	<h5>PT PETRO JORDAN ABADI</h5>\n\n	<p>Bisnis Utama : <br>\n\n	Produsen Asam Fosfat (Phosphoric Acid)<br>\n\n	Saham PT Petrokimia Gresik : 50%</p><br>\n\n	<h5>PT PUPUK INDONESIA ENERGI</h5><br>\n\n	<p>Saham PT Petrokimia Gresik :10%.<br> \n\n	update 040116 </p>\n\n</ion-content>'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\an-perusahaan\an-perusahaan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AnPerusahaanPage);
    return AnPerusahaanPage;
}());

//# sourceMappingURL=an-perusahaan.js.map

/***/ })

});
//# sourceMappingURL=93.js.map