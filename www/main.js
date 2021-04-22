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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine.service */ "Nd77");




let GameComponent = class GameComponent {
    constructor(engServ) {
        this.engServ = engServ;
    }
    ngOnInit() {
        this.engServ.createScene(this.rendererCanvas);
        this.engServ.animate();
    }
};
GameComponent.ctorParameters = () => [
    { type: _engine_service__WEBPACK_IMPORTED_MODULE_3__["EngineService"] }
];
GameComponent.propDecorators = {
    rendererCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['rendererCanvas', { static: true },] }]
};
GameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-engine',
        template: _raw_loader_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], GameComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Ohjelmointi\WebWorkshop\terppiV2\terppiofficial\src\main.ts */"zUnb");


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
/* harmony import */ var _services_Stepcounter_stepcounter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Stepcounter/stepcounter.service */ "eu9t");
/* harmony import */ var _services_Healthkit_healthkit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Healthkit/healthkit.service */ "fmiJ");
/* harmony import */ var _services_Photo_photo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Photo/photo.service */ "vyil");







let HomeComponent = class HomeComponent {
    // we just initialize the text areas in constructor because we have to or angular is mad..
    // this might be improved by changing the way how the text areas data is send to the html but it is open problem atm
    constructor(StepcounterService, HealthkitService, photoService) {
        this.StepcounterService = StepcounterService;
        this.HealthkitService = HealthkitService;
        this.photoService = photoService;
        // precentages and radiusses of the spinners - the radius is the raadius of the progress circle
        // nukkuminen
        this.sleepRadi = 90;
        // syöminen  
        this.eatRadi = 69;
        // liikunta
        this.stepsRadi = 52;
        this.daySteps = []; // get 
        this.auth = false;
        this.liikuntaScores = `${this.daySteps} / ${this.dayStepGoal} `;
        this.ruokaScores = `${this.dayEaten} / ${this.dayEatGoal}`;
        this.nukkumisScore = `${this.daySleepHours} / ${this.daySleepHoursGoal}`;
        // auth to read steps
        /*
        if(!this.auth){
          this.auth = this.HealthkitService.getAuth()
        }
        */
    }
    // solve how to ask auth only once on android device
    // this can be removed, but remove the event from the .html as well
    test() {
        this.HealthkitService.getAuth();
    }
    ngOnInit() {
        // this value needs to be gotten from the right place
        this.dayStepGoal = 1000;
        this.dayEatGoal = 500;
        this.daySleepHoursGoal = 8;
        this.HealthkitService.getSteppes();
        this.daySteps = Math.floor(this.HealthkitService.odaySteps);
        //console.log(this.daySteps);
        //console.log(this.HealthkitService.daySteps[0]);
        // just hardcoding the value until the service workspace
        //this.daySteps = 400;
        this.dayEaten = 280;
        this.daySleepHours = 7;
        if (this.dayStepGoal === 0 || this.dayEatGoal === 0 || this.dayStepGoal === 0) { // error handling we should not end here
        }
        this.stepPre = ((this.daySteps / this.dayStepGoal) * 100);
        this.eatPre = ((this.dayEaten / this.dayEatGoal) * 100);
        this.daySleepPre = ((this.daySleepHours / this.daySleepHoursGoal) * 100);
        //display the textContent
        this.liikuntaScores = `${this.daySteps} / ${this.dayStepGoal} `;
        this.ruokaScores = `${this.dayEaten} / ${this.dayEatGoal}`;
        this.nukkumisScore = `${this.daySleepHours} / ${this.daySleepHoursGoal}`;
        // animateSpinners animates the progress bar with this given data
        let precentages = [this.daySleepPre, this.eatPre, this.stepPre];
        let radiusses = [this.sleepRadi, this.eatRadi, this.stepsRadi];
        this.animateSpinners(precentages, radiusses);
    }
    // function to animate the svg spinners 
    // improvement idea: maybe do the calculations outside of angular (ngZone.runOutsideAngular)?
    animateSpinners(precentages, radiusses) {
        let radius = 0;
        let circumference = 0;
        let strokeDashOffset = 0;
        // call animateProgress on each spinner and give the values needed
        // circumference is the length of the circle
        // strokeDashOffset is the current offset calculated based on the precentage <-- which is calculated based on set goals and...
        for (let i = 0; i < precentages.length; i++) {
            let spinner = document.getElementById("circle-complete-" + (i + 1));
            radius = radiusses[i];
            circumference = 2 * Math.PI * radius;
            strokeDashOffset = circumference - ((precentages[i] * circumference) / 100);
            //spinner.style.strokeDashoffset = "0";
            this.animateProgress(spinner, circumference, strokeDashOffset);
        }
    }
    // Call this function until pathL == maxPath
    animateProgress(element, pathL, maxPath) {
        pathL -= 2;
        element.style.strokeDashoffset = pathL.toString();
        if (pathL > maxPath) {
            setTimeout(() => { this.animateProgress(element, pathL, maxPath); }, 10);
        }
        else {
            return;
        }
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_Stepcounter_stepcounter_service__WEBPACK_IMPORTED_MODULE_4__["StepcounterService"] },
    { type: _services_Healthkit_healthkit_service__WEBPACK_IMPORTED_MODULE_5__["HealthkitService"] },
    { type: _services_Photo_photo_service__WEBPACK_IMPORTED_MODULE_6__["PhotoService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "2+EN":
/*!****************************************************!*\
  !*** ./src/app/pages/hobbies/hobbies.component.ts ***!
  \****************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hobbies_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hobbies.component.html */ "OvCw");
/* harmony import */ var _hobbies_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hobbies.component.scss */ "aFeL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HobbiesComponent = class HobbiesComponent {
    //hobbies = new FormControl('');
    //updateHobby() {
    // this.hobbies.setValue('Testi');
    //}
    constructor() { }
    ngOnInit() {
    }
};
HobbiesComponent.ctorParameters = () => [];
HobbiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hobbies',
        template: _raw_loader_hobbies_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hobbies_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HobbiesComponent);



/***/ }),

/***/ "2zol":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stats/stats.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n    <h1> Tämä on Stat Page</h1>\n\n    <div class=\"chart-wrapper\">\n        <h3>Kaikki data</h3>\n        <canvas baseChart  \n            [datasets]=\"lineChartData\" \n            [labels]=\"lineChartLabels\" \n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\" \n            [legend]=\"lineChartLegend\" \n            [chartType]=\"lineChartType\" \n            [plugins]=\"lineChartPlugins\">\n        </canvas>\n        <h3>Askeleet</h3>\n        <canvas baseChart  \n            [datasets]=\"lineChartData2\" \n            [labels]=\"lineChartLabels\" \n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\" \n            [legend]=\"lineChartLegend\" \n            [chartType]=\"lineChartType\" \n            [plugins]=\"lineChartPlugins\">\n        </canvas>\n        <h3>Viikon tavoitteet</h3>\n        <canvas baseChart  \n            [datasets]=\"lineChartData3\" \n            [labels]=\"lineChartLabels3\" \n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\" \n            [legend]=\"lineChartLegend\" \n            [chartType]=\"lineChartType3\" \n            [plugins]=\"lineChartPlugins\">\n        </canvas>\n    </div>\n</div>\n\n<!----\n<button (click)=\"countSteps()\">Laske Askeleet</button>\n<button (click)=\"stop()\">Lopeta</button> \n<div>\n    Askeleet : {{StepcounterService.steps.numberOfSteps}}\n    Kaikki tieto: {{StepcounterService.steps | json}}\n</div>\n\n<table>\n    <tr>Kolmen päivän askeleet</tr>\n    <tr><th>Toissapäivänä</th><th>Eillen</th><th>Tänään</th></tr>\n    <tr *ngFor=\"let steps of HealthkitService.object;\">\n        <td>{{ steps[0] }}</td>\n        <td>{{ steps[1] }}</td>\n        <td>{{ steps[2] }}</td>\n     </tr>\n</table>\n\n<button (click)=\"addPhotoToGallery()\">Click Me for Photo</button>\n<li *ngFor=\"let photo of photoService.photos;\">\n    <img src=\"{{photo.webviewPath}}\">\n</li> -->");

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

/***/ "KL4E":
/*!*******************************************!*\
  !*** ./src/app/pages/settings/product.ts ***!
  \*******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "KhSi":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tips/tips.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tips-screen\">\n    <h1 class=\"text_header\"> Tämä on Tips & Tricks Page</h1>\n</div>");

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

/***/ "Nd77":
/*!**********************************************!*\
  !*** ./src/app/pages/game/engine.service.ts ***!
  \**********************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "NK00");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "RyHr");





let EngineService = class EngineService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.frameId = null;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene(canvas) {
        // The first step is to get the reference of the canvas element from our HTML document
        let me = this;
        this.canvas = canvas.nativeElement;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
            canvas: this.canvas,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x87CEEB);
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 8.28;
        this.camera.position.y = 1.35;
        this.camera.position.x = 5.25;
        this.scene.add(this.camera);
        // white light
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0xFFFFFF, 0.8);
        // this.light.position.z = 0.8;
        this.scene.add(this.light);
        this.light1 = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xFF0040, 4, 50);
        this.scene.add(this.light1);
        this.light2 = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0x0040FF, 3, 50);
        this.scene.add(this.light2);
        this.light3 = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0x80FF80, 4, 50);
        this.scene.add(this.light3);
        // controls
        const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__["OrbitControls"](this.camera, this.renderer.domElement);
        controls.update();
        this.loaderGLTF = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__["GLTFLoader"]();
        this.loaderGLTF.load('../../assets/main/saari009_geo3_bake2.glb', function (gltf) {
            console.log(gltf);
            me.scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        this.renderer.render(this.scene, this.camera);
    }
    resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
};
EngineService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
];
EngineService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], EngineService);



/***/ }),

/***/ "OvCw":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hobbies/hobbies.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"hobbies-screen\">\n<h1 class=\"text_header\"> Tämä on Harrastukset Page</h1>\n<p class=\"text_choise\">Valitse harrastuksesi</p>\n<form action=\"#\">\n  <input type=\"checkbox\" id=\"hobby1\" name=\"hobby1\" value=\"football\">\n  <label class=\"text\" for=\"hobby1\"> Jalkapallo</label><br>\n  <input type=\"checkbox\" id=\"hobby2\" name=\"hobby2\" value=\"icehokey\">\n  <label class=\"text\" for=\"hobby2\"> Jääkiekko</label><br>\n  <input type=\"checkbox\" id=\"hobby3\" name=\"hobby3\" value=\"floorball\">\n  <label class=\"text\" for=\"hobby3\"> Salibandy</label><br>\n  <input type=\"checkbox\" id=\"hobby4\" name=\"hobby4\" value=\"basketball\">\n  <label class=\"text\" for=\"hobby4\"> Koripallo</label><br>\n  <input type=\"checkbox\" id=\"hobby5\" name=\"hobby5\" value=\"running\">\n  <label class=\"text\" for=\"hobby5\"> Juoksu</label><br>\n  <input type=\"checkbox\" id=\"hobby6\" name=\"hobby6\" value=\"swimming\">\n  <label class=\"text\" for=\"hobby6\"> Uinti</label><br>\n  <input type=\"checkbox\" id=\"hobby7\" name=\"hobby7\" value=\"tennis\">\n  <label class=\"text\" for=\"hobby7\"> Tennis</label><br>\n  <input type=\"checkbox\" id=\"hobby8\" name=\"hobby8\" value=\"volleyball\">\n  <label class=\"text\" for=\"hobby8\"> Lentopallo</label><br>\n  <input type=\"checkbox\" id=\"hobby9\" name=\"hobby9\" value=\"baseball\">\n  <label class=\"text\" for=\"hobby9\"> Pesäpallo</label><br>\n  <input type=\"checkbox\" id=\"hobby10\" name=\"hobby10\" value=\"athletics\">\n  <label class=\"text\" for=\"hobby10\"> Yleisurheilu</label><br><br>\n  <input type=\"submit\" value=\"Valitse\">\n</form> \n</div>-->\n<!--<label>\n  Name:\n  <input type=\"text\" [formControl]=\"hobbies\">\n  <p>\n    Value: {{ hobbies.value }}\n  </p>\n  <p>\n    <button (click)=\"updateName()\">Update Name</button>\n  </p>\n</label>-->\n\n<div class=\"hobbies-screen\">\n  <h3 class=\"text_header\">Sinun Harrastuksesi: <span>{{displayText}}</span></h3>\n\n  <form action=\"\" id=\"hobbyInput\">\n    <mat-form-field>\n      <input class=\"input\" matInput placeholder=\"Kirjoita harrastuksesi\" #input><br>\n    </mat-form-field>\n  </form>\n\n\n  <div>\n    <button mat-button color=\"primary\" (click)=\"displayText = input.value\">Tallenna</button>\n  </div>\n</div>");

/***/ }),

/***/ "PB75":
/*!*************************************!*\
  !*** ./src/assets/appsettings.json ***!
  \*************************************/
/*! exports provided: defaultName, defaultEmail, defaultAge, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"defaultName\":\"Joku\",\"defaultEmail\":\"Joku@email.com\",\"defaultAge\":20}");

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

/***/ "UiUE":
/*!************************************************!*\
  !*** ./src/app/pages/goals/goals.component.ts ***!
  \************************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_goals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./goals.component.html */ "eURz");
/* harmony import */ var _goals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goals.component.scss */ "gY+n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GoalsComponent = class GoalsComponent {
    constructor() { }
    ngOnInit() {
    }
};
GoalsComponent.ctorParameters = () => [];
GoalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-goals',
        template: _raw_loader_goals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_goals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GoalsComponent);



/***/ }),

/***/ "UpYp":
/*!**********************************************!*\
  !*** ./src/app/pages/tips/tips.component.ts ***!
  \**********************************************/
/*! exports provided: TipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsComponent", function() { return TipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tips_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tips.component.html */ "KhSi");
/* harmony import */ var _tips_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tips.component.scss */ "hDt9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TipsComponent = class TipsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TipsComponent.ctorParameters = () => [];
TipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tips',
        template: _raw_loader_tips_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tips_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TipsComponent);



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
        this.bigdata = [];
        this.weekdata = [];
        this.lineChartData = [
            { data: [1000, 800, 2000], label: 'Testi Askeleet' },
            { data: [400, 500, 1200], label: 'Testi Uni' },
            { data: [200, 1500, 200], label: 'Testi Ruoka' },
        ];
        this.lineChartData2 = [
            { data: [], label: 'Askeleet' }
        ];
        this.lineChartData3 = [
            { data: [], label: 'Tavoitteet' }
        ];
        this.lineChartLabels = ['Toissapäivänä', 'Eillen', 'Tänään'];
        this.lineChartLabels3 = ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: 'rgba(255, 255, 255)',
                backgroundColor: 'rgba(0,255,0,0.28)'
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.lineChartType3 = 'bar';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved();
            yield this.HealthkitService.saveData();
            yield this.HealthkitService.saveWeek();
            yield this.addData();
            this.lineChartData2[0].data = this.bigdata;
            this.lineChartData3[0].data = this.weekdata;
        });
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
    addData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.bigdata = [].concat.apply([], this.HealthkitService.object);
            this.weekdata = [].concat.apply([], this.HealthkitService.wobject);
            //console.log(this.bigdata);
        });
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
/* harmony default export */ __webpack_exports__["default"] = ("<main-nav>\n  <router-outlet></router-outlet>\n  <app-bottom-nav></app-bottom-nav>\n</main-nav>\n\n\n\n");

/***/ }),

/***/ "WWYX":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"engine-wrapper\"> \n    <canvas #rendererCanvas id=\"renderCanvas\"></canvas>\n  </div>\n  \n");

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
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/settings/settings.component */ "lkCc");
/* harmony import */ var _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/stats/stats.component */ "V1J6");
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./materials/materials.module */ "bZ3k");
/* harmony import */ var _ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/pedometer/ngx */ "7cmQ");
/* harmony import */ var _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/health/ngx */ "e7Ar");
/* harmony import */ var _pages_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/hobbies/hobbies.component */ "2+EN");
/* harmony import */ var _pages_goals_goals_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/goals/goals.component */ "UiUE");
/* harmony import */ var _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/tips/tips.component */ "UpYp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _pages_settings_shared_appsettings_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/settings/shared/appsettings.service */ "ZHfr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "tk/3");































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
            _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_19__["StatsComponent"],
            _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
            _pages_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_23__["HobbiesComponent"],
            _pages_goals_goals_component__WEBPACK_IMPORTED_MODULE_24__["GoalsComponent"],
            _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_25__["TipsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
                { path: 'stats', component: _pages_stats_stats_component__WEBPACK_IMPORTED_MODULE_19__["StatsComponent"] },
                { path: 'game', component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_17__["GameComponent"] },
                { path: 'settings', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"] },
                { path: 'tips', component: _pages_tips_tips_component__WEBPACK_IMPORTED_MODULE_25__["TipsComponent"] },
                { path: 'goals', component: _pages_goals_goals_component__WEBPACK_IMPORTED_MODULE_24__["GoalsComponent"] },
                { path: 'hobbies', component: _pages_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_23__["HobbiesComponent"] },
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
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_20__["MaterialsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"],
        ],
        providers: [_ionic_native_pedometer_ngx__WEBPACK_IMPORTED_MODULE_21__["Pedometer"], _ionic_native_health_ngx__WEBPACK_IMPORTED_MODULE_22__["Health"], ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _pages_settings_shared_appsettings_service__WEBPACK_IMPORTED_MODULE_28__["AppSettingsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZHfr":
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/shared/appsettings.service.ts ***!
  \**************************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/appsettings.json */ "PB75");
var _assets_appsettings_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/appsettings.json */ "PB75", 1);
/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appsettings */ "zgTX");







const SETTINGS_KEY = "configuration";
// const SETTINGS_LOCATION = "assets/appsettings.json";
let AppSettingsService = class AppSettingsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        console.log('Reading local json files');
        console.log(_assets_appsettings_json__WEBPACK_IMPORTED_MODULE_5__);
    }
    saveSettings(settings) {
        localStorage.setItem("assets/appsettings.json", JSON.stringify(settings));
    }
    getSettings() {
        let settings = localStorage.getItem(SETTINGS_KEY);
        return this.httpClient.get("assets/appsettings.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response || {}));
        // if(settings) {
        //     return of(JSON.parse(settings));
        // }
        // else {
        // return this.http.get(SETTINGS_LOCATION).pipe
        // (map((response => { 
        // let settings = response.json() || {};
        // if(settings) {
        //    this.saveSettings(settings);
        // }
        //return settings;
        //})
        //.catchError(this.handleErrors));
        //)}
    }
    //getSettings(): Observable<AppSettings> {
    // return this.http.get(SETTINGS_LOCATION).pipe
    //(map((response: any) => response.json() || {})).pipe
    //(catchError(this.handleErrors));
    // let settings = localStorage.getItem(SETTINGS_KEY);
    //}
    deleteSettings() {
        localStorage.removeItem(SETTINGS_KEY);
    }
    handleErrors(error) {
        // Log the error to the console
        switch (error.status) {
            case 404:
                console.error("Can't find file: " + "assets/appsettings.json");
                break;
            default:
                console.error(error);
                break;
        }
        // Return default configuration values
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _appsettings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"]());
    }
};
AppSettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppSettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppSettingsService);

//export class AppSettingsService {
//getSettings(): Observable<AppSettings> {
//let settings = new AppSettings();
//return of<AppSettings>(settings);
//}
//}


/***/ }),

/***/ "aFeL":
/*!******************************************************!*\
  !*** ./src/app/pages/hobbies/hobbies.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hobbies-screen {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: auto;\n  overflow: scroll;\n  overflow-x: hidden;\n  background-color: #1f1f1f;\n  justify-content: center;\n  text-align: center;\n}\n\n.input {\n  margin-top: 30px;\n  position: relative;\n}\n\n.text {\n  color: seashell;\n}\n\n.text_header {\n  color: seashell;\n}\n\n.text_choise {\n  color: seashell;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob2JiaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQWtCLGtCQUFBO0VBQ2xCLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTUoiLCJmaWxlIjoiaG9iYmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2JiaWVzLXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiBhdXRvOyAgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgb3ZlcmZsb3cteDpoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnB1dHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLnRleHQge1xuICAgIGNvbG9yOiBzZWFzaGVsbDtcbn1cbi50ZXh0X2hlYWRlcntcbiAgICBjb2xvcjogc2Vhc2hlbGw7XG59XG4udGV4dF9jaG9pc2V7XG4gICAgY29sb3I6IHNlYXNoZWxsO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuIl19 */");

/***/ }),

/***/ "aSPh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-screen\">\n\n    <div class=\"home-screen-welcome\">\n        <div class=\"home-screen-text-wrapper\">\n            <h1>Hei User</h1>\n        </div>\n    </div>\n\n    <div class=\"home-screen-spinners\">\n        <div class=\"spinner-wrapper\">\n            <div class=\"spinner-container\">\n                <svg class=\"radial-progress\" id=\"radial-progress-1\" width=\"250\" height=\"250\">\n                    <circle class=\"circle-shadow\" cx=\"125\" cy=\"125\" [attr.r]=\"sleepRadi\"></circle>\n                    <circle class=\"circle-complete\" id=\"circle-complete-1\" cx=\"125\" cy=\"125\" [attr.r]=\"sleepRadi\" style=\"stroke-dashoffset: 565.486677646;\"></circle>\n                </svg>\n                <!--<text class=\"percentage\" x=\"50%\" y=\"50%\">82%</text> -->\n            </div>\n    \n            <div class=\"spinner-container\">\n                <svg class=\"radial-progress\" id=\"radial-progress-2\" width=\"250\" height=\"250\">\n                    <circle class=\"circle-shadow\" cx=\"125\" cy=\"125\" [attr.r]=\"eatRadi\"></circle>\n                    <circle class=\"circle-complete\" id=\"circle-complete-2\" cx=\"125\" cy=\"125\" [attr.r]=\"eatRadi\" style=\"stroke-dashoffset: 439.822971503;\"></circle>\n                </svg>\n            </div>\n    \n            <div class=\"spinner-container\">\n                <svg class=\"radial-progress\" id=\"radial-progress-3\" width=\"250\" height=\"250\">\n                    <circle class=\"circle-shadow\" cx=\"125\" cy=\"125\" [attr.r]=\"stepsRadi\"></circle>\n                    <circle class=\"circle-complete\" id=\"circle-complete-3\" cx=\"125\" cy=\"125\" [attr.r]=\"stepsRadi\" style=\"stroke-dashoffset: 326.725635973;\"></circle>\n                </svg>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"spinner-scores-wrapper\">\n\n        <div class=\"liikuta-scores\" id=\"liikuntaScoresID\">\n            <mat-accordion>\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Liikunta\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Jotain tekstiä tähän?\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Tänne lisätiedot esim</p>\n                    <span>Päivän tavoite: <p [innerHTML]='liikuntaScores' style=\"display: inline\"></p></span> <br>\n                    <button mat-raised-button id=\"AddLiikuntaBtn\" (click)=\"test()\">lisää</button>\n                </mat-expansion-panel>\n            </mat-accordion> \n        </div>\n\n     <br>\n\n        <div class=\"ruokailu-scores\" id=\"ruokailuScoresID\">\n            <mat-accordion >\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Ruokailu\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Jotain tekstiä tähän?\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Tänne lisätiedot esim</p>\n                    <span>Päivän tavoite: <p [innerHTML]='ruokaScores' style=\"display: inline\"></p></span> <br>\n                    <button mat-raised-button id=\"AddRuokaBtn\">Lisää</button>\n                    <button mat-raised-button id=\"AddRuokaBtn2\" (click)=\"addPhotoToGallery()\">Kamera</button>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n\n     <br>\n\n        <div class=\"nukkuminen-scores\" id=\"nukkuminenScoresID\">\n            <mat-accordion >\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Nukkuminen\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            Jotain tekstiä tähän?\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Tänne lisätiedot esim</p>\n                    <span>Päivän tavoite: <p [innerHTML]='nukkumisScore' style=\"display: inline\"></p></span> <br>\n                    <button mat-raised-button id=\"addNukkuminenBtn\">lisää</button>\n                </mat-expansion-panel>\n            </mat-accordion>    \n        </div>\n            \n    </div>\n</div>\n\n\n\n\n\n\n\n\n<!--\n\n        <div class=\"home-screen-spinners-wrapper\">\n            <mat-progress-spinner id=\"spinneri1\" color=\"warn\"\n            [value]=\"spinner1\" \n            diameter=\"200\" \n            strokeWidth=\"12\"\n            style=\"position:absolute; top:10px;\"\n            >\n            </mat-progress-spinner>\n            <mat-progress-spinner id=\"spinneri2\" color=\"accent\"\n            [value]=\"spinner2\" \n            diameter=\"170\" \n            strokeWidth=\"12\"\n            style=\"position:absolute; top:25px;\"\n            ></mat-progress-spinner>\n            <mat-progress-spinner id=\"spinneri3\"\n            [value]=\"spinner3\" \n            diameter=\"140\" \n            strokeWidth=\"12\"\n            style=\"position:absolute; top:40px;\"\n            ></mat-progress-spinner>\n        </div>\n\n\n    Vanhaa varmuudeksi säästössä\n\n    <div class=\"mat-h1\">Liikunta\n            <div class=\"liikunta-scores\">\n                <span [innerHTML]='liikuntaScores' ></span>\n            </div>\n    </div>\n\n    <div class=\"mat-h1\">Ruokailu\n            <div class=\"ruokailu-scores\">78/100</div>\n    </div>\n\n        \n    <div class=\"mat-h1\">Nukkuminen\n            <div class=\"nukkuminen-scores\">43/100</div>\n    </div>\n\n    Vanha tapa, tein mat-cardilla <-- säästin jos todetaankin paremmaksi\n\n    <mat-card class=\"home-Card\">\n    <mat-card-header>\n        <mat-card-title>Hei User</mat-card-title>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <div style=\"position:relative; width:100%; height:220px\">\n        <mat-progress-spinner id=\"#spinneri1\"\n        [value]=\"spinner1\" \n        diameter=\"200\" \n        strokeWidth=\"12\"\n        style=\"position:absolute; top:10px; left:45px\"\n        >\n        </mat-progress-spinner>\n        <mat-progress-spinner id=\"#spinneri2\"\n        [value]=\"spinner2\" \n        diameter=\"170\" \n        strokeWidth=\"12\"\n        style=\"position:absolute; top:25px; left:60px\"\n        ></mat-progress-spinner>\n        <mat-progress-spinner id=\"#spinneri3\"\n        [value]=\"spinner3\" \n        diameter=\"140\" \n        strokeWidth=\"12\"\n        style=\"position:absolute; top:40px; left:75px\"\n        ></mat-progress-spinner>  \n    </div>\n    <mat-divider></mat-divider>\n    <div class=\"mat-title\">Liikunta:</div>\n    <div class=\"mat-title\">Ruokailu:</div>\n    <div class=\"mat-title\">Nukkuminen:</div>\n\n</mat-card>\n\n-->\n\n\n\n<!--\n\n    Voi ehkä käyttää jossain?\n\n<div class=\"week-Prog\">\n    <button mat-mini-fab>Ma</button>\n    <button mat-mini-fab>Ti</button>\n    <button mat-mini-fab>Ke</button>\n    <button mat-mini-fab>To</button>\n    <button mat-mini-fab>Pe</button>\n    <button mat-mini-fab>La</button>\n    <button mat-mini-fab>Su</button>\n</div>\n-->\n\n\n<!--  \n\n<div class=\"homePage\" id=\"wrappingDiv\">\n    <div class=\"terppiMid\">\n        <h1 id=\"homeTerppi\">Terppi</h1>\n    </div>       \n</div>\n\n    Keksikää miten käyttää tätä\n\n    <mat-progress-spinner class=\"spinneriWrapperi\" id=\"#spinneri1\"\n        [value]=\"spinner1\" \n        diameter=\"350\" \n        strokeWidth=\"12\"\n        style=\"top:0px; left:-106px\" ylä\n        >\n        </mat-progress-spinner>\n        <mat-progress-spinner class=\"spinneriWrapperi\" id=\"#spinneri2\"\n        [value]=\"spinner2\" \n        diameter=\"320\" \n        strokeWidth=\"10\"\n        style=\"top:-335px; left:-92px\"\n        ></mat-progress-spinner> \n\nAlkuperäiset style arvot\n        ylä:\nposition:absolute; top:0px; left:0px\n        ala:\nposition:absolute; top:15px; left:15px\n\n    \n    -->\n");

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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");










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
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"]
        ]
    })
], MaterialsModule);



/***/ }),

/***/ "eURz":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/goals/goals.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"goals-screen\">\n    <h1 class=\"text_header\"> Tämä on Tavoitteet Page</h1>\n</div>\n");

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
            //console.log('read in a sec')
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
        this.wsteppes = [];
        this.object = [];
        this.wobject = [];
        this.daySteps = [];
        this.odaySteps = [];
    }
    getAuth() {
        this.health.requestAuthorization([
            'distance',
            {
                read: ['steps']
            }
        ]);
        return true;
    }
    getSteppes() {
        if (!this.odaySteps.length) {
            this.health.queryAggregated({
                startDate: new Date(new Date().getTime() - 0 * 24 * 60 * 60 * 1000),
                endDate: new Date(),
                dataType: 'steps',
                bucket: 'day'
            }).then(HealthData => this.daySteps.push(HealthData));
            for (let key of Object.keys(this.daySteps)) {
                for (let value of this.daySteps[key]) {
                    this.odaySteps[key] = this.odaySteps[key] || [];
                    this.odaySteps[key].push(value['value']);
                }
            }
        }
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
    saveWeek() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.wobject.length) {
                this.health.queryAggregated({
                    startDate: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
                    endDate: new Date(),
                    dataType: 'steps',
                    bucket: 'day'
                }).then(HealthData => this.wsteppes.push(HealthData));
                for (let key of Object.keys(this.wsteppes)) {
                    for (let value of this.wsteppes[key]) {
                        this.wobject[key] = this.wobject[key] || [];
                        this.wobject[key].push(value['value']);
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

/***/ "gY+n":
/*!**************************************************!*\
  !*** ./src/app/pages/goals/goals.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".goals-screen {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: auto;\n  overflow: scroll;\n  overflow-x: hidden;\n  background-color: #1f1f1f;\n}\n\n.text_header {\n  color: seashell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnb2Fscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUFrQixrQkFBQTtFQUNsQix5QkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6ImdvYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvYWxzLXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiBhdXRvOyAgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgb3ZlcmZsb3cteDpoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpXG59XG4udGV4dF9oZWFkZXJ7XG4gICAgY29sb3I6IHNlYXNoZWxsO1xufVxuIl19 */");

/***/ }),

/***/ "guXm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav \n      #drawer \n      class=\"sidenav\" \n      [ngClass]=\"{hidden: (isHandset | async)!.matches}\"\n      fixedInViewport=\"false\"\n      [attr.role]=\"isHandset ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset | async)!.matches ? 'over' : 'side'\"\n      [opened]=\"!(isHandset | async)!.matches\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <!-- <a mat-list-item href=\"#\" routerLink=\"\">Link 1</a> -->\n      <a mat-list-item routerLink=\"/goals\">Tavoite</a>\n      <a mat-list-item routerLink=\"/tips\">Tips & Tricks</a>\n      <a mat-list-item routerLink=\"/hobbies\">Harrastukset</a>\n      <a mat-list-item routerLink=\"/settings\">Asetukset</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar class=\"mat-toolbar\">\n      <span class=\"spacer\"></span>\n      <span class=\"terppi\">Terppi</span>\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"(isHandset | async)!.matches\">\n        <mat-icon class=\"mat-icon\" aria-label=\"Side nav toggle icon\">menu</mat-icon> <!-- to use different icons just replace \"menu\". Check backupterppi.txt  -Roni personal memo -->\n      </button>\n      <!-- <span class=\"terppi\">Terppi</span> -->\n    </mat-toolbar>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "hDt9":
/*!************************************************!*\
  !*** ./src/app/pages/tips/tips.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tips-screen {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: auto;\n  overflow: scroll;\n  overflow-x: hidden;\n  background-color: #1f1f1f;\n}\n\n.text_header {\n  color: seashell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQWtCLGtCQUFBO0VBQ2xCLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0oiLCJmaWxlIjoidGlwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXBzLXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgbWFyZ2luOiBhdXRvOyAgXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgb3ZlcmZsb3cteDpoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpXG59XG4udGV4dF9oZWFkZXJ7XG4gICAgY29sb3I6IHNlYXNoZWxsO1xufVxuIl19 */");

/***/ }),

/***/ "j3dF":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-screen {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  margin: auto;\n  overflow: scroll;\n  overflow-x: hidden;\n  background-color: #1f1f1f;\n}\n\n.h1 {\n  text-align: center;\n  color: seashell;\n}\n\n.text_header {\n  position: relative;\n  left: 30%;\n  text-align: left;\n  color: seashell;\n}\n\n.button_save {\n  position: relative;\n  left: 5%;\n  width: 110px;\n  height: 50px;\n  background-color: #3b963b;\n  color: seashell;\n  border-color: green;\n}\n\n.button_delete {\n  position: relative;\n  left: 5%;\n  width: 110px;\n  height: 50px;\n  background-color: #bd3434;\n  color: seashell;\n  border-color: red;\n}\n\n.input {\n  margin-left: 50%;\n  color: seashell;\n  background-color: #1f1f1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUFrQixrQkFBQTtFQUNsQix5QkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBT0oiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3Mtc2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICBtYXJnaW46IGF1dG87ICBcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSlcbn1cbi5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBzZWFzaGVsbDtcbn1cbi50ZXh0X2hlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMzAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHNlYXNoZWxsO1xufVxuLmJ1dHRvbl9zYXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNSU7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDE1MCwgNTkpO1xuICAgIGNvbG9yOiBzZWFzaGVsbDtcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xufVxuLmJ1dHRvbl9kZWxldGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1JTtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODksIDUyLCA1Mik7XG4gICAgY29sb3I6IHNlYXNoZWxsO1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xufVxuLmlucHV0e1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgY29sb3I6IHNlYXNoZWxsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcbn1cbiJdfQ== */");

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

/***/ "lkCc":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "mPqy");
/* harmony import */ var _settings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss */ "j3dF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _settings_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/product */ "KL4E");
/* harmony import */ var _settings_shared_appsettings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/shared/appsettings.service */ "ZHfr");






let SettingsComponent = class SettingsComponent {
    constructor(appSettingsService) {
        this.appSettingsService = appSettingsService;
    }
    ngOnInit() {
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {
            this.product = new _settings_product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
            this.product.userName = this.settings.defaultName;
            this.product.age = this.settings.defaultAge;
            this.product.email = this.settings.defaultEmail;
        });
    }
    saveSettings() {
        this.settings.defaultName = this.product.userName;
        this.settings.defaultAge = this.product.age;
        this.settings.defaultEmail = this.product.email;
        this.appSettingsService.saveSettings(this.settings);
    }
    saveProduct() {
    }
    deleteSettings() {
        this.appSettingsService.deleteSettings();
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _settings_shared_appsettings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "product-detail",
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsComponent);



/***/ }),

/***/ "mPqy":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"settings-screen\" *ngIf=\"product\">\n  <h1 class=\"h1\">Settings</h1>\n    <table>\n      <tbody class=\"body\">\n        <tr>\n          <td class=\"text_header\">Käyttäjänimi:</td>\n          <td>\n            <input class=\"input\" [(ngModel)]=\"product.userName\" />\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text_header\">Ikä:</td>\n          <td>\n            <input class=\"input\" [(ngModel)]=\"product.age\" />\n          </td>\n        </tr>\n        <tr>\n          <td class=\"text_header\">Sähköposti:</td>\n          <td>\n            <input class=\"input\" [(ngModel)]=\"product.email\" />\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"button_save\" (click)=\"saveProduct()\">Save</button>\n      <button class=\"button_save\" (click)=\"saveSettings()\">\n        Save Settings\n        </button>\n        <button class=\"button_delete\" (click)=\"deleteSettings()\">\n            Delete Settings\n            </button>\n    </div>\n  </div>");

/***/ }),

/***/ "mbft":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-screen {\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 91%;\n  background-color: #1f1f1f;\n  overflow: scroll;\n}\n\n.home-screen-welcome {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.home-screen-text-wrapper {\n  text-align: center;\n  color: seashell;\n}\n\n.home-screen-text-wrapper h1 {\n  font-size: 44px;\n}\n\n.home-screen-spinners {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.home-screen-spinners .spinner-wrapper {\n  position: relative;\n  margin-bottom: 7px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  width: 250px;\n  height: 250px;\n  padding: 1em;\n}\n\n.spinner-container {\n  position: absolute;\n  height: 250px;\n  width: 250px;\n  justify-content: center;\n  align-items: center;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nsvg.radial-progress {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  transform: rotate(-90deg);\n}\n\nsvg.radial-progress circle {\n  fill: rgba(0, 0, 0, 0);\n  stroke: #3aaed8;\n  stroke-dashoffset: 565.486677646;\n  stroke-width: 20;\n  stroke-linecap: round;\n}\n\nsvg.radial-progress circle.circle-shadow {\n  opacity: 0.25;\n}\n\nsvg.radial-progress circle.circle-complete {\n  stroke-dasharray: 565.486677646;\n}\n\nsvg.radial-progress text {\n  fill: black;\n  text-anchor: middle;\n}\n\nsvg.radial-progress#radial-progress-2 circle {\n  stroke-dashoffset: 439.822971503;\n  stroke-width: 15;\n  stroke: #f7dd72;\n}\n\nsvg.radial-progress#radial-progress-2 circle.circle-complete {\n  stroke-dasharray: 439.822971503;\n}\n\nsvg.radial-progress#radial-progress-3 circle {\n  stroke-dashoffset: 326.725635973;\n  stroke-width: 13;\n  stroke: #5dd39e;\n}\n\nsvg.radial-progress#radial-progress-3 circle.circle-complete {\n  stroke-dasharray: 326.725635973;\n}\n\n.spinner-scores-wrapper {\n  text-align: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 4rem;\n}\n\n.spinner-scores-wrapper .liikunta-scores {\n  font-size: 13px;\n}\n\n.spinner-scores-wrapper #liikuntaScoresID .mat-expansion-panel {\n  background-color: #5dd39e;\n}\n\n.spinner-scores-wrapper #liikuntaScoresID #mat-expansion-panel-header-0 {\n  background-color: #5dd39e;\n}\n\n.spinner-scores-wrapper #ruokailuScoresID .mat-expansion-panel {\n  background-color: #f7dd72;\n}\n\n.spinner-scores-wrapper #ruokailuScoresID #mat-expansion-panel-header-1 {\n  background-color: #f7dd72;\n}\n\n.spinner-scores-wrapper #nukkuminenScoresID.nukkuminen-scores {\n  margin-bottom: 2rem;\n}\n\n.spinner-scores-wrapper #nukkuminenScoresID .mat-expansion-panel {\n  background-color: #3aaed8;\n}\n\n.spinner-scores-wrapper #nukkuminenScoresID #mat-expansion-panel-header-2 {\n  background-color: #3aaed8;\n}\n\n/*\n:host #liikuntaScoresID {\n    .mat-expansion-panel{\n        background-color: rgb(93, 211, 158);\n    }\n    #mat-expansion-panel-header-0{\n        background-color: rgb(93, 211, 158);\n    }\n}\n\n:host #ruokailuScoresID {\n    .mat-expansion-panel{\n        background-color: rgb(247, 221, 114);\n    }\n    #mat-expansion-panel-header-1{\n        background-color: rgb(247, 221, 114);\n    }\n}\n\n:host #nukkuminenScoresID {\n    &.nukkuminen-scores {\n        margin-bottom: 2rem;\n    }\n    .mat-expansion-panel{\n        background-color: rgb(58, 174, 216);\n    }\n    #mat-expansion-panel-header-2{\n        background-color: rgb(58, 174, 216);\n    }\n}\n\n\n.footer {\n    z-index: 0;\n    position: relative;\n    height: 10%;\n    width: 100%;\n}\n*/\n\n/*\n.home-screen {\n    //width: 100 %;\n    //margin-left: auto;\n    //margin-right: auto;\n    width: 100%;\n    position: fixed; \n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    margin: auto;\n    height: 87%;\n    overflow: scroll; overflow-x:hidden;\n    //justify-content: space-between;\n    background-color: rgb(31, 31, 31)\n    //border-radius: 12px;\n}\n\n\n.home-screen-welcome {\n    text-align: center;\n    margin-top: 2rem;\n\n}\n\n.home-screen-text-wrapper {\n    margin-left: auto;\n    margin-right: auto;\n    height: 4rem;\n    max-width: 40%;\n    padding-top: 1.5rem;\n    //background-color:seagreen;\n    color: seashell;\n    margin-bottom: 42px;\n    border-radius: 12px;\n\n}\n*/\n\n/*\nmat-progress-spinner {\n\n    ::ng-deep circle {\n        stroke: #33dd82;\n    }\n}\n*/\n\n/*\n.spinner-scores-wrapper{\n    color: seashell;\n    text-align: center;\n    max-width: fit-content;\n    margin-left: auto;\n    margin-right: auto;\n}\n*/\n\n@media (min-width: 760px) {\n  .home-Card {\n    max-width: 600px;\n    min-height: 300px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 4rem;\n  }\n}\n\n@media (max-width: 760px) {\n  .home-screen-text-wrapper {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBQ0k7RUFDSSxlQUFBO0FBQ1I7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURSOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFKUjs7QUFNUTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpaOztBQU1ZO0VBQ0ksYUFBQTtBQUpoQjs7QUFNWTtFQUNJLCtCQUFBO0FBSmhCOztBQVNRO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBUFo7O0FBVVE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVJaOztBQVVZO0VBQ0ksK0JBQUE7QUFSaEI7O0FBWVE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVZaOztBQVlZO0VBQ0ksK0JBQUE7QUFWaEI7O0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFrQkk7RUFDSSxlQUFBO0FBaEJSOztBQW1CUTtFQUNJLHlCQUFBO0FBakJaOztBQW1CUTtFQUNJLHlCQUFBO0FBakJaOztBQXFCUTtFQUNJLHlCQUFBO0FBbkJaOztBQXFCUTtFQUNJLHlCQUFBO0FBbkJaOztBQXVCUTtFQUNJLG1CQUFBO0FBckJaOztBQXVCUTtFQUNJLHlCQUFBO0FBckJaOztBQXVCUTtFQUNJLHlCQUFBO0FBckJaOztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7O0FBeUNBOzs7Ozs7O0NBQUE7O0FBU0E7Ozs7Ozs7O0NBQUE7O0FBaUJBO0VBRUk7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBbENOO0FBQ0Y7O0FBdUNBO0VBQ0k7SUFDSSxlQUFBO0VBckNOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXNjcmVlbiB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmhvbWUtc2NyZWVuLXdlbGNvbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIFxyXG59XHJcblxyXG4uaG9tZS1zY3JlZW4tdGV4dC13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3Bpbm5lciBzY3NzXHJcbi5ob21lLXNjcmVlbi1zcGlubmVycyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAuc3Bpbm5lci13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uc3Bpbm5lci1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbnN2Z3tcclxuICAgICYucmFkaWFsLXByb2dyZXNzIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2lyY2xlIHtcclxuICAgICAgICAgICAgZmlsbDogcmdiYSgwLDAsMCwwKTtcclxuICAgICAgICAgICAgc3Ryb2tlOiByZ2IoNTgsIDE3NCwgMjE2KTtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDU2NS40ODY2Nzc2NDY7IFxyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDIwO1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcblxyXG4gICAgICAgICAgICAmLmNpcmNsZS1zaGFkb3cgeyBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jaXJjbGUtY29tcGxldGUgeyBcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDU2NS40ODY2Nzc2NDY7IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dHtcclxuICAgICAgICAgICAgZmlsbDogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiNyYWRpYWwtcHJvZ3Jlc3MtMiBjaXJjbGV7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA0MzkuODIyOTcxNTAzO1xyXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDE1O1xyXG4gICAgICAgICAgICBzdHJva2U6IHJnYigyNDcsIDIyMSwgMTE0KTtcclxuXHJcbiAgICAgICAgICAgICYuY2lyY2xlLWNvbXBsZXRlIHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQzOS44MjI5NzE1MDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYjcmFkaWFsLXByb2dyZXNzLTMgY2lyY2xle1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMzI2LjcyNTYzNTk3MztcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxMztcclxuICAgICAgICAgICAgc3Ryb2tlOiByZ2IoOTMsIDIxMSwgMTU4KTtcclxuXHJcbiAgICAgICAgICAgICYuY2lyY2xlLWNvbXBsZXRlIHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMyNi43MjU2MzU5NzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBTY29yZXMgc2Nzc1xyXG4uc3Bpbm5lci1zY29yZXMtd3JhcHBlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcblxyXG5cclxuICAgIC5saWlrdW50YS1zY29yZXN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgI2xpaWt1bnRhU2NvcmVzSUQge1xyXG4gICAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDIxMSwgMTU4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLTB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MywgMjExLCAxNTgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNydW9rYWlsdVNjb3Jlc0lEIHtcclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjIxLCAxMTQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItMXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjIxLCAxMTQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNudWtrdW1pbmVuU2NvcmVzSUQge1xyXG4gICAgICAgICYubnVra3VtaW5lbi1zY29yZXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCAxNzQsIDIxNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0ye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDE3NCwgMjE2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLypcclxuOmhvc3QgI2xpaWt1bnRhU2NvcmVzSUQge1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkzLCAyMTEsIDE1OCk7XHJcbiAgICB9XHJcbiAgICAjbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItMHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTMsIDIxMSwgMTU4KTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgI3J1b2thaWx1U2NvcmVzSUQge1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjIxLCAxMTQpO1xyXG4gICAgfVxyXG4gICAgI21hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLTF7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjIxLCAxMTQpO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCAjbnVra3VtaW5lblNjb3Jlc0lEIHtcclxuICAgICYubnVra3VtaW5lbi1zY29yZXMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDE3NCwgMjE2KTtcclxuICAgIH1cclxuICAgICNtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci0ye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgMTc0LCAyMTYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmZvb3RlciB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4qL1xyXG4vKlxyXG4uaG9tZS1zY3JlZW4ge1xyXG4gICAgLy93aWR0aDogMTAwICU7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogODclO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzEsIDMxKVxyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmhvbWUtc2NyZWVuLXdlbGNvbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIFxyXG59XHJcblxyXG4uaG9tZS1zY3JlZW4tdGV4dC13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOnNlYWdyZWVuO1xyXG4gICAgY29sb3I6IHNlYXNoZWxsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG59XHJcbiovXHJcblxyXG5cclxuLypcclxubWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgY2lyY2xlIHtcclxuICAgICAgICBzdHJva2U6ICMzM2RkODI7XHJcbiAgICB9XHJcbn1cclxuKi9cclxuXHJcbi8qXHJcbi5zcGlubmVyLXNjb3Jlcy13cmFwcGVye1xyXG4gICAgY29sb3I6IHNlYXNoZWxsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyB0b2RvIHPDpMOkZMOkIGthaWtraSB0b2ltaW1hYW4gaXNvaW1taWxsYSBuw6R5dMO2aWxsw6RcclxuQG1lZGlhKG1pbi13aWR0aDogNzYwcHgpe1xyXG4gICAgLy8gb2xkXHJcbiAgICAuaG9tZS1DYXJke1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzYwcHgpe1xyXG4gICAgLmhvbWUtc2NyZWVuLXRleHQtd3JhcHBlcntcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  overflow: hidden;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\n.mat-toolbar {\n  background: #424242;\n  overflow: hidden;\n}\n\n.mat-icon {\n  color: white;\n}\n\n.terppi {\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n@media (min-width: 768px) {\n  .sidenav {\n    display: none;\n  }\n}\n\n/*.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFDQTtFQUNDLFlBQUE7RUFDQSx5Q0FBQTtBQUVEOztBQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtBQUlEOztBQUZBO0VBQ0MsWUFBQTtBQUtEOztBQUhBO0VBQ0MsY0FBQTtBQU1EOztBQUpBO0VBQ0M7SUFDQyxhQUFBO0VBT0E7QUFDRjs7QUFMQTs7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoibWFpbi1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2lkZW5hdiB7XG5cdHdpZHRoOiAyMDBweDtcblx0Ym94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwwLDAsLjI0KTtcbn1cbi5tYXQtdG9vbGJhciB7XG5cdGJhY2tncm91bmQ6ICM0MjQyNDI7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWF0LWljb24ge1xuXHRjb2xvcjogd2hpdGU7XG59XG4udGVycHBpIHtcblx0Y29sb3I6IHdoaXRlO1xufVxuLnNwYWNlciB7XG5cdGZsZXg6IDEgMSBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdC5zaWRlbmF2IHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG4vKi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiovXG4iXX0= */");

/***/ }),

/***/ "ty8B":
/*!******************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".BottomNav {\n  position: fixed;\n  height: auto;\n  height: 10%;\n  bottom: 0;\n  z-index: 10;\n  /*\n  z-index: 1000;\n  */\n  display: flex;\n  justify-content: space-between;\n  padding: 2em;\n  background-color: #424242;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 2px 2px 4px 5px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n}\n\n.material-icons {\n  color: white;\n}\n\n.material-icons:hover {\n  transform: scale(1.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvdHRvbS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBOztHQUFBO0VBR0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRXlDLDhDQUFBO0VBQ0Esc0JBQUE7RUFDMUMsZ0NBQUE7RUFBMEMsbURBQUE7QUFHM0M7O0FBREE7RUFDRSxZQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtBQUlGIiwiZmlsZSI6ImJvdHRvbS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQm90dG9tTmF2eyAgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDEwJTtcbiAgYm90dG9tOiAwOyBcbiAgei1pbmRleDogMTA7XG4gIC8qXG4gIHotaW5kZXg6IDEwMDA7XG4gICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuXG4td2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjOyAgLyogU2FmYXJpIDMtNCwgaU9TIDQuMC4yIC0gNC4yLCBBbmRyb2lkIDIuMysgKi9cbi1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7ICAvKiBGaXJlZm94IDMuNSAtIDMuNiAqL1xuIGJveC1zaGFkb3c6ICAgICAgICAycHggMnB4IDRweCA1cHggI2NjYzsgIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi9cbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdGVyaWFsLWljb25zOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 20%;\n  height: 20%;\n}\n\nh1 {\n  color: white;\n}\n\n.main {\n  background-color: #1f1f1f;\n  color: white;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: auto;\n  height: 87%;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n\n.chart-wrapper {\n  margin-top: 1rem;\n  margin-bottom: 50px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFBa0Isa0JBQUE7QUFFdEI7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1nIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjAlO1xufVxuXG5oMSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA4NyU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgb3ZlcmZsb3cteDpoaWRkZW47XG59XG4uY2hhcnQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */");

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

/***/ "zgTX":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/shared/appsettings.ts ***!
  \******************************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
class AppSettings {
    constructor() {
        this.defaultName = "Jotain";
        this.defaultEmail = "joku@email.com";
        this.defaultAge = 100;
    }
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