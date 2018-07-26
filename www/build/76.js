webpackJsonp([76],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FasInfrasPageModule", function() { return FasInfrasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fas_infras__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FasInfrasPageModule = /** @class */ (function () {
    function FasInfrasPageModule() {
    }
    FasInfrasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fas_infras__["a" /* FasInfrasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fas_infras__["a" /* FasInfrasPage */]),
            ],
        })
    ], FasInfrasPageModule);
    return FasInfrasPageModule;
}());

//# sourceMappingURL=fas-infras.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FasInfrasPage; });
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
 * Generated class for the FasInfrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FasInfrasPage = /** @class */ (function () {
    function FasInfrasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FasInfrasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FasInfrasPage');
    };
    FasInfrasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fas-infras',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\fas-infras\fas-infras.html"*/'<!--\n\n  Generated template for the FasInfrasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n    <ion-title>Fasilitas Infrastruktur</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h5>Dermaga</h5><br><br>\n\n	<img class="avatarCard" src="../assets/imgs/infras1.jpg" /><br><br>\n\n\n\n<p>PT Petrokimia Gresik  memiliki dermaga bongkar muat berbentuk hurut “T” dengan panjang 819 meter dan lebar 36 meter. Dermaga dilengkapi dengan 2 unit continuous ship unloader (CSU) berkapasitas 2.000 ton/jam, 2 unit cangaroo crane  dengan kapasitas 7.000 ton/hari, 2 unit ship loader dengan kapasitas masing-masing 1.500 ton/hari, belt conveyor sepanjang 22 km, serta fasilitas pemipaan untuk untuk bahan cair. Pada sisi laut dermaga dapat disandari dengan 3 buah kapal  berbobot mati 40.000 ton, dan pada sisi darat dapat disandari kapal dengan bobot mati 10.000 ton.</p><br><br><br>\n\n<h5>Pembangkit Tenaga Listrik</h5><br>\n\n<p>Untuk memenuhi kebutuhan dan menjamin keberlanjutan pasokan daya listrik demi kelancaran operasional pabrik, PT Petrokimia Gresik mengoperasikan gas turbine generator (GTG) dan steam turbine generator (STG) yang mampu menghasilkan daya listrik sebesar 53 MW.</p><br><br><br>\n\n<h5>Unit Penjernihan Air</h5><br><br>\n\n<img class="avatarCard" src="../assets/imgs/infras2.jpg" /><br><br>\n\n\n\n<p>PT Petrokimia Gresik memiliki 2 unit penjernihan air yang terletak di Gunungsari Surabaya, memanfaatkan air sungai Brantas, dan di Babat Lamongan , memanfaatkan air sungai Bengawan Solo. Kapasitas total air yang dialirkan ke Gresik dari 2 unit penjernihan air tersebut sebesar 3.200 m3/jam. </p><br><br><br>\n\n\n\n<h5>Unit Pengolahan Limbah</h5><br><br>\n\n<img class="avatarCard" src="../assets/imgs/infras3.jpg" /><br><br>\n\n<p>Sebagai perusahaan berwawasan lingkungan PT Petrokimia Gresik terus berupaya meminimalisir adanya limbah sebagai akibat dari proses produksi, sehingga tidak membahayakan lingkungan sekitarnya. PT Petrokimia Gresik melakukan  pengelolaan limbah dengan menggunakan sistem reuse, recycle dan recovery (3R) dengan dukungan : unit pengolahan limbah cair berkapasitas 240 m3/jam, fasilitas pengendali emisi gas di setiap unit produksi, di antaranya bag filter, cyclonic separator, dust collector, electric precipitator (EP), dust scrubber, dll. </p><br><br><br>\n\n\n\n<h5>Sarana Distribusi</h5><br><br>\n\n<img class="avatarCard" src="../assets/imgs/infras4.jpg" /><br><br>\n\n<p>PT Petrokimia Gresik mempunyai Gudang Distribution Center di Medan, Lampung, Padang, Cigading, Banyuwangi, Makasar dan Gresik</p><br><br><br>\n\n\n\n<h5>Laboratorium</h5>\n\n<br>\n\n<p>Laboratorium Produksi, Laboratorium Kalibrasi, Laboratorium Uji Kimia, Laboratorium Uji Mekanik, Laboratorium Uji Kelistrikan, Uji valve, Uji Permeabilitas Udara, dll.</p><br><br>\n\n\n\n<h5>Kebun Percobaan (Buncob)</h5><br><br>\n\n<img class="avatarCard" src="../assets/imgs/infras5.jpg" /><br><br>\n\n\n\n<p>Untuk menguji hasil riset dan formula yang diperoleh di laboratorium, PT Petrokimia memiliki kebun percobaan seluas 5 hektar yang dilengkapi dengan fasilitas laboratorium untuk tanah, tanaman dan kultur jaringan, rumah kaca, mini plant pupuk NPK, pabrik pupuk organik (Petroganik), pupuk hayati dan Petroseed (benih padi bersertifikat).</p><br><br> \n\n\n\n<p>Secara umum buncob berfungsi untuk :<br>\n\nTempat pengujian produk komersil, percontohan pemeliharaan tanaman & ternak, indikator lingkungan, penelitian dan pengembangan produk inovatif, media belajar dan studi wisata bagi pelajar, mahasiswa, petani, dan masyarakat umum, serta sarana pendidikan dan latihan. Di kebun percobaan ini setiap tahun diadakan Petro Agrifood Expo dalam rangka HUT PT Petrokimia Gresik.</p><br><br><br>\n\n<h5>Unit Utilitas Batubara</h5>\n\n<img class="avatarCard" src="../assets/imgs/infras5.jpg" /><br><br>\n\n\n\n<p>Memiliki kapasitas steam 2 x 150 ton/jam, serta tenaga listrik sebesar 25 MW. Unit ini dilengkapi dengan dermaga khusus batubara berkapasitas 10.000 DWT.</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\fas-infras\fas-infras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FasInfrasPage);
    return FasInfrasPage;
}());

//# sourceMappingURL=fas-infras.js.map

/***/ })

});
//# sourceMappingURL=76.js.map