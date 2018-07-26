webpackJsonp([7],{

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TautanPageModule", function() { return TautanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tautan__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TautanPageModule = /** @class */ (function () {
    function TautanPageModule() {
    }
    TautanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tautan__["a" /* TautanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tautan__["a" /* TautanPage */]),
            ],
        })
    ], TautanPageModule);
    return TautanPageModule;
}());

//# sourceMappingURL=tautan.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TautanPage; });
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


//import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the TautanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TautanPage = /** @class */ (function () {
    function TautanPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    TautanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TautanPage');
    };
    TautanPage.prototype.OpenUrl1 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link E-Procurement?',
            message: 'Are you sure want to visit E-Procurement website? if you sure, please click "Open" button.',
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
                        window.open("http://epro.petrokimia-gresik.com/site/login", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl2 = function () {
        var toast = this.toastCtrl.create({
            message: 'Recruitment is does not exist',
            duration: 3000,
        });
        toast.present();
    };
    TautanPage.prototype.OpenUrl3 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link ITS Surabaya?',
            message: 'Are you sure want to visit ITS Surabaya website? if you sure, please click "Open" button.',
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
                        window.open("https://www.its.ac.id/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl4 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link Kemeneg BUMN?',
            message: 'Are you sure want to visit Kemeneg BUMN website? if you sure, please click "Open" button.',
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
                        window.open("http://www.bumn.go.id/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl5 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link Pupuk Indonesia?',
            message: 'Are you sure want to visit Pupuk Indonesia website? if you sure, please click "Open" button.',
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
                        window.open("http://pupuk-indonesia.com/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl6 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link APPI?',
            message: 'Are you sure want to visit APPI website? if you sure, please click "Open" button.',
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
                        window.open("http://www.appi.or.id/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl7 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link KEMENTAN?',
            message: 'Are you sure want to visit KEMENTAN website? if you sure, please click "Open" button.',
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
                        window.open("http://www.pertanian.go.id/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl8 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link Kabupaten Gresik?',
            message: 'Are you sure want to visit Kabupaten Gresik website? if you sure, please click "Open" button.',
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
                        window.open("http://www.gresik.go.id/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl9 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link Majalah GEMA?',
            message: 'Are you sure want to visit Majalah GEMA website? if you sure, please click "Open" button.',
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
                        window.open("http://www.petrokimia-gresik.com/Gema/nologin/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl10 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link Tabloid Sahabat Petani?',
            message: 'Are you sure want to visit Tabloid Sahabat Petani website? if you sure, please click "Open" button.',
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
                        window.open("http://tabloidsahabatpetani.com/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl11 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link RSPG?',
            message: 'Are you sure want to visit RSPG website? if you sure, please click "Open" button.',
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
                        window.open("http://www.rspetrokimiagresik.com/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl12 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link Web Mail?',
            message: 'Are you sure want to visit Web Mail website? if you sure, please click "Open" button.',
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
                        window.open("https://webmail.petrokimia-gresik.com/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl13 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link HIMPEN?',
            message: 'Are you sure want to visit HIMPEN website? if you sure, please click "Open" button.',
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
                        window.open("http://www.petrokimia-gresik.com/himpen/menu_himpen.htm", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage.prototype.OpenUrl14 = function () {
        var confirm = this.alertCtrl.create({
            title: 'Open Link LAPOR?',
            message: 'Are you sure want to visit LAPOR website? if you sure, please click "Open" button.',
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
                        window.open("https://www.lapor.go.id/", '_system', 'location=yes');
                    }
                }
            ]
        });
        confirm.present();
    };
    TautanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tautan',template:/*ion-inline-start:"E:\F\PORTAL\petron\src\pages\tautan\tautan.html"*/'<!--\n\n  Generated template for the TautanPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar no-border-bottom color="header">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n    <ion-title>Tautan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-list>\n\n	  <ion-item>\n\n	    E-Procurement\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl1();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    E-Recruitment\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl2();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    ITS Surabya\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl3();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    Kemeneg BUMN\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl4();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    Pupuk Indonesia\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl5();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    APPI\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl6();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    KEMENTAN\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl7();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    Kabupaten Gresik\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl8();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    Majalah GEMA\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl9();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    Tabloid Sahabat Petani\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl10();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    RSPG\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl11();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    Web Mail\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl12();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    HIMPEN\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl13();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n\n\n	<ion-list>\n\n	  <ion-item>\n\n	    LAPOR\n\n	    <button ion-button color="secondary" round outline item-end icon-left (click)=\'OpenUrl14();\'>\n\n	      <ion-icon name="ios-browsers"></ion-icon>\n\n	       Open Link\n\n	    </button>\n\n	  </ion-item>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\F\PORTAL\petron\src\pages\tautan\tautan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], TautanPage);
    return TautanPage;
}());

//# sourceMappingURL=tautan.js.map

/***/ })

});
//# sourceMappingURL=7.js.map