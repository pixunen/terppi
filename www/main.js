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
/* harmony import */ var _services_Photo_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Photo/photo.service */ "vyil");





let GameComponent = class GameComponent {
    constructor(photoService) {
        this.photoService = photoService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved();
        });
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
GameComponent.ctorParameters = () => [
    { type: _services_Photo_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] }
];
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

module.exports = __webpack_require__(/*! C:\Users\ottop\Documents\Projektit\Ionic\terppiofficial\src\main.ts */"zUnb");


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
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Tämä on Stat Page</h1>\r\n<button (click)=\"countSteps()\">Laske Askeleet</button>\r\n<button (click)=\"stop()\">Lopeta</button>\r\n<button (click)=\"getSteppes()\">Hae Healthkit askeleet</button>\r\n<div>\r\n    Askeleet : {{StepcounterService.steps.numberOfSteps}}\r\n    Kaikki tieto: {{StepcounterService.steps | json}}\r\n</div>\r\n<div>\r\n   Healthkit askeleet: {{ HealthkitService.object | json}}\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"BottomNav\">\r\n    <mat-icon class=\"material-icons\" routerLink=\"/home\">home</mat-icon>\r\n    <mat-icon class=\"material-icons\" routerLink=\"/stats\">bar_chart</mat-icon>\r\n    <mat-icon class=\"material-icons\" routerLink=\"/game\">games</mat-icon>\r\n</mat-toolbar>");

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






let StatsComponent = class StatsComponent {
    constructor(StepcounterService, HealthkitService) {
        this.StepcounterService = StepcounterService;
        this.HealthkitService = HealthkitService;
        this.askeleet = "";
    }
    ngOnInit() {
    }
    getSteppes() {
        console.log("Haetaan askeleet..");
        this.HealthkitService.getSteppes();
        this.HealthkitService.saveData();
    }
    countSteps() {
        console.log("Counting Starts..");
        this.StepcounterService.readSteps();
    }
    stop() {
        console.log("Counting Ends");
        this.StepcounterService.stopSteps();
    }
};
StatsComponent.ctorParameters = () => [
    { type: _services_Stepcounter_stepcounter_service__WEBPACK_IMPORTED_MODULE_4__["StepcounterService"] },
    { type: _services_Healthkit_healthkit_service__WEBPACK_IMPORTED_MODULE_5__["HealthkitService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<main-nav>\r\n  <router-outlet></router-outlet>\r\n  <app-bottom-nav></app-bottom-nav>\r\n</main-nav>\r\n\r\n\r\n");

/***/ }),

/***/ "WWYX":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1> Tämä on Game Page</h1>\r\n<button (click)=\"addPhotoToGallery()\">Click Me for Photo</button>\r\n<li *ngFor=\"let photo of photoService.photos;\">\r\n    <img src=\"{{photo.webviewPath}}\">\r\n</li>\r\n");

/***/ }),

/***/ "Xa7A":
/*!************************************************!*\
  !*** ./src/app/pages/game/game.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  width: 100%;\n  position: fixed;\n  z-index: 2000;\n  display: flex;\n  justify-content: space-between;\n}\n\nimg {\n  padding: 3em;\n  width: 30%;\n  height: 30%;\n  border: 1px solid;\n  padding: 10px;\n  box-shadow: 5px 10px #888888;\n}\n\nli {\n  padding: 1em;\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBR0oiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbmltZyB7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAjODg4ODg4O1xyXG59XHJcbmxpIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbn0iXX0= */");

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
        ],
        providers: [_ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_20__["Pedometer"], _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_21__["Health"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"home-screen\">\r\n    <div class=\"home-screen-scores\">\r\n        <div class=\"home-screen-text-wrapper\">\r\n            <div class=\"mat-display-1\">Hei User</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"home-screen-spinners\">\r\n        <div class=\"home-screen-spinners-wrapper\">\r\n            <mat-progress-spinner id=\"spinneri1\" color=\"warn\"\r\n            [value]=\"spinner1\" \r\n            diameter=\"200\" \r\n            strokeWidth=\"12\"\r\n            style=\"position:absolute; top:10px;\"\r\n            >\r\n            </mat-progress-spinner>\r\n            <mat-progress-spinner id=\"spinneri2\" color=\"accent\"\r\n            [value]=\"spinner2\" \r\n            diameter=\"170\" \r\n            strokeWidth=\"12\"\r\n            style=\"position:absolute; top:25px;\"\r\n            ></mat-progress-spinner>\r\n            <mat-progress-spinner id=\"spinneri3\"\r\n            [value]=\"spinner3\" \r\n            diameter=\"140\" \r\n            strokeWidth=\"12\"\r\n            style=\"position:absolute; top:40px;\"\r\n            ></mat-progress-spinner>\r\n            {{changeSpinnerColor()}}  \r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"spinner-scores-wrapper\">\r\n\r\n        <div class=\"liikuta-scores\">\r\n            <mat-accordion>\r\n                <mat-expansion-panel hideToggle>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            Liikunta\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            Jotain tekstiä tähän?\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                    <p>Tänne lisätiedot esim</p>\r\n                    <span>Päivän tavoite: <p [innerHTML]='liikuntaScores' style=\"display: inline\"></p></span>\r\n                </mat-expansion-panel>\r\n            </mat-accordion> \r\n        </div>\r\n\r\n     <br>\r\n\r\n        <div class=\"ruokailu-scores\">\r\n            <mat-accordion >\r\n                <mat-expansion-panel hideToggle>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            Ruokailu\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            Jotain tekstiä tähän?\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                    <p>Tänne lisätiedot esim</p>\r\n                    <span>Päivän tavoite: <p [innerHTML]='ruokaScores' style=\"display: inline\"></p></span>\r\n                </mat-expansion-panel>\r\n            </mat-accordion>\r\n        </div>\r\n\r\n     <br>\r\n\r\n        <div class=\"nukkuminen-scores\">\r\n            <mat-accordion >\r\n                <mat-expansion-panel hideToggle>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                            Nukkuminen\r\n                        </mat-panel-title>\r\n                        <mat-panel-description>\r\n                            Jotain tekstiä tähän?\r\n                        </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                    <p>Tänne lisätiedot esim</p>\r\n                    <span>Päivän tavoite: <p [innerHTML]='nukkumisScore' style=\"display: inline\"></p></span>\r\n                </mat-expansion-panel>\r\n            </mat-accordion>    \r\n        </div>\r\n            \r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\n    Vanhaa varmuudeksi säästössä\r\n\r\n    <div class=\"mat-h1\">Liikunta\r\n            <div class=\"liikunta-scores\">\r\n                <span [innerHTML]='liikuntaScores' ></span>\r\n            </div>\r\n    </div>\r\n\r\n    <div class=\"mat-h1\">Ruokailu\r\n            <div class=\"ruokailu-scores\">78/100</div>\r\n    </div>\r\n\r\n        \r\n    <div class=\"mat-h1\">Nukkuminen\r\n            <div class=\"nukkuminen-scores\">43/100</div>\r\n    </div>\r\n\r\n    Vanha tapa, tein mat-cardilla <-- säästin jos todetaankin paremmaksi\r\n\r\n    <mat-card class=\"home-Card\">\r\n    <mat-card-header>\r\n        <mat-card-title>Hei User</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-divider></mat-divider>\r\n    <div style=\"position:relative; width:100%; height:220px\">\r\n        <mat-progress-spinner id=\"#spinneri1\"\r\n        [value]=\"spinner1\" \r\n        diameter=\"200\" \r\n        strokeWidth=\"12\"\r\n        style=\"position:absolute; top:10px; left:45px\"\r\n        >\r\n        </mat-progress-spinner>\r\n        <mat-progress-spinner id=\"#spinneri2\"\r\n        [value]=\"spinner2\" \r\n        diameter=\"170\" \r\n        strokeWidth=\"12\"\r\n        style=\"position:absolute; top:25px; left:60px\"\r\n        ></mat-progress-spinner>\r\n        <mat-progress-spinner id=\"#spinneri3\"\r\n        [value]=\"spinner3\" \r\n        diameter=\"140\" \r\n        strokeWidth=\"12\"\r\n        style=\"position:absolute; top:40px; left:75px\"\r\n        ></mat-progress-spinner>  \r\n    </div>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"mat-title\">Liikunta:</div>\r\n    <div class=\"mat-title\">Ruokailu:</div>\r\n    <div class=\"mat-title\">Nukkuminen:</div>\r\n\r\n</mat-card>\r\n\r\n-->\r\n\r\n\r\n\r\n<!--\r\n\r\n    Voi ehkä käyttää jossain?\r\n\r\n<div class=\"week-Prog\">\r\n    <button mat-mini-fab>Ma</button>\r\n    <button mat-mini-fab>Ti</button>\r\n    <button mat-mini-fab>Ke</button>\r\n    <button mat-mini-fab>To</button>\r\n    <button mat-mini-fab>Pe</button>\r\n    <button mat-mini-fab>La</button>\r\n    <button mat-mini-fab>Su</button>\r\n</div>\r\n-->\r\n\r\n\r\n<!--  \r\n\r\n<div class=\"homePage\" id=\"wrappingDiv\">\r\n    <div class=\"terppiMid\">\r\n        <h1 id=\"homeTerppi\">Terppi</h1>\r\n    </div>       \r\n</div>\r\n\r\n    Keksikää miten käyttää tätä\r\n\r\n    <mat-progress-spinner class=\"spinneriWrapperi\" id=\"#spinneri1\"\r\n        [value]=\"spinner1\" \r\n        diameter=\"350\" \r\n        strokeWidth=\"12\"\r\n        style=\"top:0px; left:-106px\" ylä\r\n        >\r\n        </mat-progress-spinner>\r\n        <mat-progress-spinner class=\"spinneriWrapperi\" id=\"#spinneri2\"\r\n        [value]=\"spinner2\" \r\n        diameter=\"320\" \r\n        strokeWidth=\"10\"\r\n        style=\"top:-335px; left:-92px\"\r\n        ></mat-progress-spinner> \r\n\r\nAlkuperäiset style arvot\r\n        ylä:\r\nposition:absolute; top:0px; left:0px\r\n        ala:\r\nposition:absolute; top:15px; left:15px\r\n\r\n    \r\n    -->\r\n");

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
        this.object = {};
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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav \r\n      #drawer \r\n      class=\"sidenav\" \r\n      [ngClass]=\"{hidden: (isHandset | async)!.matches}\"\r\n      fixedInViewport=\"false\"\r\n      [attr.role]=\"isHandset ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset | async)!.matches\">\r\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <!-- <a mat-list-item href=\"#\" routerLink=\"\">Link 1</a> -->\r\n      <a mat-list-item >Tavoite</a>\r\n      <a mat-list-item >Tips & Tricks</a>\r\n      <a mat-list-item >Harrastukset</a>\r\n      <a mat-list-item >Asetukset</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar class=\"mat-toolbar\">\r\n      <span class=\"spacer\"></span>\r\n      <span class=\"terppi\">Terppi</span>\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"(isHandset | async)!.matches\">\r\n        <mat-icon class=\"mat-icon\" aria-label=\"Side nav toggle icon\">menu</mat-icon> <!-- to use different icons just replace \"menu\". Check backupterppi.txt  -Roni personal memo -->\r\n      </button>\r\n      <!-- <span class=\"terppi\">Terppi</span> -->\r\n    </mat-toolbar>\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

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
/* harmony default export */ __webpack_exports__["default"] = (".homePage#wrappingDiv {\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n  text-align: center;\n  max-width: 42%;\n  border-radius: 12px;\n  height: 60px;\n}\n.homePage#wrappingDiv .terppiMid {\n  width: 100%;\n  height: 100%;\n  display: table;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.homePage#wrappingDiv h1 {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 370;\n  font-size: xx-large;\n  margin-bottom: 0;\n  padding-top: 10px;\n}\n.home-screen {\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: auto;\n  height: 87%;\n  overflow: scroll;\n  overflow-x: hidden;\n  background-color: #1f1f1f;\n}\n.home-screen-scores {\n  text-align: center;\n  margin-top: 2rem;\n}\n.home-screen-text-wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: 4rem;\n  max-width: 40%;\n  padding-top: 1.5rem;\n  color: seashell;\n  margin-bottom: 42px;\n  border-radius: 12px;\n}\n.home-screen-spinners {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 42px;\n}\n.home-screen-spinners .home-screen-spinners-wrapper {\n  position: relative;\n  width: 100%;\n  height: 220px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  justify-content: center;\n}\n/*\nmat-progress-spinner {\n\n    ::ng-deep circle {\n        stroke: #33dd82;\n    }\n}\n*/\n:host ::ng-deep #spinneri3 circle {\n  stroke: #0CC20C;\n}\n:host ::ng-deep #spinneri2 circle {\n  stroke: #0CC20C;\n}\n:host ::ng-deep #spinneri1 circle {\n  stroke: #0CC20C;\n}\n.spinner-scores-wrapper {\n  color: seashell;\n  text-align: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n}\n.nukkuminen-scores {\n  margin-bottom: 67px;\n}\n.home-Card {\n  max-width: 300px;\n  min-height: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 4rem;\n}\n.mat-card > :first-child {\n  justify-content: center;\n}\n.week-Prog {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n@media (min-width: 760px) {\n  .home-Card {\n    max-width: 600px;\n    min-height: 300px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 4rem;\n  }\n}\n@media (max-width: 760px) {\n  .home-screen-text-wrapper {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBR0k7RUFDSSx3SUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFNQTtFQUlJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFrQixrQkFBQTtFQUVsQix5QkFBQTtBQU5KO0FBV0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBUko7QUFZQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWNBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWFI7QUFlQTs7Ozs7OztDQUFBO0FBU0E7RUFDSSxlQUFBO0FBYko7QUFnQkE7RUFDSSxlQUFBO0FBYko7QUFnQkE7RUFDSSxlQUFBO0FBYko7QUFrQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZko7QUFrQkE7RUFDSSxtQkFBQTtBQWZKO0FBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWhCSjtBQW1CQTtFQUNJLHVCQUFBO0FBaEJKO0FBb0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQWpCSjtBQXNCQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQXBCTjtBQUNGO0FBeUJBO0VBQ0k7SUFDSSxlQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFsbCBoZXJlIG9sZFxyXG4uaG9tZVBhZ2Ujd3JhcHBpbmdEaXYge1xyXG4gICAgLy8gdG9kbyBsaXPDpMOkIEBtZWRpYXRcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA0MiU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICAgIC50ZXJwcGlNaWQgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9O1xyXG4gICAgaDEgIHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzNzA7XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG4uaG9tZS1zY3JlZW4ge1xyXG4gICAgLy93aWR0aDogMTAwICU7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogODclO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzEsIDMxKVxyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmhvbWUtc2NyZWVuLXNjb3JlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5ob21lLXNjcmVlbi10ZXh0LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6c2VhZ3JlZW47XHJcbiAgICBjb2xvcjogc2Vhc2hlbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbn1cclxuXHJcbi5ob21lLXNjcmVlbi1zcGlubmVycyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDQycHg7XHJcblxyXG4gICAgLmhvbWUtc2NyZWVuLXNwaW5uZXJzLXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICAgICAgICB3aWR0aDoxMDAlOyBcclxuICAgICAgICBoZWlnaHQ6MjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4vKlxyXG5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICBcclxuICAgIDo6bmctZGVlcCBjaXJjbGUge1xyXG4gICAgICAgIHN0cm9rZTogIzMzZGQ4MjtcclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuOmhvc3QgOjpuZy1kZWVwICNzcGlubmVyaTMgY2lyY2xleyAgIFxyXG4gICAgc3Ryb2tlOiAjMENDMjBDO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI3NwaW5uZXJpMiBjaXJjbGV7ICAgXHJcbiAgICBzdHJva2U6ICMwQ0MyMEM7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAjc3Bpbm5lcmkxIGNpcmNsZXsgICBcclxuICAgIHN0cm9rZTogIzBDQzIwQztcclxufVxyXG5cclxuXHJcblxyXG4uc3Bpbm5lci1zY29yZXMtd3JhcHBlcntcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLm51a2t1bWluZW4tc2NvcmVze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjdweDtcclxufVxyXG5cclxuLy9vbGRcclxuLmhvbWUtQ2FyZHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG4vL29sZFxyXG4ubWF0LWNhcmQ+OmZpcnN0LWNoaWxkIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vL29sZD9cclxuLndlZWstUHJvZ3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG4vLyB0b2RvIHPDpMOkZMOkIGthaWtraSB0b2ltaW1hYW4gaXNvaW1taWxsYSBuw6R5dMO2aWxsw6RcclxuQG1lZGlhKG1pbi13aWR0aDogNzYwcHgpe1xyXG4gICAgLy8gb2xkXHJcbiAgICAuaG9tZS1DYXJke1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzYwcHgpe1xyXG4gICAgLmhvbWUtc2NyZWVuLXRleHQtd3JhcHBlcntcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\n.mat-toolbar {\n  background: #424242;\n}\n\n.mat-icon {\n  color: white;\n}\n\n.terppi {\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n@media (min-width: 768px) {\n  .sidenav {\n    display: none;\n  }\n}\n\n/*.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxZQUFBO0VBQ0EseUNBQUE7QUFFRDs7QUFBQTtFQUNDLG1CQUFBO0FBR0Q7O0FBREE7RUFDQyxZQUFBO0FBSUQ7O0FBRkE7RUFDQyxZQUFBO0FBS0Q7O0FBSEE7RUFDQyxjQUFBO0FBTUQ7O0FBSkE7RUFDQztJQUNDLGFBQUE7RUFPQTtBQUNGOztBQUxBOzs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJtYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uc2lkZW5hdiB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsMCwwLC4yNCk7XHJcbn1cclxuLm1hdC10b29sYmFyIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDI0MjQyO1xyXG59XHJcbi5tYXQtaWNvbiB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZXJwcGkge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3BhY2VyIHtcclxuXHRmbGV4OiAxIDEgYXV0bztcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHQuc2lkZW5hdiB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG4vKi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiovXHJcbiJdfQ== */");

/***/ }),

/***/ "ty8B":
/*!******************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".BottomNav {\n  position: fixed;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: space-between;\n  padding: 2em;\n  background-color: #424242;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 2px 2px 4px 5px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n}\n\n.material-icons {\n  color: white;\n}\n\n.material-icons:hover {\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvdHRvbS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFeUMsOENBQUE7RUFDQSxzQkFBQTtFQUMxQyxnQ0FBQTtFQUEwQyxtREFBQTtBQUczQzs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUYiLCJmaWxlIjoiYm90dG9tLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Cb3R0b21OYXZ7ICBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwOyBcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG5cclxuLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYzsgIC8qIFNhZmFyaSAzLTQsIGlPUyA0LjAuMiAtIDQuMiwgQW5kcm9pZCAyLjMrICovXHJcbi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7ICAvKiBGaXJlZm94IDMuNSAtIDMuNiAqL1xyXG4gYm94LXNoYWRvdzogICAgICAgIDJweCAycHggNHB4IDVweCAjY2NjOyAgLyogT3BlcmEgMTAuNSwgSUUgOSwgRmlyZWZveCA0KywgQ2hyb21lIDYrLCBpT1MgNSAqL1xyXG59XHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnM6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxufVxyXG5cclxuIl19 */");

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
                    webviewPath: base64Data
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
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  width: 100%;\n  position: fixed;\n  z-index: 2000;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKIiwiZmlsZSI6InN0YXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgei1pbmRleDogMjAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iXX0= */");

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