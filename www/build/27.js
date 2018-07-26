webpackJsonp([27],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilPageModule = /** @class */ (function () {
    function ProfilPageModule() {
    }
    ProfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */]),
            ],
        })
    ], ProfilPageModule);
    return ProfilPageModule;
}());

//# sourceMappingURL=profil.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
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
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.OpenUrl5 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Profil Perusahaan PDF?',
            message: 'Are you sure want to open Profil Perusahaan PDF? if you sure, please click "Open" button.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Canceled');
                    }
                },
                {
                    text: 'Open',
                    handler: function () {
                        window.open("http://www.petrokimia-gresik.com/Resources/Docs/CP%20Petrokimia%20Gresik%20small.pdf", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilPage.prototype.OpenUrl01 = function () {
        var open = this.alertCtrl.create({
            title: 'Open Struktur Organisasi  PDF?',
            message: 'Are you sure want to open Profil Perusahaan PDF? if you sure, please click "Open" button.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Canceled');
                    }
                },
                {
                    text: 'Open',
                    handler: function () {
                        window.open("http://www.petrokimia-gresik.com/Resources/Docs/struktur%20organisasi_2018.pdf", '_system', 'location=yes');
                    }
                }
            ]
        });
        open.present();
    };
    ProfilPage.prototype.KegInovasi = function () {
        var inov = this.alertCtrl.create({
            title: 'Open Kegiatan Inovasi PDF?',
            message: 'Are you sure want to open Kegiatan Inovasi PDF? if you sure, please click "Open" button.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Canceled');
                    }
                },
                {
                    text: 'Open',
                    handler: function () {
                        window.open("http://www.petrokimia-gresik.com/Resources/Docs/FOTO%20KEGIATAN%20INOVASI.pdf", '_system', 'location=yes');
                    }
                }
            ]
        });
        inov.present();
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\profil\profil.html"*/' <ion-header class="headerHome">\n\n   <ion-navbar no-border-bottom color="header">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Profil</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n <ion-content padding="true" class="has-header" offset-50>\n\n        <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'MaknaLogoPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/makna.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Makna Logo</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'SejPerusahaanPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/pabrik.png" style="width: 50px;height: 50px;"></i>\n\n                    <p >Sejarah Perusahaan</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a (click)=\'OpenUrl5();\'>\n\n                    <i class="icon"><img src="../assets/imgs/profil/profil.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Profil Perusahaan PDF</p>\n\n                </a>\n\n            </div>    \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'VisiMisiPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/visimisi.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Visi Misi & Tata Nilai</p>\n\n                </a>\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                <a (click)=\'KegInovasi();\'>\n\n                    <i class="icon"><img src="../assets/imgs/profil/inovasi.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Inovasi</p>\n\n                </a>\n\n            </div> \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'FasInfrasPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/infrastruktur.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Fasilitas Infrastruktur</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'ManajemenPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/manajemen.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Manajemen</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'Lk3Page\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/lingkungan.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Lingkungan & K3</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'KomitAuditPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/audit.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Komite Audit</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a (click)=\'OpenUrl01();\'>\n\n                    <i class="icon"><img src="../assets/imgs/profil/struktur.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Struktur Organisasi</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'ProfPenunjangPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/penunjang.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Profesi Penunjang</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'KapProdukPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/kapasitasProduksi.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Kapasitas Produksi</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'SdmPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/sdm.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Sumber Daya Manusia</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'KomitManResikoPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Komite Manajemen Resiko</p>\n\n                </a>\n\n            </div>   \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'AnPerusahaanPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/anakPerusahaan1.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Anak Perusahaan & Usaha Patungan</p>\n\n                </a>\n\n            </div>  \n\n        </div>  \n\n\n\n        <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PengPrestasiPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/penghargaan.png" style="width: 50px;height: 50px;"></i>\n\n                    <p class="text-menuProfil">Penghargaan & Prestasi</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'MarsPetroPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/lirik.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Mars Petrokimia Gresik</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'VideoProfilPage\'">\n\n                    <i class="icon"><img src="../assets/imgs/profil/video1.png" style="width: 50px;height: 50px;"></i>\n\n                    <p>Video Profil Perusahaan</p>\n\n                </a>\n\n            </div>  \n\n        </div>\n\n</ion-content>'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ })

});
//# sourceMappingURL=27.js.map