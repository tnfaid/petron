webpackJsonp([68],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumKaryawanPageModule", function() { return JumKaryawanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jum_karyawan__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JumKaryawanPageModule = /** @class */ (function () {
    function JumKaryawanPageModule() {
    }
    JumKaryawanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jum_karyawan__["a" /* JumKaryawanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jum_karyawan__["a" /* JumKaryawanPage */]),
            ],
        })
    ], JumKaryawanPageModule);
    return JumKaryawanPageModule;
}());

//# sourceMappingURL=jum-karyawan.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumKaryawanPage; });
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
 * Generated class for the JumKaryawanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JumKaryawanPage = /** @class */ (function () {
    function JumKaryawanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JumKaryawanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JumKaryawanPage');
    };
    JumKaryawanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jum-karyawan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\jum-karyawan\jum-karyawan.html"*/'<!--\n\n  Generated template for the JumKaryawanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar no-border-bottom color="header">\n\n    <ion-title>JumKaryawan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h5>JUMLAH SDM BERDASARKAN JENJANG JABATAN</h5><br>\n\n<p>(per 30 April 2018)</p><br><br>\n\n<table>\n\n		<thead>\n\n		<tr>\n\n			<th>JABATAN</th>\n\n			<th>JUMLAH</th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Direksi</td>\n\n			<td>5(*)</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade I</td>\n\n		  <td>24</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade II</td>\n\n		  <td>77</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade III</td>\n\n		  <td>232</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade IV</td>\n\n		  <td>763</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade V</td>\n\n		  <td>818</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pelaksana</td>\n\n		  <td>1.245</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Bulanan Percobaan</td>\n\n		  <td>0</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>TOTAL</td>\n\n		  <td>3.159</td>\n\n		</tr>\n\n		</tbody>\n\n	</table><br><br>\n\n<h5>JUMLAH SDM BERDASARKAN JENJANG JABATAN</h5><br>\n\n<p>(Desember - 3 tahun terakhir)</p><br><br>\n\n<table>\n\n		<thead>\n\n		<tr>\n\n			<th>JABATAN</th>\n\n			<th>2017</th>\n\n			<th>2016</th>\n\n			<th>2015</th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Direksi</td>\n\n			<td>5</td>\n\n			<td>6</td>\n\n			<td>4</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade I</td>\n\n		  <td>25</td>\n\n		  <td>30</td>\n\n		  <td>29</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade II</td>\n\n		  <td>80</td>\n\n		  <td>77</td>\n\n		  <td>74</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade III</td>\n\n		  <td>221</td>\n\n		  <td>205</td>\n\n		  <td>205</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade IV</td>\n\n		  <td>774</td>\n\n		  <td>792</td>\n\n		  <td>752</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Grade V</td>\n\n		  <td>883</td>\n\n		  <td>990</td>\n\n		  <td>1.113</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Pelaksana</td>\n\n		  <td>1.245</td>\n\n		  <td>1.036</td>\n\n		  <td>1.025</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Bulanan Percobaan</td>\n\n		  <td>2</td>\n\n		  <td>19</td>\n\n		  <td>0</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>TOTAL</td>\n\n		  <td>3.231</td>\n\n		  <td>3.155</td>\n\n		  <td>3.202</td>\n\n		</tr>\n\n		</tbody>\n\n	</table><br><br>\n\n<h5>JUMLAH SDM BERDASARKAN TINGKAT PENDIDIKAN</h5><br>\n\n<p>(per 30 April 2018)</p><br><br>\n\n<table>\n\n		<thead>\n\n		<tr>\n\n			<th>PENDIDIKAN</th>\n\n			<th>JUMLAH</th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Pasca Srjana(S2)</td>\n\n			<td>81</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Sarjana(S1)</td>\n\n		  <td>559</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Sarjana Muda(D3)</td>\n\n		  <td>123</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>SLTA</td>\n\n		  <td>2.252</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>SLTP</td>\n\n		  <td>144</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>TOTAL</td>\n\n		  <td>3.159</td>\n\n		</tr>\n\n		</tbody>\n\n	</table><br><br>\n\n<h5>JUMLAH SDM BERDASARKAN TINGKAT PENDIDIKAN</h5><br>\n\n<p>(Desember - 3 tahun terakhir)</p><br><br>\n\n<table>\n\n		<thead>\n\n		<tr>\n\n			<th>PENDIDIKAN</th>\n\n			<th>2017</th>\n\n			<th>2016</th>\n\n			<th>2015</th>\n\n		</tr>\n\n		</thead>\n\n		<tbody>\n\n		<tr>\n\n			<td>Pasca Srjana(S2)</td>\n\n			<td>95</td>\n\n			<td>92</td>\n\n			<td>97</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Sarjana(S1)</td>\n\n		  <td>575</td>\n\n		  <td>548</td>\n\n		  <td>574</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>Sarjana Muda(D3)</td>\n\n		  <td>122</td>\n\n		  <td>67</td>\n\n		  <td>44</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>SLTA</td>\n\n		  <td>2.292</td>\n\n		  <td>2.303</td>\n\n		  <td>2.329</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>SLTP</td>\n\n		  <td>147</td>\n\n		  <td>145</td>\n\n		  <td>158</td>\n\n		</tr>\n\n		<tr>\n\n		  <td>TOTAL</td>\n\n		  <td>3.231</td>\n\n		  <td>3.155</td>\n\n		  <td>3.202</td>\n\n		</tr>\n\n		</tbody>\n\n	</table><br><br>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\jum-karyawan\jum-karyawan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JumKaryawanPage);
    return JumKaryawanPage;
}());

//# sourceMappingURL=jum-karyawan.js.map

/***/ })

});
//# sourceMappingURL=68.js.map