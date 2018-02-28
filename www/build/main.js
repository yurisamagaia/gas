webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Preços" tabIcon="logo-usd"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contato" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #F2F2F2" text-center>\n  <img src="assets/imgs/logo.png" style="width: 80px; margin-top: 20px" alt="">\n  <h2 text-center style="color: #666">Welcome to my gas station</h2>\n  <p style="color: #777; line-height: 25px;">Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Viva Forevis aptent taciti sociosqu ad litora torquent. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.segment = "contato";
        this.form = {};
    }
    ContactPage.prototype.logForm = function () {
        console.log(this.form);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contato\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #F2F2F2" text-center>\n  <div padding>\n    <ion-segment [(ngModel)]="segment">\n      <ion-segment-button value="contato">\n        Entre em contato\n      </ion-segment-button>\n      <ion-segment-button value="faca_parte">\n        Nos ajude a melhorar\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="segment">\n    <ion-list *ngSwitchCase="\'contato\'">\n      <p style="color: #777; line-height: 25px;">Sugestão, dúvida, reclamação, não importa o motivo, faremos sempre o possível para atende-lo.</p>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'faca_parte\'">\n      <p style="color: #777; line-height: 25px;">Estaremos de braços abertos e ficaremos maravilhados se você tiver alguma idéia para contribuir no crescimento do Meu Combustível. Atenderemos com o maior prazer e com certeza agradeceremos muito.</p>\n    </ion-list>\n    <div>\n      <form (ngSubmit)="logForm()">\n        <ion-item style="background-color: #F2F2F2">\n          <ion-label floating>Nome</ion-label>\n          <ion-input type="text" [(ngModel)]="form.nome" name="nome"></ion-input>\n        </ion-item>\n        <ion-item style="background-color: #F2F2F2">\n          <ion-label floating>E-mail</ion-label>\n          <ion-input type="text" [(ngModel)]="form.email" name="email"></ion-input>\n        </ion-item>\n        <ion-item style="background-color: #F2F2F2">\n          <ion-label floating>Telefone</ion-label>\n          <ion-input type="text" [(ngModel)]="form.telefone" name="telefone"></ion-input>\n        </ion-item>\n        <ion-item style="background-color: #F2F2F2">\n          <ion-label floating *ngSwitchCase="\'contato\'">Mensagem</ion-label>\n          <ion-label floating *ngSwitchCase="\'faca_parte\'">Descreva a idéia</ion-label>\n          <ion-textarea [(ngModel)]="form.mensagem" name="mensagem"></ion-textarea>\n        </ion-item>\n        <button ion-button type="submit" block outline margin-top color="dark" style="height: 50px">Enviar</button>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_search__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_search_search__["a" /* SearchPage */], { item: this.state });
    };
    HomePage.prototype.isInvalid = function () {
        if (this.state == "" || this.state == null) {
            return true;
        }
        else {
            return false;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/pages/home/home.html"*/'<ion-content padding style="background-color: #F2F2F2" text-center>\n  <img src="assets/imgs/logo.png" style="width: 150px; margin-top: 20px" alt="">\n  <h2 text-center style="color: #666">Welcome to my gas station</h2>\n  <p style="color: #777">Selecione a região mais próxima para filtrar o valor dos combustíveis</p>\n  <ion-item no-lines style="margin-top: 30px;">\n    <ion-label>Região</ion-label>\n    <ion-select [(ngModel)]="state">\n      <ion-option value="balneario_camboriu">Balneario Camboriu</ion-option>\n      <ion-option value="biguacu">Biguaçu</ion-option>\n      <ion-option value="f">Blumenau</ion-option>\n    </ion-select>\n  </ion-item>\n  <button ion-button color="dark" outline block style="margin-top: 30px; height: 50px" (click)="goSearch()" [disabled]="isInvalid()">Buscar</button>\n\n  <!--<ion-item>\n    <ion-label>Combustível</ion-label>\n    <ion-select [(ngModel)]="state">\n      <ion-option value="f">Gasolina</ion-option>\n      <ion-option value="m">Etanol</ion-option>\n      <ion-option value="f">Diesel</ion-option>\n      <ion-option value="f">Diesel s10</ion-option>\n      <ion-option value="f">GNV</ion-option>\n    </ion-select>\n  </ion-item>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segment = "gasolina";
        this.pesquisa_avancada = false;
        this.state = navParams.get('item');
        console.log(this.state);
    }
    SearchPage.prototype.pesquisaAvancada = function () {
        if (this.pesquisa_avancada == false) {
            this.pesquisa_avancada = true;
        }
        else {
            this.pesquisa_avancada = false;
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Valores\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #F2F2F2" >\n  <div margin-bottom>\n    <ion-segment [(ngModel)]="segment">\n      <ion-segment-button value="gasolina">\n        Gasolina\n      </ion-segment-button>\n      <ion-segment-button value="etanol">\n        Etanol\n      </ion-segment-button>\n      <ion-segment-button value="diesel">\n        Diesel\n      </ion-segment-button>\n    </ion-segment>\n    <ion-segment [(ngModel)]="segment" margin-top *ngIf="pesquisa_avancada">\n      <ion-segment-button value="diesels10">\n        Diesel s10\n      </ion-segment-button>\n      <ion-segment-button value="gnv">\n        GNV\n      </ion-segment-button>\n      <ion-segment-button value="glp">\n        GLP\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <button ion-button color="primary" clear block icon-left style="height: 50px" (click)="pesquisaAvancada()" *ngIf="!pesquisa_avancada"><ion-icon name="add"></ion-icon> Mais combustíveis</button>\n\n  <div [ngSwitch]="segment">\n    <ion-list *ngSwitchCase="\'gasolina\'">\n      <ion-item-group>\n        <ion-item-divider sticky style="background-color: #FAFAFA !important">\n          <ion-label>\n            Balneário Camboriú\n            <small style="color: green">Menor valor</small>\n          </ion-label>\n        </ion-item-divider>\n        <ion-item-sliding>\n          <button ion-item>\n            <h3>Valor médio</h3>\n            <p>R$ 3,379</p>\n          </button>\n        </ion-item-sliding>\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider sticky style="background-color: #FAFAFA !important">\n          <ion-label>\n            Biguaçú\n          </ion-label> \n        </ion-item-divider>\n        <ion-item-sliding>\n          <button ion-item>\n            <h3>Valor médio</h3>\n            <p>R$ 3,379</p>\n          </button>\n        </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'etanol\'">\n      <ion-item-group>\n        <ion-item-divider sticky style="background-color: #FAFAFA !important">\n          <ion-label>\n            Balneário Camboriú\n            <small style="color: green">Menor valor</small>\n          </ion-label>\n        </ion-item-divider>\n        <ion-item-sliding>\n          <button ion-item>\n            <h3>Valor médio</h3>\n            <p>R$ 3,376</p>\n          </button>\n        </ion-item-sliding>\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider sticky style="background-color: #FAFAFA !important">\n          <ion-label>\n            Biguaçú\n          </ion-label>\n        </ion-item-divider>\n        <ion-item-sliding>\n          <button ion-item>\n            <h3>Valor médio</h3>\n            <p>R$ 3,376</p>\n          </button>\n        </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = (function () {
    function MapPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MapPage.prototype.loadMap = function (lat, long) {
        var latLng = new google.maps.LatLng(lat, long);
        var mapEle = this.mapElement.nativeElement;
        this.map = new google.maps.Map(mapEle, {
            zoom: 16,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: false,
            scrollwheel: false
        });
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map
        });
        marker.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/yurialldoctors/Sites/app/gas/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mapa\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map" style="width: 100%; height: 400px; border-bottom: 1px solid #cdcdcd"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/yurialldoctors/Sites/app/gas/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object])
    ], MapPage);
    return MapPage;
    var _a, _b;
}());

//# sourceMappingURL=map.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map