webpackJsonp([66],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KapProdukPageModule", function() { return KapProdukPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kap_produk__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KapProdukPageModule = /** @class */ (function () {
    function KapProdukPageModule() {
    }
    KapProdukPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kap_produk__["a" /* KapProdukPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kap_produk__["a" /* KapProdukPage */]),
            ],
        })
    ], KapProdukPageModule);
    return KapProdukPageModule;
}());

//# sourceMappingURL=kap-produk.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KapProdukPage; });
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
 * Generated class for the KapProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KapProdukPage = /** @class */ (function () {
    function KapProdukPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KapProdukPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KapProdukPage');
    };
    KapProdukPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kap-produk',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\kap-produk\kap-produk.html"*/'<!--\n\n  Generated template for the KapProdukPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Kapasitas Produksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h6>  Jumlah Pabrik & Kapasitas Produksi </h6>\n\n	<table>\n\n		<thead>\n\n		<tr>\n\n			<th>Pupuk</th>\n\n			<th>Pabrik</th>\n\n			<th>Kapasitas/TH</th>\n\n			<th>Tahun Beroperasi</th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Pupuk Urea</td>\n\n			<td>1</td>\n\n			<td>460.000 ton/tahun</td>\n\n			<td>1994</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pupuk Fosfat</td>\n\n		  <td>1</td>\n\n		  <td>500.000 ton/tahun</td>\n\n		  <td>2009</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pupuk ZA</td>\n\n		  <td>3</td>\n\n		  <td>750.000 ton/tahun</td>\n\n		  <td>1972, 1984, 1986</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pupuk NPK:<br>\n\n		  	- Phonska I<br>\n\n		  	- Phonska II & III<br>\n\n		  	- Phonska IV<br>\n\n		  	- NPK I<br>\n\n		  	- NPK II<br>\n\n		  	- NPK III & IV</td>\n\n		  <td><br>\n\n		  	1<br>\n\n		  	2<br>\n\n		  	1<br>\n\n		  	1<br>\n\n		  	1<br>\n\n		  	2</td>\n\n		  <td><br>\n\n		  	450.000 ton/tahun<br>\n\n		  	1.200.000 ton/tahun<br>\n\n		  	600.000 ton/tahun<br>\n\n		  	90.000 ton/tahun<br>\n\n		  	120.000 ton/tahun<br>\n\n		  	240.000 ton/tahun</td>\n\n		  <td><br>\n\n		  	2000<br>\n\n		  	2005, 2009<br>\n\n		  	2011<br>\n\n		  	2005<br>\n\n		  	2008<br>\n\n		  	2009</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pupuk K2SO4 (ZK)</td>\n\n		  <td>2</td>\n\n		  <td>20.000 ton/tahun</td>\n\n		  <td>2005,2016</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pupuk Petroganik (*)</td>\n\n		  <td>1</td>\n\n		  <td>10.000 ton/tahun</td>\n\n		  <td>2005</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Jumlah pabrik/Kapasitas</td>\n\n		  <td>16</td>\n\n		  <td>4.400.000 ton/tahun</td>\n\n		  <td></td>\n\n		</tr>\n\n		</tbody>\n\n	</table>\n\n	<br><br>\n\n\n\n	<table>\n\n		<thead>\n\n			<tr>\n\n				<th>Non Pupuk</th>\n\n				<th>Pabrik</th>\n\n				<th>Kapasitas/Th</th>\n\n				<th>Tahun Beroperasi</th>\n\n			</tr>\n\n		</thead>\n\n		<tbody>\n\n			<tr>\n\n				<td>Amoniak</td>\n\n				<td>1</td>\n\n				<td>445.000 ton/tahun</td>\n\n				<td>1994</td>\n\n			</tr>\n\n			<tr>\n\n				<td>Asam Sulfat(98% H2SO4)</td>\n\n				<td>2</td>\n\n				<td>1.170.000 ton/tahun</td>\n\n				<td>1985, 2015</td>\n\n			</tr>\n\n			<tr>\n\n				<td>Asam Fosfat(100% P2O5)</td>\n\n				<td>2</td>\n\n				<td>400.000 ton/tahun</td>\n\n				<td>1985,2015</td>\n\n			</tr>\n\n			<tr>\n\n				<td>Cement Retarder</td>\n\n				<td>1</td>\n\n				<td>440.000 ton/tahun</td>\n\n				<td>1985</td>\n\n			</tr>\n\n			<tr>\n\n				<td>Aluminium Florida</td>\n\n				<td>1</td>\n\n				<td>12.600 ton/tahun</td>\n\n				<td>1985</td>\n\n			</tr>\n\n			<tr>\n\n				<td>Purified Gypsum</td>\n\n				<td>2</td>\n\n				<td>800.000 ton/tahun</td>\n\n				<td>1985, 2015</td>\n\n			</tr>\n\n			<tr>\n\n				<td>Jumlah Pabrik/Kapasitas</td>\n\n				<td>9</td>\n\n				<td>3.267.600 ton/tahun</td>\n\n				<td>1985</td>\n\n			</tr>\n\n		</tbody>\n\n	</table>\n\n	<br><br>\n\n\n\n	<table>\n\n		<thead>\n\n			<tr>\n\n				<th>TOTAL PABRIK/KAPASITAS</th>\n\n				<th>25</th>\n\n				<th>7.707.600 TON/TAHUN</th>\n\n			</tr>\n\n		</thead>\n\n	</table>\n\n	<br><br>\n\n\n\n	<p>(*) Kapasitas satu pabrik di PT Petrokimia Gresik. Pengembangan Petroganik dilakukan di seluruh Indonesia, bekerjasama dengan investor daerah setempat.<br><br>\n\n\n\nSelain menghasilkan dan memasarkan produk pupuk dan non pupuk, PT Petrokimia Gresik juga menawarkan berbagai bentuk jasa & pelayanan, antara lain meliputi : jasa pelabuhan, keahlian, fabrikasi, penelitian laboratorium, konstruksi & rancang bangun, pendidikan & latihan, dan lain-lain.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\kap-produk\kap-produk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], KapProdukPage);
    return KapProdukPage;
}());

//# sourceMappingURL=kap-produk.js.map

/***/ })

});
//# sourceMappingURL=66.js.map