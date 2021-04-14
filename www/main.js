(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/JRT":
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_game_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./game.component.html */ "WWYX");
/* harmony import */ var _game_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.component.scss */ "Xa7A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GameComponent = class GameComponent {
    constructor() { }
    ngOnInit() {
    }
};
GameComponent.ctorParameters = () => [];
GameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-game',
        template: _raw_loader_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_game_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GameComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ottopiskonen/repos/terppiofficial/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "aSPh");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "mbft");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.spinner1 = 80;
        this.spinner2 = 60;
        this.spinner3 = 70;
        this.liikuntaScores = `${this.spinner1} / 100`;
        this.ruokaScores = `${this.spinner2} / 100`;
        this.nukkumisScore = `${this.spinner3} / 100`;
    }
    ngOnInit() {
    }
    changeSpinnerColor() {
        let spinner = document.getElementById('spinneri1');
        //console.log(spinner);
        let color = document.getElementsByClassName('ng-star-inserted');
        //console.log("color: " + color[1]);
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "2zol":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Tämä on Stat Page</h1>\n\n<div class=\"chart-wrapper\">\n    <canvas baseChart  \n        [datasets]=\"lineChartData\" \n        [labels]=\"lineChartLabels\" \n        [options]=\"lineChartOptions\"\n        [colors]=\"lineChartColors\" \n        [legend]=\"lineChartLegend\" \n        [chartType]=\"lineChartType\" \n        [plugins]=\"lineChartPlugins\">\n    </canvas>\n</div>\n<button (click)=\"countSteps()\">Laske Askeleet</button>\n<button (click)=\"stop()\">Lopeta</button>\n<button (click)=\"getSteppes()\">Hae Healthkit askeleet</button>\n<div>\n    Askeleet : {{StepcounterService.steps.numberOfSteps}}\n    Kaikki tieto: {{StepcounterService.steps | json}}\n</div>\n\n<table>\n    <tr>Kolmen päivän askeleet</tr>\n    <tr><th>Toissapäivänä</th><th>Eillen</th><th>Tänään</th></tr>\n    <tr *ngFor=\"let steps of HealthkitService.object;\">\n        <td>{{ steps[0] }}</td>\n        <td>{{ steps[1] }}</td>\n        <td>{{ steps[2] }}</td>\n     </tr>\n</table>\n\n<button (click)=\"addPhotoToGallery()\">Click Me for Photo</button>\n<li *ngFor=\"let photo of photoService.photos;\">\n    <img src=\"{{photo.webviewPath}}\">\n</li>");

/***/ }),

/***/ "7Ufg":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-nav.component.html */ "guXm");
/* harmony import */ var _main_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-nav.component.scss */ "tbDU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
// install with: ng add @angular/material





let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset);
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
];
MainNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'main-nav',
        template: _raw_loader_main_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainNavComponent);

//export class MainNavComponent {
//isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//.pipe(
//map(result => result.matches),
//shareReplay()
// );
//constructor(private breakpointObserver: BreakpointObserver) {}
//}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EuZS":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom-nav/bottom-nav.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"BottomNav\">\n    <mat-icon class=\"material-icons\" routerLink=\"/home\">home</mat-icon>\n    <mat-icon class=\"material-icons\" routerLink=\"/stats\">bar_chart</mat-icon>\n    <mat-icon class=\"material-icons\" routerLink=\"/game\">games</mat-icon>\n</mat-toolbar>");

/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'terppi';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "V1J6":
/*!************************************************!*\
  !*** ./src/app/pages/stats/stats.component.ts ***!
  \************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stats.component.html */ "2zol");
/* harmony import */ var _stats_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats.component.scss */ "x4SB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Stepcounter_stepcounter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Stepcounter/stepcounter.service */ "eu9t");
/* harmony import */ var _services_Healthkit_healthkit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Healthkit/healthkit.service */ "fmiJ");
/* harmony import */ var _services_Photo_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Photo/photo.service */ "vyil");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");








let StatsComponent = class StatsComponent {
    constructor(StepcounterService, HealthkitService, photoService, ChartsModule) {
        this.StepcounterService = StepcounterService;
        this.HealthkitService = HealthkitService;
        this.photoService = photoService;
        this.ChartsModule = ChartsModule;
        this.lineChartData = [
            { data: [1000, 800, 2000], label: 'Testi Askeleet' },
            { data: this.HealthkitService.object, label: 'Askeleet' },
        ];
        this.lineChartLabels = ['Toissapäivänä', 'Eillen', 'Tänään'];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: 'rgba(54,54,54)',
                backgroundColor: 'rgba(0,255,0,0.28)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved();
            yield this.HealthkitService.saveData();
        });
    }
    getSteppes() {
        console.log("Haetaan askeleet..");
        //this.HealthkitService.getSteppes();
        //this.HealthkitService.saveData();
        //console.log(this.HealthkitService.object[0]);
        //this.numeroita();
    }
    countSteps() {
        console.log("Counting Starts..");
        this.StepcounterService.readSteps();
    }
    stop() {
        console.log("Counting Ends");
        this.StepcounterService.stopSteps();
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
StatsComponent.ctorParameters = () => [
    { type: _services_Stepcounter_stepcounter_service__WEBPACK_IMPORTED_MODULE_4__["StepcounterService"] },
    { type: _services_Healthkit_healthkit_service__WEBPACK_IMPORTED_MODULE_5__["HealthkitService"] },
    { type: _services_Photo_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"] },
    { type: ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"] }
];
StatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stats',
        template: _raw_loader_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stats_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatsComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main-nav>\n  <router-outlet></router-outlet>\n  <app-bottom-nav></app-bottom-nav>\n</main-nav>\n\n\n");

/***/ }),

/***/ "WWYX":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Tämä on Game Page</h1>\n\n");

/***/ }),

/***/ "Xa7A":
/*!************************************************!*\
  !*** ./src/app/pages/game/game.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  width: 100%;\n  position: fixed;\n  z-index: 2000;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMjAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "7Ufg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bottom-nav/bottom-nav.component */ "sgwB");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/game/game.component */ "/JRT");
/* harmony import */ var _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/stats/stats.component */ "V1J6");
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./materials/materials.module */ "bZ3k");
/* harmony import */ var _ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/pedometer/ngx */ "7cmQ");
/* harmony import */ var _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/health/ngx */ "e7Ar");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-charts */ "LPYB");























// Jos lisäätte materiaaleja tehkää se materials moduleen kiitoos :)
// pitää joskus siirtää tästä ne materiaalit kans sinne mut oon liia laiska tekee atm
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__["MainNavComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_16__["BottomNavComponent"],
            _pages_game_game_component__WEBPACK_IMPORTED_MODULE_17__["GameComponent"],
            _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_18__["StatsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
                { path: 'stats', component: _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_18__["StatsComponent"] },
                { path: 'game', component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_17__["GameComponent"] },
                { path: '', redirectTo: 'home', pathMatch: 'full' }
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_19__["MaterialsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"],
        ],
        providers: [_ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_20__["Pedometer"], _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_21__["Health"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aSPh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"home-screen\">\n    <div class=\"home-screen-scores\">\n        <div class=\"home-screen-text-wrapper\">\n            <div class=\"mat-display-1\">Hei User</div>\n        </div>\n    </div>\n\n    <div class=\"home-screen-spinners\">\n        <div class=\"home-screen-spinners-wrapper\">\n            <mat-progress-spinner id=\"spinneri1\" color=\"warn\"\n            [value]=\"spinner1\" \n            diameter=\"200\" \n            strokeWidth=\"12\"\n            style=\"position:absolute; top:10px;\"\n            >\n            </mat-progress-spinner>\n            <mat-progress-spinner id=\"spinneri2\" color=\"accent\"\n            [value]=\"spinner2\" \n            diameter=\"170\" \n            strokeWidth=\"12\"\n            style=\"position:absolute; top:25px;\"\n            ></mat-progress-spinner>\n            <mat-progress-spinner id=\"spinneri3\"\n            [value]=\"spinner3\" \n            diameter=\"140\" \n            strokeWidth=\"12\"\n            style=\"position:absolute; top:40px;\"\n            ></mat-progress-spinner>\n            {{changeSpinnerColor()}}  \n        </div>\n    </div>\n    \n    <div class=\"spinner-scores-wrapper\">\n\n        <div class=\"liikuta-scores\">\n            <mat-accordion>\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Liikunta\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Jotain tekstiä tähän?\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Tänne lisätiedot esim</p>\n                    <span>Päivän tavoite: <p [innerHTML]='liikuntaScores' style=\"display: inline\"></p></span>\n                </mat-expansion-panel>\n            </mat-accordion> \n        </div>\n\n     <br>\n\n        <div class=\"ruokailu-scores\">\n            <mat-accordion >\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Ruokailu\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Jotain tekstiä tähän?\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Tänne lisätiedot esim</p>\n                    <span>Päivän tavoite: <p [innerHTML]='ruokaScores' style=\"display: inline\"></p></span>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n     <br>\n\n        <div class=\"nukkuminen-scores\">\n            <mat-accordion >\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Nukkuminen\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Jotain tekstiä tähän?\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Tänne lisätiedot esim</p>\n                    <span>Päivän tavoite: <p [innerHTML]='nukkumisScore' style=\"display: inline\"></p></span>\n                </mat-expansion-panel>\n            </mat-accordion>    \n        </div>\n            \n    </div>\n\n</div>\n\n\n\n\n<!--\n    Vanhaa varmuudeksi säästössä\n\n    <div class=\"mat-h1\">Liikunta\n            <div class=\"liikunta-scores\">\n                <span [innerHTML]='liikuntaScores' ></span>\n            </div>\n    </div>\n\n    <div class=\"mat-h1\">Ruokailu\n            <div class=\"ruokailu-scores\">78/100</div>\n    </div>\n\n        \n    <div class=\"mat-h1\">Nukkuminen\n            <div class=\"nukkuminen-scores\">43/100</div>\n    </div>\n\n    Vanha tapa, tein mat-cardilla <-- säästin jos todetaankin paremmaksi\n\n    <mat-card class=\"home-Card\">\n    <mat-card-header>\n        <mat-card-title>Hei User</mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <div style=\"position:relative; width:100%; height:220px\">\n        <mat-progress-spinner id=\"#spinneri1\"\n        [value]=\"spinner1\" \n        diameter=\"200\" \n        strokeWidth=\"12\"\n        style=\"position:absolute; top:10px; left:45px\"\n        >\n        </mat-progress-spinner>\n        <mat-progress-spinner id=\"#spinneri2\"\n        [value]=\"spinner2\" \n        diameter=\"170\" \n        strokeWidth=\"12\"\n        style=\"position:absolute; top:25px; left:60px\"\n        ></mat-progress-spinner>\n        <mat-progress-spinner id=\"#spinneri3\"\n        [value]=\"spinner3\" \n        diameter=\"140\" \n        strokeWidth=\"12\"\n        style=\"position:absolute; top:40px; left:75px\"\n        ></mat-progress-spinner>  \n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"mat-title\">Liikunta:</div>\n    <div class=\"mat-title\">Ruokailu:</div>\n    <div class=\"mat-title\">Nukkuminen:</div>\n\n</mat-card>\n\n-->\n\n\n\n<!--\n\n    Voi ehkä käyttää jossain?\n\n<div class=\"week-Prog\">\n    <button mat-mini-fab>Ma</button>\n    <button mat-mini-fab>Ti</button>\n    <button mat-mini-fab>Ke</button>\n    <button mat-mini-fab>To</button>\n    <button mat-mini-fab>Pe</button>\n    <button mat-mini-fab>La</button>\n    <button mat-mini-fab>Su</button>\n</div>\n-->\n\n\n<!--  \n\n<div class=\"homePage\" id=\"wrappingDiv\">\n    <div class=\"terppiMid\">\n        <h1 id=\"homeTerppi\">Terppi</h1>\n    </div>       \n</div>\n\n    Keksikää miten käyttää tätä\n\n    <mat-progress-spinner class=\"spinneriWrapperi\" id=\"#spinneri1\"\n        [value]=\"spinner1\" \n        diameter=\"350\" \n        strokeWidth=\"12\"\n        style=\"top:0px; left:-106px\" ylä\n        >\n        </mat-progress-spinner>\n        <mat-progress-spinner class=\"spinneriWrapperi\" id=\"#spinneri2\"\n        [value]=\"spinner2\" \n        diameter=\"320\" \n        strokeWidth=\"10\"\n        style=\"top:-335px; left:-92px\"\n        ></mat-progress-spinner> \n\nAlkuperäiset style arvot\n        ylä:\nposition:absolute; top:0px; left:0px\n        ala:\nposition:absolute; top:15px; left:15px\n\n    \n    -->\n");

/***/ }),

/***/ "bZ3k":
/*!***********************************************!*\
  !*** ./src/app/materials/materials.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_progress_spinner___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner/ */ "Xa2L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");








let MaterialsModule = class MaterialsModule {
};
MaterialsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [],
        exports: [
            _angular_material_progress_spinner___WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"]
        ]
    })
], MaterialsModule);



/***/ }),

/***/ "eu9t":
/*!*************************************************************!*\
  !*** ./src/app/services/Stepcounter/stepcounter.service.ts ***!
  \*************************************************************/
/*! exports provided: StepcounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepcounterService", function() { return StepcounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/pedometer/ngx */ "7cmQ");




let StepcounterService = class StepcounterService {
    constructor(pedometer, ngZone) {
        this.pedometer = pedometer;
        this.ngZone = ngZone;
        this.steps = [];
        this.readSteps();
        setInterval(() => {
            console.log('read in a sec');
        }, 1000);
    }
    readSteps() {
        this.pedometer.startPedometerUpdates()
            .subscribe((data) => {
            this.ngZone.run(() => this.steps.push(data));
        });
    }
    stopSteps() {
        this.pedometer.stopPedometerUpdates();
    }
};
StepcounterService.ctorParameters = () => [
    { type: _ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_2__["Pedometer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
StepcounterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StepcounterService);



/***/ }),

/***/ "fmiJ":
/*!*********************************************************!*\
  !*** ./src/app/services/Healthkit/healthkit.service.ts ***!
  \*********************************************************/
/*! exports provided: HealthkitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthkitService", function() { return HealthkitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/health/ngx */ "e7Ar");



let HealthkitService = class HealthkitService {
    constructor(health) {
        this.health = health;
        this.steppes = [];
        this.object = [];
    }
    getSteppes() {
        this.health.requestAuthorization([
            'distance',
            {
                read: ['steps']
            }
        ]);
    }
    saveData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.object.length) {
                this.health.queryAggregated({
                    startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000),
                    endDate: new Date(),
                    dataType: 'steps',
                    bucket: 'day'
                }).then(HealthData => this.steppes.push(HealthData));
                for (let key of Object.keys(this.steppes)) {
                    for (let value of this.steppes[key]) {
                        this.object[key] = this.object[key] || [];
                        this.object[key].push(value['value']);
                    }
                }
            }
        });
    }
};
HealthkitService.ctorParameters = () => [
    { type: _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_2__["Health"] }
];
HealthkitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HealthkitService);



/***/ }),

/***/ "guXm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav \n      #drawer \n      class=\"sidenav\" \n      [ngClass]=\"{hidden: (isHandset | async)!.matches}\"\n      fixedInViewport=\"false\"\n      [attr.role]=\"isHandset ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\n      [opened]=\"!(isHandset | async)!.matches\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <!-- <a mat-list-item href=\"#\" routerLink=\"\">Link 1</a> -->\n      <a mat-list-item >Tavoite</a>\n      <a mat-list-item >Tips & Tricks</a>\n      <a mat-list-item >Harrastukset</a>\n      <a mat-list-item >Asetukset</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar class=\"mat-toolbar\">\n      <span class=\"spacer\"></span>\n      <span class=\"terppi\">Terppi</span>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"(isHandset | async)!.matches\">\n        <mat-icon class=\"mat-icon\" aria-label=\"Side nav toggle icon\">menu</mat-icon> <!-- to use different icons just replace \"menu\". Check backupterppi.txt  -Roni personal memo -->\n      </button>\n      <!-- <span class=\"terppi\">Terppi</span> -->\n    </mat-toolbar>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mbft":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homePage#wrappingDiv {\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n  text-align: center;\n  max-width: 42%;\n  border-radius: 12px;\n  height: 60px;\n}\n.homePage#wrappingDiv .terppiMid {\n  width: 100%;\n  height: 100%;\n  display: table;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.homePage#wrappingDiv h1 {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 370;\n  font-size: xx-large;\n  margin-bottom: 0;\n  padding-top: 10px;\n}\n.home-screen {\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: auto;\n  height: 87%;\n  overflow: scroll;\n  overflow-x: hidden;\n  background-color: #1f1f1f;\n}\n.home-screen-scores {\n  text-align: center;\n  margin-top: 2rem;\n}\n.home-screen-text-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: 4rem;\n  max-width: 40%;\n  padding-top: 1.5rem;\n  color: seashell;\n  margin-bottom: 42px;\n  border-radius: 12px;\n}\n.home-screen-spinners {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 42px;\n}\n.home-screen-spinners .home-screen-spinners-wrapper {\n  position: relative;\n  width: 100%;\n  height: 220px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: center;\n}\n/*\nmat-progress-spinner {\n\n    ::ng-deep circle {\n        stroke: #33dd82;\n    }\n}\n*/\n:host ::ng-deep #spinneri3 circle {\n  stroke: #0CC20C;\n}\n:host ::ng-deep #spinneri2 circle {\n  stroke: #0CC20C;\n}\n:host ::ng-deep #spinneri1 circle {\n  stroke: #0CC20C;\n}\n.spinner-scores-wrapper {\n  color: seashell;\n  text-align: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n.nukkuminen-scores {\n  margin-bottom: 67px;\n}\n.home-Card {\n  max-width: 300px;\n  min-height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 4rem;\n}\n.mat-card > :first-child {\n  justify-content: center;\n}\n.week-Prog {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n@media (min-width: 760px) {\n  .home-Card {\n    max-width: 600px;\n    min-height: 300px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 4rem;\n  }\n}\n@media (max-width: 760px) {\n  .home-screen-text-wrapper {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHSTtFQUNJLHdJQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQU1BO0VBSUksV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQWtCLGtCQUFBO0VBRWxCLHlCQUFBO0FBTko7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVZKO0FBY0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFYUjtBQWVBOzs7Ozs7O0NBQUE7QUFTQTtFQUNJLGVBQUE7QUFiSjtBQWdCQTtFQUNJLGVBQUE7QUFiSjtBQWdCQTtFQUNJLGVBQUE7QUFiSjtBQWtCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFmSjtBQWtCQTtFQUNJLG1CQUFBO0FBZko7QUFtQkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBaEJKO0FBbUJBO0VBQ0ksdUJBQUE7QUFoQko7QUFvQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBakJKO0FBc0JBO0VBRUk7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBcEJOO0FBQ0Y7QUF5QkE7RUFDSTtJQUNJLGVBQUE7RUF2Qk47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxsIGhlcmUgb2xkXHJcbi5ob21lUGFnZSN3cmFwcGluZ0RpdiB7XHJcbiAgICAvLyB0b2RvIGxpc8Okw6QgQG1lZGlhdFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDQyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gICAgLnRlcnBwaU1pZCAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH07XHJcbiAgICBoMSAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDM3MDtcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbi5ob21lLXNjcmVlbiB7XHJcbiAgICAvL3dpZHRoOiAxMDAgJTtcclxuICAgIC8vbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvL21hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA4NyU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgIC8vanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpXHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcblxyXG4uaG9tZS1zY3JlZW4tc2NvcmVzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBcclxufVxyXG5cclxuLmhvbWUtc2NyZWVuLXRleHQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjpzZWFncmVlbjtcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxufVxyXG5cclxuLmhvbWUtc2NyZWVuLXNwaW5uZXJzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxuXHJcbiAgICAuaG9tZS1zY3JlZW4tc3Bpbm5lcnMtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gICAgICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgICAgIGhlaWdodDoyMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi8qXHJcbm1hdC1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgIFxyXG4gICAgOjpuZy1kZWVwIGNpcmNsZSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMzNkZDgyO1xyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI3NwaW5uZXJpMyBjaXJjbGV7ICAgXHJcbiAgICBzdHJva2U6ICMwQ0MyMEM7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAjc3Bpbm5lcmkyIGNpcmNsZXsgICBcclxuICAgIHN0cm9rZTogIzBDQzIwQztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICNzcGlubmVyaTEgY2lyY2xleyAgIFxyXG4gICAgc3Ryb2tlOiAjMENDMjBDO1xyXG59XHJcblxyXG5cclxuXHJcbi5zcGlubmVyLXNjb3Jlcy13cmFwcGVye1xyXG4gICAgY29sb3I6IHNlYXNoZWxsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubnVra3VtaW5lbi1zY29yZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2N3B4O1xyXG59XHJcblxyXG4vL29sZFxyXG4uaG9tZS1DYXJke1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcbi8vb2xkXHJcbi5tYXQtY2FyZD46Zmlyc3QtY2hpbGQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vb2xkP1xyXG4ud2Vlay1Qcm9ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuXHJcbi8vIHRvZG8gc8Okw6Rkw6Qga2Fpa2tpIHRvaW1pbWFhbiBpc29pbW1pbGxhIG7DpHl0w7ZpbGzDpFxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjBweCl7XHJcbiAgICAvLyBvbGRcclxuICAgIC5ob21lLUNhcmR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjBweCl7XHJcbiAgICAuaG9tZS1zY3JlZW4tdGV4dC13cmFwcGVye1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "sgwB":
/*!****************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.ts ***!
  \****************************************************/
/*! exports provided: BottomNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavComponent", function() { return BottomNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bottom_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bottom-nav.component.html */ "EuZS");
/* harmony import */ var _bottom_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-nav.component.scss */ "ty8B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BottomNavComponent = class BottomNavComponent {
    constructor() { }
    ngOnInit() {
    }
};
BottomNavComponent.ctorParameters = () => [];
BottomNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bottom-nav',
        template: _raw_loader_bottom_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bottom_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BottomNavComponent);



/***/ }),

/***/ "tbDU":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\n.mat-toolbar {\n  background: #424242;\n}\n\n.mat-icon {\n  color: white;\n}\n\n.terppi {\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n@media (min-width: 768px) {\n  .sidenav {\n    display: none;\n  }\n}\n\n/*.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxZQUFBO0VBQ0EseUNBQUE7QUFFRDs7QUFBQTtFQUNDLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxZQUFBO0FBSUQ7O0FBRkE7RUFDQyxZQUFBO0FBS0Q7O0FBSEE7RUFDQyxjQUFBO0FBTUQ7O0FBSkE7RUFDQztJQUNDLGFBQUE7RUFPQTtBQUNGOztBQUxBOzs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJtYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5zaWRlbmF2IHtcblx0d2lkdGg6IDIwMHB4O1xuXHRib3gtc2hhZG93OiAzcHggMCA2cHggcmdiYSgwLDAsMCwuMjQpO1xufVxuLm1hdC10b29sYmFyIHtcblx0YmFja2dyb3VuZDogIzQyNDI0Mjtcbn1cbi5tYXQtaWNvbiB7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi50ZXJwcGkge1xuXHRjb2xvcjogd2hpdGU7XG59XG4uc3BhY2VyIHtcblx0ZmxleDogMSAxIGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LnNpZGVuYXYge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cbi8qLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuKi9cbiJdfQ== */");

/***/ }),

/***/ "ty8B":
/*!******************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".BottomNav {\n  position: fixed;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  padding: 2em;\n  background-color: #424242;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 2px 2px 4px 5px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n}\n\n.material-icons {\n  color: white;\n}\n\n.material-icons:hover {\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JvdHRvbS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFeUMsOENBQUE7RUFDQSxzQkFBQTtFQUMxQyxnQ0FBQTtFQUEwQyxtREFBQTtBQUczQzs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUYiLCJmaWxlIjoiYm90dG9tLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Cb3R0b21OYXZ7ICBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7IFxuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcblxuLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYzsgIC8qIFNhZmFyaSAzLTQsIGlPUyA0LjAuMiAtIDQuMiwgQW5kcm9pZCAyLjMrICovXG4tbW96LWJveC1zaGFkb3c6ICAgIDNweCAzcHggNXB4IDZweCAjY2NjOyAgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cbiBib3gtc2hhZG93OiAgICAgICAgMnB4IDJweCA0cHggNXB4ICNjY2M7ICAvKiBPcGVyYSAxMC41LCBJRSA5LCBGaXJlZm94IDQrLCBDaHJvbWUgNissIGlPUyA1ICovXG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXRlcmlhbC1pY29uczpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cblxuIl19 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vyil":
/*!*************************************************!*\
  !*** ./src/app/services/Photo/photo.service.ts ***!
  \*************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




const { Camera, Filesystem, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let PhotoService = class PhotoService {
    constructor(platform) {
        this.photos = [];
        this.PHOTO_STORAGE = "photos";
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.platform = platform;
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100 // highest quality (0 to 100)
            });
            // Save the picture and add it to photo collection
            const savedImageFile = yield this.savePicture(capturedPhoto);
            this.photos.unshift(savedImageFile);
            Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos)
            });
        });
    }
    // Save picture to file on device
    savePicture(cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Convert photo to base64 format, required by Filesystem API to save
            const base64Data = yield this.readAsBase64(cameraPhoto);
            // Write the file to the data directory
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
            });
            if (this.platform.is('hybrid')) {
                // Display the new image by rewriting the 'file://' path to HTTP
                // Details: https://ionicframework.com/docs/building/webview#file-protocol
                return {
                    filepath: savedFile.uri,
                    webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(savedFile.uri),
                };
            }
            else {
                // Use webPath to display the new image instead of base64 since it's
                // already loaded into memory
                return {
                    filepath: fileName,
                    webviewPath: cameraPhoto.webPath //base64Data
                };
            }
        });
    }
    readAsBase64(cameraPhoto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // "hybrid" will detect Cordova or Capacitor
            if (this.platform.is('hybrid')) {
                // Read the file into base64 format
                const file = yield Filesystem.readFile({
                    path: cameraPhoto.path
                });
                return file.data;
            }
            else {
                // Fetch the photo, read as a blob, then convert to base64 format
                const response = yield fetch(cameraPhoto.webPath);
                const blob = yield response.blob();
                return yield this.convertBlobToBase64(blob);
            }
        });
    }
    loadSaved() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Retrieve cached photo array data
            const photoList = yield Storage.get({ key: this.PHOTO_STORAGE });
            this.photos = JSON.parse(photoList.value) || [];
            // Easiest way to detect when running on the web:
            // “when the platform is NOT hybrid, do this”
            if (!this.platform.is('hybrid')) {
                // Display the photo by reading into base64 format
                for (let photo of this.photos) {
                    // Read each saved photo's data from the Filesystem
                    const readFile = yield Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ "x4SB":
/*!**************************************************!*\
  !*** ./src/app/pages/stats/stats.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  width: 100%;\n  position: fixed;\n  z-index: 2000;\n  display: flex;\n  justify-content: space-between;\n}\n\nimg {\n  width: 20%;\n  height: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMjAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjAlO1xufVxuIl19 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("Device ready");
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map