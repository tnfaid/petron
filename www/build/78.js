webpackJsonp([78],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirutPageModule", function() { return DirutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dirut__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirutPageModule = /** @class */ (function () {
    function DirutPageModule() {
    }
    DirutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dirut__["a" /* DirutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dirut__["a" /* DirutPage */]),
            ],
        })
    ], DirutPageModule);
    return DirutPageModule;
}());

//# sourceMappingURL=dirut.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirutPage; });
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
 * Generated class for the DirutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DirutPage = /** @class */ (function () {
    function DirutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DirutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DirutPage');
    };
    DirutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dirut',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\dirut\dirut.html"*/'<!--\n\n  Generated template for the DirutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar no-border-bottom color="header">\n\n    <ion-title>Direksi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n		<tr>\n\n			<th><h5>DIREKTUR UTAMA</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/dirut.jpg" /><br><br>\n\n				<h6>NUGROHO CHRISTIJANTO</h6>\n\n				<p>Lahir di Cepu, 22 Mei 1968. Meraih gelar Sarjana Teknik Kimia dari Institut Teknologi Bandung (ITB) pada tahun 1992. Menyelesaikan Pasca Sarjana bidang Manajemen Bisnis dan Administrasi Teknologi pada tahun 2004 di Institut Teknologi Bandung (ITB).<br>Mengawali kariernya di PT Petrokimia Gresik mulai 01 Agustus 1992. Menjadi Direktur Produksi PT Petrokimia Gresik sejak 03 September 2012 sampai 13 Januari 2016. Diangkat menjadi Direktur Utama PT Petrokimia Gresik sejak 13 Januari 2016.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>DIREKTUR TEKNIK & PENGEMBANGAN</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/direktur1.jpg" /><br><br>\n\n				<h6>ARIF FAUZAN</h6>\n\n				<p>Lahir di Ngawi, 28 November 1964. Meraih gelar Sarjana Teknik Mesin - Konversi Energi dari Institut Teknologi Sepuluh November Surabaya (ITS) pada tahun 1988. Menyelesaikan Pasca Sarjana dengan gelar Magister Teknik  pada tahun 2007 di Institut Teknologi Sepuluh November Surabaya (ITS).<br>Mengawali kariernya di PT Petrokimia Gresik mulai 01 Mei 1990. Diangkat menjadi Direktur Teknik & Pengembangan PT Petrokimia Gresik mulai 13 Januari 2016.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>DIREKTUR PRODUKSI</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/direktur2.jpg" /><br><br>\n\n				<h6>I KETUT RUSNAYA</h6>\n\n				<p>Lahir di Tabanan Bali, 13 Juni 1967. Meraih gelar Sarjana Teknik Kimia dari Institut Teknologi Sepuluh November (ITS) Surabaya tahun 1991. Menyelesaikan Pasca Sarjana dengan gelar Magister Manajemen pada tahun 2008 di Universitas Gajah Mada Yogyakarta.<br>Pernah menjabat sebagai Manager Pabrik Kaltim I, PT Pupuk Kaltim, Juga pernah sebagai Direktur Pengembangan Bisnis, PT Kaltim Industrial Estate (PT Pupuk Kaltim). Diangkat menjadi Direktur Produksi PT Petrokimia Gresik mulai 13 Januari 2016.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>DIREKTUR PEMASARAN</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/direktur3.jpg" /><br><br>\n\n				<h6>MEINU SADARIYO</h6>\n\n				<p>Lahir di Surakarta, 12 Mei 1962. Meraih gelar Sarjana Teknik Kimia di Universitas Diponegoro Semarang.<br>Sejak tanggal 16 Desember 2011 hingga 16 Juni 2015 menjabat sebagai General Manajer Penjualan  di PT Pupuk Kaltim, Dari tanggal 17 Juni 2015 hingga 12 Januari 2016 menjabat sebagai Direktur Usaha PT Pupuk Indonesia Pangan. Diangkat menjadi Direktur Pemasaran PT Petrokimia Gresik mulai 13 Januari 2016.</p>\n\n			</td>\n\n		</tr>\n\n		<tr>\n\n			<th><h5>DIREKTUR KEUANGAN, SDM & UMUM</h5></th>\n\n		</tr><br>\n\n		<tr>\n\n			<td>\n\n				<img class="avatarCard" src="../assets/imgs/direktur4.jpg" /><br><br>\n\n				<h6>DWI ARY PURNOMO</h6>\n\n				<p>Lahir di Jakarta, 26 Februari 1975. Memperoleh gelar sarjana S1 Ekonomi jurusan Akuntansi, Universitas Borobudur Jakarta, selanjutnya meraih gelar S2 Program Pasca Sarjana Fakultas Hukum Ekonomi, Universitas Indonesia.<br>Tahun 2016-2017 sebagai Asisten Deputi Layanan Hukum Kemeneg BUMN. Diangkat sebagai Direktur Keuangan, SDM dan Umum sejak 13 Desember 2017.</p>\n\n			</td>\n\n		</tr>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\dirut\dirut.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DirutPage);
    return DirutPage;
}());

//# sourceMappingURL=dirut.js.map

/***/ })

});
//# sourceMappingURL=78.js.map