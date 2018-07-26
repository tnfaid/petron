webpackJsonp([71],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //api
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.slideData = [{ image: "../assets/imgs/sni17_con.jpg" }, { image: "../assets/imgs/proper 17_con.jpg" }];
        this.slideLength = false;
        this.beritaku = this.httpClient.get('http://127.0.0.1/rest-ci-old/index.php/News');
        this.beritaku
            .subscribe(function (data) {
            console.log('my data: ', data);
        });
    }
    HomePage.prototype.openDetails = function (berita) {
        this.navCtrl.push('BeritaDetailPage', { berita: this.beritaku });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\home\home.html"*/'<ion-header class="headerHome">\n\n  <ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n\n\n		<ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()"  color="textHeader" >\n\n	      <ion-segment-button value="semua">\n\n	        Semua\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="populer">\n\n	        Populer\n\n	      </ion-segment-button>\n\n	      <ion-segment-button value="terbaru">\n\n	        Terbaru\n\n	      </ion-segment-button>\n\n	    </ion-segment>\n\n\n\n	    <ion-buttons end>\n\n	      <button ion-button icon-only (click)="presentFilter()">\n\n	        <ion-icon ios="ios-more" md="md-more"></ion-icon>\n\n	      </button>\n\n	    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top color="header">\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="updateSchedule()"\n\n                   placeholder="Search">\n\n    </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding="true" class="has-header" >\n\n	<!--============================= IMAGES SLIDE ========================================================= -->\n\n    <ion-slides autoplay="5000" loop="true" speed="3000" style="width:100%;height:200px;" class="slideImage">\n\n	    <ion-slide *ngFor="let slide of slideData">\n\n	      <img src="{{slide.image}}" />\n\n	    </ion-slide>\n\n	</ion-slides>\n\n	<!--============================= LIST CARDS BERITA ========================================================= -->\n\n  <ion-list>\n\n    <button ion-item *ngFor="let berita of beritaku | async" (click)="openDetails(berita)">\n\n      {{berita.NewsTitle}}\n\n    </button>\n\n  </ion-list>\n\n	<!-- <ion-card *ngFor="let card of cards1" class="cardHome">\n\n\n\n      <ion-item >\n\n      	<ion-avatar item-left>\n\n          <img class="avatarCard" src="../assets/imgs/proper 17_con.jpg" />\n\n        </ion-avatar>\n\n\n\n        <p class="textDesc text-wrap">PG Kucurkan Bantuan Untuk Korban Banjir Di Lamongan</p>\n\n\n\n         <ion-row>\n\n        <ion-col right text-right>\n\n          <ion-note class="cardLink">\n\n            Selengkapnya ...\n\n          </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      </ion-item>\n\n \n\n     \n\n \n\n    </ion-card>\n\n    <ion-card *ngFor="let card of cards2"  class="cardHome">\n\n\n\n      <ion-item >\n\n      	<ion-avatar item-left>\n\n          <img class="avatarCard" src="../assets/imgs/sni17_con.jpg" />\n\n        </ion-avatar>\n\n\n\n        <p class="textDesc text-wrap">PG Kucurkan Bantuan Untuk Korban Banjir Di Lamongan</p>\n\n\n\n        <ion-row>\n\n        <ion-col right text-right>\n\n          <ion-note class="cardLink">\n\n            Selengkapnya ...\n\n          </ion-note>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      </ion-item>\n\n \n\n    </ion-card> -->\n\n    <!-- <ion-list>\n\n      <ion-item *ngFor="let n of news">\n\n        <ion-avatar item-left>\n\n          <img src="{{n.gambar}}">\n\n        </ion-avatar>\n\n        <h2>{{n.NewsTitle}}</h2>\n\n        <p>{{n.NewsHTML}}</p>\n\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list> -->\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=71.js.map