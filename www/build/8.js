webpackJsonp([8],{

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TataKelolaPageModule", function() { return TataKelolaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tata_kelola__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TataKelolaPageModule = /** @class */ (function () {
    function TataKelolaPageModule() {
    }
    TataKelolaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tata_kelola__["a" /* TataKelolaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tata_kelola__["a" /* TataKelolaPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tata_kelola__["a" /* TataKelolaPage */]
            ]
        })
    ], TataKelolaPageModule);
    return TataKelolaPageModule;
}());

//# sourceMappingURL=tata-kelola.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TataKelolaPage; });
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
 * Generated class for the TataKelolaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TataKelolaPage = /** @class */ (function () {
    function TataKelolaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TataKelolaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TataKelolaPage');
    };
    TataKelolaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tata-kelola',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\tata-kelola\tata-kelola.html"*/'<!--\n\n  Generated template for the TataKelolaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>TataKelola</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="row item-text-wrap text-center" >\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PedomanWbsPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/music.png">\n\n                    <p>Pedoman WBS</p>\n\n                </a>\n\n            </div>\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PedomanGcgPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/graphic.png">\n\n                    <p class="text-menuProfil">Pedoman GCG</p>\n\n                </a>\n\n            </div>    \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'PedomanEtikPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/planning.png">\n\n                    <p>Pedoman Etika Kerja</p>\n\n                </a>\n\n            </div> \n\n  </div>\n\n  <div class="row item-text-wrap text-center">   \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'PedomanJasaPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/gearshift.png">\n\n                    <p>Pedoman Pengadaan Barang dan Jasa</p>\n\n                </a>\n\n            </div> \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PedomanKerjaPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/policy.png">\n\n                    <p>Pedoman Kerja Kebijakan Dekom dan Direksi</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'PedomanAuditPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/gearshift.png">\n\n                    <p>Pedoman Kerja Komite Audit</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n  <div class="row item-text-wrap text-center">\n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PedomanKomitePage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/planning.png">\n\n                    <p >Pedoman Kerja Komite Man.resiko</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4">\n\n                <a [navPush]="\'PedomanGratifikasiPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/policy.png">\n\n                    <p>Pedoman Pengendalian Greatifikasi</p>\n\n                </a>\n\n            </div>  \n\n            <div class="item col col-4 ">\n\n                <a [navPush]="\'TanyaGcgPage\'">\n\n                    <img style="width:50px; height: 50px;" src="../assets/imgs/planning.png">\n\n                    <p>Tanya Jawab GCG</p>\n\n                </a>\n\n            </div>  \n\n  </div>\n\n\n\n\n\n  <!-- <h3 class="search-query">\n\n    <span>Showing: </span>\n\n    <ion-badge class="query-tag"></ion-badge>\n\n    <span class="query-explanation"> concepts</span>\n\n  </h3>\n\n\n\n  <ion-card class="category-concept-card">\n\n    <ion-card-header>\n\n      <h2 class="category-title">Tanya Jawab</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p class="category-description">\n\n        Selengkapnya...\n\n      </p>\n\n      <ion-row>\n\n        <ion-col no-padding>\n\n          <ion-badge class="category-tag" ></ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\tata-kelola\tata-kelola.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TataKelolaPage);
    return TataKelolaPage;
}());

//# sourceMappingURL=tata-kelola.js.map

/***/ })

});
//# sourceMappingURL=8.js.map