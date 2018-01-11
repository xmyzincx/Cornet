webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color: firebrick;\r\n    padding: 10px;\r\n}\r\n\r\nh2 {\r\n    color: dodgerblue\r\n}\r\n\r\nh3 {\r\n    color: yellowgreen\r\n}\r\n\r\n.padding-0{\r\n    padding-right:5;\r\n    padding-left:5;\r\n}\r\n\r\n#c1, #c2, #c3 {\r\n    width: 33%;\r\n}\r\n\r\ndiv.colored > div {\r\n    padding: 8px;\r\n    box-shadow: 0px 2px 3px 0 rgba(52, 47, 51, 0.63);\r\n    opacity: 0.9;\r\n    text-align: center;\r\n  }\r\n  \r\n  \r\n  div.colored.box.nopad > div {\r\n    padding: 0;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <h1> {{ title }}</h1>\n  </div>\n  <div>\n    <div>\n      <app-map></app-map>\n    </div>\n    <div>\n      <app-chart></app-chart>\n    </div>\n\n    <div>\n      <app-sensing-database></app-sensing-database>\n    </div>\n    <div>\n      <app-nodes-database></app-nodes-database>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CORNET Graphical User Interface';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_service__ = __webpack_require__("../../../../../src/app/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sensing_database_sensing_database_component__ = __webpack_require__("../../../../../src/app/sensing-database/sensing-database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nodes_database_nodes_database_component__ = __webpack_require__("../../../../../src/app/nodes-database/nodes-database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sensing_database_sensing_database_component__["a" /* SensingDatabaseComponent */],
            __WEBPACK_IMPORTED_MODULE_7__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_6__nodes_database_nodes_database_component__["a" /* NodesDatabaseComponent */],
            __WEBPACK_IMPORTED_MODULE_17__chart_chart_component__["a" /* ChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_cdk_table__["m" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["B" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["A" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["C" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["D" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["E" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["F" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBeocaV7vWoTY_ob41sR4oKRgRNNUrYxs4'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__database_service__["a" /* DatabaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    color: dodgerblue;\r\n    /* color: rgba(255, 99, 132, 1);\r\n    color: rgba(54, 162, 235, 1);\r\n    color: rgba(255, 206, 86, 1);\r\n    color: rgba(0, 255, 0, 1);\r\n    color: rgba(102, 0, 204, 1);\r\n    color: rgba(255, 128, 0, 1); */\r\n\r\n  }\r\n\r\n.chart {\r\n    width: 100%;\r\n}\r\n\r\n/* color: rgba(238, 83, 79, 1);\r\ncolor: rgba(238, 83, 79, 1);\r\ncolor: rgba(255, 168, 39, 1); */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<div class=\"container mat-elevation-z8\">\n    <div class=\"chart\" style=\"display: block\">\n      <canvas baseChart #myChart=\"base-chart\" [datasets]=\"barChartData\" [colors]=\"colors\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n        [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_service__ = __webpack_require__("../../../../../src/app/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
// Importand Note: Seems like ng2-charts is not very good in error handling.
// So if you get Cannot read property 'data' of undefined at charts.js:90,
// then open charts.js from the modulefolder and go to line 90, and 
// wrape it in if condition for checking undefined.
// For more info, read "https://github.com/valor-software/ng2-charts/issues/806"
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ChartComponent = class ChartComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.title = 'Sensor chart';
        this.updateCounter = 0;
        this.totalSensors = 0;
        this.barChartLabels = ['2750', '2800', '2850', '2900', '2950', '3000', '3050', '3100', '3150', '3200', '3250', '3300', '3350', '3400'];
        this.sensorsList = [];
        this.barChartType = 'rangeBar';
        this.barChartLegend = true;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                yAxes: [{
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Power (dBm)'
                        },
                        ticks: {
                            beginAtZero: false,
                            stepValue: 4,
                            max: -10,
                            min: -110,
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'LTE Band 7 DL EARFCN (2620-2690 MHz)'
                        }
                    }]
            }
        };
        this.colors = [
            {
                backgroundColor: 'rgb(230, 25, 75)'
            },
            {
                backgroundColor: 'rgb(60, 180, 75)'
            },
            {
                backgroundColor: 'rgb(255, 225, 25)'
            },
            {
                backgroundColor: 'rgb(0, 130, 200)'
            },
            {
                backgroundColor: 'rgb(245, 130, 48)'
            },
            {
                backgroundColor: 'rgb(145, 30, 180)'
            },
            {
                backgroundColor: 'rgb(70, 240, 240)'
            },
            {
                backgroundColor: 'rgb(240, 50, 230)'
            },
            {
                backgroundColor: 'rgb(210, 245, 60)'
            },
            {
                backgroundColor: 'rgb(250, 190, 190)'
            },
            {
                backgroundColor: 'rgb(0, 128, 128)'
            },
            {
                backgroundColor: 'rgb(128, 0, 0)'
            },
            {
                backgroundColor: 'rgb(128, 128, 0)'
            },
            {
                backgroundColor: 'rgb(0, 0, 128)'
            },
        ];
    }
    // events
    chartClicked(e) {
    }
    chartHovered(e) {
    }
    ngOnInit() {
        this.dbService.allChannels.subscribe(tempChannelsList => {
            this.channelsList = tempChannelsList;
            this.barChartData = [];
            this.sortChannelData();
        });
        this.barChartData = [
            {
                data: [{
                        min: 0,
                        max: 0
                    }, {
                        min: 0,
                        max: 0
                    }, {
                        min: 0,
                        max: 0
                    }],
                label: '',
            },
        ];
    }
    sortChannelData() {
        this.barChartData = [];
        // Sort this list if neccessary. Currently it is unsorted.
        let uniqueSensorIds = [...new Set(this.channelsList.map(item => item.sensorId))];
        for (var sensorId in uniqueSensorIds) {
            var channelPowerList = [{
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }, {
                    min: 0,
                    max: 0,
                }];
            var tempChartDataSet = {
                label: "",
                data: [{
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }, {
                        min: 0,
                        max: 0,
                    }],
            };
            tempChartDataSet.label = 'Sensor-' + uniqueSensorIds[sensorId];
            var filteredChannels = this.channelsList.filter((channel) => channel.sensorId === uniqueSensorIds[sensorId]);
            for (var channel in filteredChannels) {
                if (parseFloat(filteredChannels[channel].power) < 0) {
                    channelPowerList[parseInt(filteredChannels[channel].channel) - 1].max = parseFloat(filteredChannels[channel].power);
                    channelPowerList[parseInt(filteredChannels[channel].channel) - 1].min = -110;
                }
            }
            tempChartDataSet.data = channelPowerList;
            this.barChartData.push(tempChartDataSet);
        }
        // Below two conditions are just bubble gum fixes. There is some issue
        // and bugs with ng2-chart module that does not update the chart if new
        // dataset is added or removed from the array.
        if (this.updateCounter <= 2) {
            this.myChart.ngOnChanges({});
            this.updateCounter++;
        }
        if (this.totalSensors != uniqueSensorIds.length) {
            this.updateCounter = 2;
            this.totalSensors = uniqueSensorIds.length;
            console.log('New sensors detected.');
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myChart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], ChartComponent.prototype, "myChart", void 0);
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__database_service__["a" /* DatabaseService */]) === "function" && _b || Object])
], ChartComponent);

var _a, _b;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/database.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DatabaseService = class DatabaseService {
    constructor() {
        this.allNodesDataSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]([]);
        this.allNodes = this.allNodesDataSource.asObservable();
        this.allChannelsDataSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]([]);
        this.allChannels = this.allChannelsDataSource.asObservable();
    }
    updateNodesList(tNodesList) {
        this.allNodesDataSource.next(tNodesList);
    }
    updateChannelsList(tChannelsList) {
        this.allChannelsDataSource.next(tChannelsList);
    }
};
DatabaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DatabaseService);

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n    height: 400px;\r\n    width: 100%;\r\n  }\r\n  h2 {\r\n    color: dodgerblue\r\n  }\r\n\r\n.example-h2 {\r\n  margin: 10px;\r\n}\r\n\r\n.section {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n\r\n.mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\r\n  background-color: rgb(27, 142, 241) !important;\r\n}\r\n\r\n.mat-checkbox-inner-container {\r\ncolor: rgb(27, 142, 241) !important;\r\n}\r\n\r\n\r\ndiv.colored > div {\r\n  padding: 8px;\r\n  box-shadow: 0px 2px 3px 0 rgba(52, 47, 51, 0.63);\r\n  opacity: 0.9;\r\n  text-align: center;\r\n}\r\n\r\n\r\ndiv.colored.box.nopad > div {\r\n  padding: 0;\r\n}\r\n\r\n.map {\r\n  border: 2px solid grey;\r\n  width: 99%;\r\n  height: 400px;\r\n  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mat-elevation-z8\">\n  <div fxLayout=\"row wrap\" class=\"colored box nopad\">\n    <div fxFlex=\"33.33%\">\n      <h2>{{ title }}</h2>\n      <div class=\"map\">\n        <agm-map id=\"map\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [streetViewControl]=\"false\"\n          gestureHandling=\"cooperative\">\n          <agm-marker *ngFor=\"let m of nodesMarkerList; let i = index\" (markerClick)=\"nodeClickedMarker(m)\" [latitude]=\"m.lat\" [longitude]=\"m.lng\"\n            [iconUrl]=\"m.icon\" [visible]=\"m.visible\" [label]=\"m.label\">\n          </agm-marker>\n          <agm-marker *ngFor=\"let m of channelsMarkerList; let i = index\" (markerClick)=\"sensorClickedMarker(m)\" [latitude]=\"m.lat\"\n            [longitude]=\"m.lng\" [iconUrl]=\"m.icon\" [visible]=\"m.visible\" [label]=\"m.label\">\n          </agm-marker>\n        </agm-map>\n      </div>\n      <mat-grid-list cols=\"2\" rowHeight=\"50px\">\n        <section class=\"section\">\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            <mat-checkbox [(ngModel)]=\"nodesVisibility\">Nodes</mat-checkbox>\n            <img src={{nodeIcon}}>\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            <mat-checkbox [(ngModel)]=\"channelsVisibility\">Sensors</mat-checkbox>\n            <img src={{sensorIcon}}>\n          </mat-grid-tile>\n        </section>\n      </mat-grid-list>\n    </div>\n    <div fxFlex=\"33.33%\">\n      <h2>Sensor's detail</h2>\n      <mat-list>\n          <mat-list-item style=\"white-space: pre\"><b>Sensor ID :</b> {{ sensorMarkerDetail.sensorId }}</mat-list-item>\n          <mat-list-item style=\"white-space: pre\"><b>Channel(s) :</b> {{ sensorMarkerDetail.channel }}</mat-list-item>\n          <mat-list-item style=\"white-space: pre\"><b>Antenna height :</b> {{ sensorMarkerDetail.antHeight }}</mat-list-item>\n          <mat-list-item style=\"white-space: pre\"><b>Antenna gain :</b> {{ sensorMarkerDetail.antGain }}</mat-list-item>\n          <mat-list-item style=\"white-space: pre\"><b>Latitude :</b> {{ sensorMarkerDetail.lat }}</mat-list-item>\n          <mat-list-item style=\"white-space: pre\"><b>Longitude :</b> {{ sensorMarkerDetail.lng }}</mat-list-item>\n          <mat-list-item style=\"white-space: pre\"><b>Area type :</b> {{ sensorMarkerDetail.areaType }}</mat-list-item>\n      </mat-list>\n    </div>\n    <div fxFlex=\"33.33%\">\n      <h2>Node's detail</h2>\n      <mat-list>\n        <mat-list-item style=\"white-space: pre\"><b>ID :</b> {{ nodeMarkerDetail.nodeId }}</mat-list-item>\n        <mat-list-item style=\"white-space: pre\"><b>Name :</b> {{ nodeMarkerDetail.nodeName }}</mat-list-item>\n        <mat-list-item style=\"white-space: pre\"><b>Frequency :</b> {{ nodeMarkerDetail.freq }}</mat-list-item>\n        <mat-list-item style=\"white-space: pre\"><b>Latitude :</b> {{ nodeMarkerDetail.lat }}</mat-list-item>\n        <mat-list-item style=\"white-space: pre\"><b>Longitude :</b> {{ nodeMarkerDetail.lng }}</mat-list-item>\n      </mat-list>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_service__ = __webpack_require__("../../../../../src/app/database.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let MapComponent = class MapComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.title = 'Map';
        // Initial centering points for map.
        this.lat = 65.203277;
        this.lng = 24.8810778;
        this.zoom = 4;
        this.infoWindowOpened = null;
        this.nodeIcon = '/assets/images/m1.png';
        this.sensorIcon = '/assets/images/m2.png';
        this.nodesVisibility = true;
        this.channelsVisibility = true;
        this.nodeMarkerDetail = {
            lat: 0,
            lng: 0,
            label: 'Oulu',
            icon: this.nodeIcon,
            visible: this.nodesVisibility,
            draggable: false
        };
        this.sensorMarkerDetail = {
            lat: 0,
            lng: 0,
            label: 'Oulu',
            icon: this.nodeIcon,
            visible: this.channelsVisibility,
            draggable: false
        };
    }
    nodeClickedMarker(marker) {
        this.nodeMarkerDetail = marker;
        // console.log(marker);
    }
    sensorClickedMarker(marker) {
        this.sensorMarkerDetail = marker;
        // console.log(marker);
    }
    ngOnInit() {
        this.dbService.allNodes.subscribe(tempNodesList => {
            this.nodesList = tempNodesList;
            this.nodeMapUpdate();
        });
        this.dbService.allChannels.subscribe(tempChannelsList => {
            this.channelsList = tempChannelsList;
            this.channelMapUpdate();
        });
        // let timer = Observable.timer(10000, 1000);
        // this.subscription = timer.subscribe(t => {
        // 	console.log('timer event fired');
        // 	this.stopTimer();
        // })
    }
    nodeMapUpdate() {
        this.nodesMarkerList = [];
        if (this.nodesList.length > 0) {
            for (var index = 0; index < this.nodesList.length; index++) {
                var node = this.nodesList[index];
                // This is just for init
                var tMarker = {
                    lat: 65.203277,
                    lng: 24.8810778,
                    label: 'Oulu',
                    icon: this.nodeIcon,
                    visible: this.nodesVisibility,
                    draggable: false
                };
                tMarker.lat = parseFloat(node.latitude);
                tMarker.lng = parseFloat(node.longitude);
                tMarker.label = node.nodeName;
                tMarker.icon = this.nodeIcon;
                tMarker.visible = this.nodesVisibility;
                tMarker.draggable = false;
                tMarker.nodeId = node.nodeId;
                tMarker.nodeName = node.nodeName;
                tMarker.freq = node.freq;
                this.nodesMarkerList.push(tMarker);
            }
        }
    }
    channelMapUpdate() {
        this.channelsMarkerList = [];
        if (this.channelsList.length > 0) {
            let uniqueSensorIds = [...new Set(this.channelsList.map(item => item.sensorId))];
            for (var sensorId in uniqueSensorIds) {
                var filteredChannels = this.channelsList.filter((channel) => channel.sensorId === uniqueSensorIds[sensorId]);
                var tMarker = {
                    lat: 65.203277,
                    lng: 24.8810778,
                    label: 'Oulu',
                    icon: this.nodeIcon,
                    visible: this.channelsVisibility,
                    draggable: false
                };
                // Since it is assumed that sensorId will be unique and the filtered channels 
                // will be on the same location i.e. same latitude and longitude,
                // therefore taking 0th element of the filtered channel array.
                tMarker.lat = parseFloat(filteredChannels[0].latitude);
                tMarker.lng = parseFloat(filteredChannels[0].longitude);
                tMarker.label = uniqueSensorIds[sensorId];
                tMarker.icon = this.sensorIcon;
                tMarker.visible = this.channelsVisibility;
                tMarker.draggable = false;
                tMarker.sensorId = uniqueSensorIds[sensorId];
                tMarker.channel = filteredChannels.map(a => a.channel).toString();
                tMarker.timestamp = filteredChannels[0].timestamp;
                tMarker.antHeight = filteredChannels[0].antHeight;
                tMarker.antGain = filteredChannels[0].antGain;
                tMarker.areaType = filteredChannels[0].areaType;
                this.channelsMarkerList.push(tMarker);
            }
        }
    }
    stopTimer() {
        this.subscription.unsubscribe();
    }
};
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__database_service__["a" /* DatabaseService */]) === "function" && _a || Object])
], MapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/nodes-database/nodes-database.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    color: dodgerblue\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .header {\r\n    min-height: 64px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-left: 24px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  .mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n\r\n  .mat-header-cell {\r\n    font-size: 16px;\r\n    color: black;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n\r\n  .mat-cell {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;    \r\n    -webkit-box-pack: center;    \r\n        -ms-flex-pack: center;    \r\n            justify-content: center;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nodes-database/nodes-database.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n\n<div class=\"container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"nodesDataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Sensor ID Column -->\n    <ng-container matColumnDef=\"nodeId\">\n      <mat-header-cell *matHeaderCellDef >  Node ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.nodeId}} </mat-cell>\n    </ng-container>\n\n    <!-- Channel Column -->\n    <ng-container matColumnDef=\"nodeName\">\n      <mat-header-cell *matHeaderCellDef > Node Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.nodeName}} </mat-cell>\n    </ng-container>\n\n    <!-- Power Column -->\n    <ng-container matColumnDef=\"freq\">\n      <mat-header-cell *matHeaderCellDef > Frequency </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.freq}} </mat-cell>\n    </ng-container>\n\n    <!-- Latitude Column -->\n    <ng-container matColumnDef=\"latitude\">\n      <mat-header-cell *matHeaderCellDef > Latitude </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.latitude\"> {{row.latitude}} </mat-cell>\n    </ng-container>\n\n    <!-- Longitude Column -->\n    <ng-container matColumnDef=\"longitude\">\n      <mat-header-cell *matHeaderCellDef > Longitude </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.longitude\"> {{row.longitude}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nodes-database/nodes-database.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesDatabaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__database_service__ = __webpack_require__("../../../../../src/app/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodesDataSource__ = __webpack_require__("../../../../../src/app/nodes-database/nodesDataSource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nodesDatabase__ = __webpack_require__("../../../../../src/app/nodes-database/nodesDatabase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let NodesDatabaseComponent = class NodesDatabaseComponent {
    constructor(http, dbService) {
        this.title = 'Nodes Database';
        this.displayedColumns = ['nodeId', 'nodeName', 'freq', 'latitude', 'longitude'];
        this.nodesDatabase = new __WEBPACK_IMPORTED_MODULE_3__nodesDatabase__["a" /* NodesDatabase */](http, dbService);
        this.nodesDataSource = new __WEBPACK_IMPORTED_MODULE_2__nodesDataSource__["a" /* NodesDataSource */](this.nodesDatabase);
    }
    ngOnInit() { }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSort */]) === "function" && _a || Object)
], NodesDatabaseComponent.prototype, "sort", void 0);
NodesDatabaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-nodes-database',
        template: __webpack_require__("../../../../../src/app/nodes-database/nodes-database.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nodes-database/nodes-database.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__database_service__["a" /* DatabaseService */]) === "function" && _c || Object])
], NodesDatabaseComponent);

var _a, _b, _c;
//# sourceMappingURL=nodes-database.component.js.map

/***/ }),

/***/ "../../../../../src/app/nodes-database/nodesDataSource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");




/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class NodesDataSource extends __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */] {
    constructor(_nodesDatabase) {
        super();
        this._nodesDatabase = _nodesDatabase;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this._nodesDatabase.getAllNodesData();
    }
    disconnect() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NodesDataSource;

//# sourceMappingURL=nodesDataSource.js.map

/***/ }),

/***/ "../../../../../src/app/nodes-database/nodesDatabase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);




/** An example database that the data source uses to retrieve data for the table. */
class NodesDatabase {
    constructor(http, dbService) {
        this.http = http;
        this.dbService = dbService;
        this.url = 'http://localhost:3000/api/allNodes';
        this.pollingInterval = 3000;
    }
    getAllNodesData() {
        // this.sanitizer.bypassSecurityTrustUrl(this.url)
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].interval(this.pollingInterval).flatMap(() => {
            return this.http.get(this.url)
                .map((res) => {
                this.dbService.updateNodesList(res.json().nodes);
                return res.json().nodes;
            })
                .catch((error) => __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'));
        });
    }
    ngOnInit() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NodesDatabase;

//# sourceMappingURL=nodesDatabase.js.map

/***/ }),

/***/ "../../../../../src/app/sensing-database/sensing-database.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    color: dodgerblue\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .header {\r\n    min-height: 64px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-left: 24px;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  \r\n  .mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n\r\n  .mat-header-cell {\r\n    font-size: 16px;\r\n    color: black;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n\r\n  .mat-cell {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;    \r\n    -webkit-box-pack: center;    \r\n        -ms-flex-pack: center;    \r\n            justify-content: center;\r\n  }\r\n\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sensing-database/sensing-database.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n\n<div class=\"container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"sensingDataSource\" >\n\n    <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Sensor ID Column -->\n    <ng-container matColumnDef=\"sensorId\">\n      <mat-header-cell *matHeaderCellDef > Sensor ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.sensorId}} </mat-cell>\n    </ng-container>\n\n    <!-- Channel Column -->\n    <ng-container matColumnDef=\"channel\">\n      <mat-header-cell *matHeaderCellDef > Channel Number </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.channel}} </mat-cell>\n    </ng-container>\n\n    <!-- Power Column -->\n    <ng-container matColumnDef=\"power\">\n      <mat-header-cell *matHeaderCellDef > Power </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.power}} </mat-cell>\n    </ng-container>\n\n    <!-- Timestamp Column -->\n    <ng-container matColumnDef=\"timestamp\">\n      <mat-header-cell *matHeaderCellDef > Timestamp </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.timestamp\"> {{row.timestamp * 1000 | date: 'dd-MM-yyyy mm:HH:ss'}} </mat-cell>\n    </ng-container>\n\n    <!-- Latitude Column -->\n    <ng-container matColumnDef=\"latitude\">\n      <mat-header-cell *matHeaderCellDef > Latitude </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.latitude\"> {{row.latitude}} </mat-cell>\n    </ng-container>\n\n    <!-- Longitude Column -->\n    <ng-container matColumnDef=\"longitude\">\n      <mat-header-cell *matHeaderCellDef > Longitude </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.longitude\"> {{row.longitude}} </mat-cell>\n    </ng-container>\n\n    <!-- Antenna Height Column -->\n    <ng-container matColumnDef=\"antHeight\">\n      <mat-header-cell *matHeaderCellDef > Antenna Height </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.antHeight\"> {{row.antHeight}} </mat-cell>\n    </ng-container>\n\n    <!-- Antenna Gain Column -->\n    <ng-container matColumnDef=\"antGain\">\n      <mat-header-cell *matHeaderCellDef > Antenna Gain </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.antGain\"> {{row.antGain}} </mat-cell>\n    </ng-container>\n\n    <!-- Area Type Column -->\n    <ng-container matColumnDef=\"areaType\">\n      <mat-header-cell *matHeaderCellDef > Area Type </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.areaType\"> {{row.areaType}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/sensing-database/sensing-database.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensingDatabaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__database_service__ = __webpack_require__("../../../../../src/app/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sensingDatabase__ = __webpack_require__("../../../../../src/app/sensing-database/sensingDatabase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sensingDataSource__ = __webpack_require__("../../../../../src/app/sensing-database/sensingDataSource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let SensingDatabaseComponent = class SensingDatabaseComponent {
    constructor(http, dbService, sanitizer) {
        this.title = 'Sensing Database';
        this.displayedColumns = ['sensorId', 'channel', 'power', 'timestamp', 'latitude', 'longitude', 'antHeight', 'antGain', 'areaType'];
        this.sensingDatabase = new __WEBPACK_IMPORTED_MODULE_8__sensingDatabase__["a" /* SensingDatabase */](http, dbService, sanitizer);
        this.sensingDataSource = new __WEBPACK_IMPORTED_MODULE_9__sensingDataSource__["a" /* SensingDataSource */](this.sensingDatabase);
    }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatSort */]) === "function" && _a || Object)
], SensingDatabaseComponent.prototype, "sort", void 0);
SensingDatabaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-sensing-database',
        template: __webpack_require__("../../../../../src/app/sensing-database/sensing-database.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sensing-database/sensing-database.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__database_service__["a" /* DatabaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], SensingDatabaseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sensing-database.component.js.map

/***/ }),

/***/ "../../../../../src/app/sensing-database/sensingDataSource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");




/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class SensingDataSource extends __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */] {
    constructor(_sensingDatabase) {
        super();
        this._sensingDatabase = _sensingDatabase;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this._sensingDatabase.getAllChannelsData();
    }
    disconnect() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SensingDataSource;

//# sourceMappingURL=sensingDataSource.js.map

/***/ }),

/***/ "../../../../../src/app/sensing-database/sensingDatabase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);




/** An example database that the data source uses to retrieve data for the table. */
class SensingDatabase {
    constructor(http, dbService, sanitizer) {
        this.http = http;
        this.dbService = dbService;
        this.sanitizer = sanitizer;
        this.url = 'http://localhost:3000/api/allChannels';
        this.pollingInterval = 3000;
    }
    getAllChannelsData() {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].interval(this.pollingInterval).flatMap(() => {
            return this.http.get(this.url)
                .map((res) => {
                this.dbService.updateChannelsList(res.json().channels);
                return (res.json().channels);
            })
                .catch((error) => __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(error || 'Server error'));
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SensingDatabase;

//# sourceMappingURL=sensingDatabase.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map