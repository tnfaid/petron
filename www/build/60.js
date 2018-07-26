webpackJsonp([60],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomisPageModule", function() { return KomisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__komis__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KomisPageModule = /** @class */ (function () {
    function KomisPageModule() {
    }
    KomisPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__komis__["a" /* KomisPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__komis__["a" /* KomisPage */]),
            ],
        })
    ], KomisPageModule);
    return KomisPageModule;
}());

//# sourceMappingURL=komis.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KomisPage; });
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
 * Generated class for the KomisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KomisPage = /** @class */ (function () {
    function KomisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KomisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KomisPage');
    };
    KomisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-komis',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\komis\komis.html"*/'<!--\n\n  Generated template for the KomisPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar no-border-bottom color="header">\n\n    <ion-title>Komisaris</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n		<tr>\n\n			<th><h5>KOMISARIS UTAMA</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/komis-utama.jpg" /><br><br>\n\n				<h6>M. DJOHAN SAFRI</h6>\n\n				<p>Lahir di Surabaya, 22 Mei 1963.  Meraih gelar Sarjana Teknik Kimia dari Institut Teknologi Sepuluh Nopember (ITS) pada tahun 1987. Menyelesaikan Program Pasca Sarjana Magister Manajemen di Universitas Sriwijaya pada tahun 2001. Mengawali karier di PT Pupuk Sriwidjaja tahun 1988.Diangkat menjadi Komisaris Utama PT Petrokimia Gresik sejak tanggal 20 April 2016 sampai sekarang. </p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>KOMISARIS</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/komisaris1.jpg" /><br><br>\n\n				<h6>ANDI MUAWIYAH RAMLY</h6>\n\n				<p>Lahir di Watampone, 10 Oktober 1958. Menyelesaikan pendidikan S1 di Universitas Sunan Kalijaga Yogyakarta. Mendapatkan gelar Diploma Management di Asean Health Institute Nagoya Jepang. Gelar Pasca Sarjana Ilmu Pemerintahan di Universitas Krisnadwipayana. Menjabat sebagai Direktur Open Society Institute (OPSI) pada tahun 2000 sampai sekarang. Diangkat menjadi Komisaris PT Petrokimia Gresik sejak Agustus 2016 sampai sekarang.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>KOMISARIS</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/komisaris2.jpg" /><br><br>\n\n				<h6>MAHMUD NURWINDU</h6>\n\n				<p>Lahir di Surakarta, 03 November 1961. Menyelesaikan Program Sarjana Teknik Kimia Undip, Semarang pada tahun 1988.Diangkat menjadi Komisaris PT Petrokimia Gresik sejak tanggal 20 April 2016 sampai sekarang.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>KOMISARIS</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/komisaris3.jpg" /><br><br>\n\n				<h6>HARI PRIYONO</h6>\n\n				<p>Lahir di Yogyakarta, 14 Desember 1958. Mengawali karier di Kementrian Pertanian sejak tahun 1991. Saat ini sebagai Sekretaris Jenderal di Kementrian Pertanian RI.Diangkat menjadi Komisaris PT Petrokimia Gresik sejak tanggal 20 April 2016 sampai sekarang.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>KOMISARIS</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/komisaris4.jpg" /><br><br>\n\n				<h6>YOKE C. KATON</h6>\n\n				<p>Lahir di Kediri, 17 Juni 1975. Meraih gelar Sarjana Teknik Kimia dari Institut Teknologi Sepuluh Nopember (ITS) pada tahun 1999. Menyelesaikan Magister Manajemen dengan konsentrasi Manajemen Pemasaran dari Universitas Airlangga pada tahun 2008. Menjabat sebagai Direktur Pemasaran dan Pengembangan Usaha PT. Surabaya Industrial Estate Rungkut (SIER) tahun 2007-2011.Diangkat menjadi Komisaris PT Petrokimia Gresik sejak tanggal 20 April 2016 sampai sekarang. </p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>KOMISARIS</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/komisaris5.jpg" /><br><br>\n\n				<h6>HERIYONO HARSOYO</h6>\n\n				<p>Lahir di Blitar, 13 November 1950. Menyelesaikan Program Sarjana Psikologi S1 dan Magister Psikologi Terapan, di Universitas Padjajaran Bandung. Menyelesaikan Sekolah Perwira Wajib Militer (1975) & Sekolah Staf dan Komando AD Bandung (1989).Diangkat menjadi Komisaris PT Petrokimia Gresik sejak tanggal 20 April 2016 sampai sekarang. </p>\n\n			</td>\n\n		</tr>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\komis\komis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], KomisPage);
    return KomisPage;
}());

//# sourceMappingURL=komis.js.map

/***/ })

});
//# sourceMappingURL=60.js.map