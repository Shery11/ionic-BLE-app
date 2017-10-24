webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_ble__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save_for_later_save_for_later__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//const THERMOMETER_SERVICE = 'ffe0';
var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, ble, ngZone) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.ble = ble;
        this.ngZone = ngZone;
        this.devices = [];
        this.showMa = false;
        this.Madevcies = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
        this.scan();
        // this.push();
    };
    // pushing fake id
    // push(){
    //   for(var i =0 ;i <5; i++){
    //      this.devices.push({name:"mydevice",id:"123456",rssi:"76576"});  
    //   }
    // }
    //  showMaDevices(){
    //  this.showMa =! this.showMa;
    //console.log("filter clicked")
    //}
    HomePage.prototype.scan = function () {
        var _this = this;
        this.setStatus('Scanning for Bluetooth LE Devices');
        this.devices = []; // clear list
        this.showMa = false;
        //   this.Madevcies = [];
        this.ble.scan([], 5).subscribe(function (device) { return _this.onDeviceDiscovered(device); }, function (error) { return _this.scanError(error); });
        setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
    };
    HomePage.prototype.onDeviceDiscovered = function (device) {
        var _this = this;
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        //this.devices.push(device);
        this.ngZone.run(function () {
            _this.devices.push(device);
            //  this.Madevcies = this.devices.filter((devic) => devic.startsWith('M'));
            //  console.log('Devices start with M ' + this.Madevcies);
        });
        //  let Madevcies = this.devices.filter((devic) => devic.startsWith("MA040"));
        //  console.log("Decvies starts with M" + Madevcies)
        // this.Madevcies = this.devices.filter(function (devic) {
        //  return devic[0].toLowerCase() === 'MA';
        //});
        //console.log("Decvies starts with M" + this.Madevcies)
    };
    // If location permission is denied, you'll end up here
    HomePage.prototype.scanError = function (error) {
        this.setStatus('Error ' + error);
        var toast = this.toastCtrl.create({
            message: 'Error scanning for Bluetooth low energy devices',
            position: 'middle',
            duration: 5000
        });
        toast.present();
    };
    HomePage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    HomePage.prototype.deviceSelected = function (device) {
        console.log(JSON.stringify(device) + ' selected');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            device: device
        });
    };
    HomePage.prototype.PushToSavePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__save_for_later_save_for_later__["a" /* SaveForLaterPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Shaharyar\Desktop\PGA\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Welcome</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="scan()">\n        Scan\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n\n\n  <ion-grid>\n  <ion-row>\n\n\n   \n    <ion-col xl>\n     <div align="center">\n      <img src="assets/image.jpg">\n    </div>\n    \n    </ion-col>\n   \n  </ion-row>\n\n\n\n  <ion-row>\n    <ion-col xl>\n         <h1 align="center">Select your meter</h1>\n     </ion-col> \n  </ion-row>\n\n\n \n <ion-row>\n  <ion-col xl>\n\n  <ion-scroll style="width:100%;height:50vh" scrollY="true">\n  <ion-list padding [virtualScroll]=devices>\n  <!--  <ion-item ion-item *ngFor="let device of devices" (click)="deviceSelected(device)"> -->\n  <ion-item *virtualItem="let device" (click)="deviceSelected(device)">\n      <h2>{{ device.name || \'Unnamed\' }}</h2>\n      <p>{{ device.id }}</p>\n      <p>RSSI: {{device.rssi}}</p>\n  </ion-item>\n\n   </ion-list>\n </ion-scroll>\n  </ion-col>\n</ion-row>\n\n\n\n</ion-grid>\n\n\n</ion-content>\n\n\n<ion-footer>\n\n  <ion-toolbar>\n    <button  ion-button large full (click)="PushToSavePage()">Previous Results</button>\n  \n    <p align="center">{{ statusMessage }}</p>\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Shaharyar\Desktop\PGA\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_ble__["a" /* BLE */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_ble__["a" /* BLE */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save_for_later_save_for_later__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Bluetooth UUIDs
var SERVICE = 'ffe0';
var CHARACTERISTIC = 'ffe1';
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, ble, alertCtrl, ngZone, socialSharing, sqlite) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.socialSharing = socialSharing;
        this.sqlite = sqlite;
        this.peripheral = {};
        //  info : Ibeacon[] = [];
        this.arr = [];
        //  arrTest:any = ['Winter','17.2','32','nameOne','nameTwo'];
        this.savedData = [];
        //   tempString = "";
        // finalString = "";
        this.tempString = [];
        this.finalString = [];
        this.d = new Date();
        this.something = (function () {
            var executed = false;
            return function () {
                if (!executed) {
                    executed = true;
                    // do something
                    this.insertData();
                }
            };
        })();
        var device = navParams.get('device');
        this.setStatus('Connecting to ' + device.name || device.id);
        // This is not a promise, the device can call disconnect after it connects, so it's an observable
        this.ble.connect(device.id).subscribe(function (peripheral) { return _this.onConnected(peripheral); }, function (peripheral) { return _this.showAlert('Disconnected', 'The peripheral unexpectedly disconnected'); });
        this.time = this.d.toUTCString();
        // // test data
        //    this.Name = "Hard Red Spring wheat";
        //     this.Moisture = 5;
        //     this.temperature = 23;
        //     this.nameOne =  "21312312";
        //    this.nameTwo = "1234576";
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        this.createTable();
        console.log("Table created");
    };
    // the connection to the peripheral was successful
    DetailPage.prototype.onConnected = function (peripheral) {
        var _this = this;
        this.tempString = "";
        this.finalString = "";
        this.arr = [];
        this.peripheral = peripheral;
        this.setStatus('Connected to ' + (peripheral.name || peripheral.id));
        // Subscribe for notifications when the temperature changes
        this.ble.startNotification(this.peripheral.id, SERVICE, CHARACTERISTIC).subscribe(
        //  data => this.info = data,
        function (data) { return _this.onTemperatureChange(data); }, function (data) { return console.log(data); }, 
        //data => console.log('Data looks like that ' + data + 'Arrayed data like that ' + JSON.parse(data)) ,
        function () { return console.log('Unexpected Error', 'Failed to subscribe for changes'); });
        // Read the current value of the temperature characteristic
        this.ble.read(this.peripheral.id, SERVICE, CHARACTERISTIC).then(function (data) { return _this.onTemperatureChange(data); }, function (error) { return console.log('Unexpected Error', 'Failed to get data' + error); });
    };
    DetailPage.prototype.onTemperatureChange = function (buffer) {
        var _this = this;
        var data = new Uint8Array(buffer);
        var strr = String.fromCharCode.apply(null, data);
        console.log("string data " + strr);
        if (strr[0] == "{") {
            this.tempString = strr;
        }
        else if (strr[(strr.length) - 1] != "}") {
            this.tempString = this.tempString.concat(strr);
        }
        else if (strr[(strr.length) - 1] == "}") {
            this.finalString = this.tempString.concat(strr);
            this.tempString = "";
            var str0 = this.finalString.split("{")[1];
            var str1 = str0.split("}")[0];
            this.arr = str1.split(",");
            //  this.save();
            for (var i = 0; i < this.arr.length; i++) {
                console.log(this.arr[i]);
            }
        }
        else {
            console.log("Problem with String");
        }
        //this.SaveData();
        this.ngZone.run(function () {
            _this.Name = _this.arr[0];
            _this.Moisture = _this.arr[1];
            _this.temperature = _this.arr[2];
            _this.nameOne = _this.arr[3];
            _this.nameTwo = _this.arr[4];
        });
        //  return Promise.resolve(this.arr)
        this.something();
        console.log("Data inserted once");
    };
    DetailPage.prototype.createTable = function () {
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS Data(rowid INTEGER PRIMARY KEY ,name TEXT ,moisture TEXT,temperature TEXT, nameOne TEXT,nameTwo TEXT,time TEXT )', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    DetailPage.prototype.insertData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO Data VALUES(NULL,?,?,?,?,?,?)', [_this.arr[0],
                _this.arr[1], _this.arr[2], _this.arr[3], _this.arr[4], _this.time])
                .then(function (res) {
                console.log("Data saved successfully to DB" + res);
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    //}
    // Disconnect peripheral when leaving the page
    DetailPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave disconnecting Bluetooth');
        this.ble.disconnect(this.peripheral.id).then(
        //  () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
        function () { return console.log('Disconnected '); }, 
        //    () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
        function () { return console.log('ERROR disconnecting '); });
        //  this.arr = []
    };
    DetailPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    DetailPage.prototype.setStatus = function (message) {
        var _this = this;
        console.log(message);
        this.ngZone.run(function () {
            _this.statusMessage = message;
        });
    };
    //save(){
    //  this.dataS.save(this.arr);
    //}
    DetailPage.prototype.PushToSavePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__save_for_later_save_for_later__["a" /* SaveForLaterPage */]);
    };
    DetailPage.prototype.compilemsg = function () {
        this.msg = "Moisture" + this.arr[1] + "%" + "\n" + "Temperature" + this.arr[2] + "C" + "\n" + " Name " + this.arr[0] + "\n" + "Id 01 : " + this.arr[3]
            + "\n" + "Id 02 :" + this.arr[4];
        return this.msg.concat(" \n Thank you for using PGA Moisture Analyzers");
    };
    /*
    
    Moisture: 22%
    Temperature: 13C
    Name: Wheat
    Id 01: ----
    Id 02: aaaaaa
    
    Thank you for using PGA Moisture Analyzers
    */
    DetailPage.prototype.shareResults = function () {
        var _this = this;
        this.msg = this.compilemsg();
        var alert = this.alertCtrl.create({
            title: 'Results',
            message: 'You\'ve received your result, would you also like to share it?',
            buttons: [
                {
                    text: 'No, Thanks'
                },
                {
                    text: 'Share',
                    handler: function (_) {
                        _this.socialSharing.share(_this.msg, null, null, null);
                        console.log(" here the shared message " + _this.msg);
                    }
                }
            ]
        });
        alert.present();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Shaharyar\Desktop\PGA\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ peripheral.name || \'Device\' }} Results</ion-title>\n  <!--  <ion-buttons end>\n      <button ion-button color="primary" (click)="share()">Share\n        <ion-icon name="paper"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="padding">\n\n  <div *ngIf="arr?.length === 0">\n    <img src="assets/image.jpg" style="  display: block;\n    margin: auto !important;"> <br>\n\n    <h1 style="text-align:center;display: block;\n    margin: auto !important;">Waiting for result .....</h1>\n  </div>\n  <div *ngIf="arr?.length > 0">\n  <img src="assets/image.jpg" style="  display: block;\n  margin: auto !important;"> <br>\n <!--  <ion-card class="left">\n      <h1 style="font-size: 2.8em;"> {{Name}}</h1><br>\n      <p style="font-weight:bold;font-size: 2.5em;">Moisture </p><br>\n      <h1 style="font-size: 5.5em; color:DodgerBlue;border:2px solid">{{Moisture}} %</h1>\n        <p style="font-weight:bold;font-size: 2.5em;">Temperature</p><br>\n       <h2 style="font-size: 3.5em;color:DodgerBlue;border:2px solid">{{temperature}} C</h2>\n\n    <p style="font-weight:bold;font-size: 1.8em;">ID 01 : {{nameOne}}</p>\n    <p style="font-weight:bold;font-size: 1.8em;">ID 02 : {{nameTwo}}</p>\n  </ion-card> -->\n  <ion-card style="height:100%">\n      <h1 align="center" class="bold"> {{Name}}</h1>\n      <p align="center" class="ion-1x">Moisture </p>\n      <h1 align="center" class="ion-5x italics blue">{{Moisture}}%</h1>\n        <p align="center" class="ion-1x">Temperature</p>\n       <h2 align="center" class="ion-2x italics blue" >{{temperature}}&#176;C</h2>\n\n    <p align="center" class="ion-1x" >ID 01: {{nameOne}}</p>\n    <p align="center" class="ion-1x" >ID 02: {{nameTwo}}</p>\n  </ion-card>\n</div>\n\n\n \n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n     <button   ion-button large full (click)="PushToSavePage()">Previous Results</button>\n  <button *ngIf="arr?.length > 0" ion-button large full (click)="shareResults()">Share</button>\n    <p align="center">{{ statusMessage }}</p>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Shaharyar\Desktop\PGA\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _g || Object])
], DetailPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    DataService.prototype.getData = function () {
        return this.storage.get('data');
    };
    DataService.prototype.save = function (data) {
        //  let newData = JSON.stringify(data); // must turn the data into string to save it
        this.storage.set('data', data);
        console.log(data);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], DataService);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedDisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save_for_later_save_for_later__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SavedDisplayPage = (function () {
    function SavedDisplayPage(navCtrl, navParams, sqlite, toast, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.data = { rowid: 0, name: "", moisture: "", temperature: "", nameOne: "", nameTwo: "" };
        this.getCurrentData(navParams.get("rowid"));
    }
    SavedDisplayPage.prototype.ionViewDidLoad = function () {
    };
    SavedDisplayPage.prototype.getCurrentData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM Data WHERE rowid=?', [rowid])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.data.rowid = res.rows.item(0).rowid;
                    _this.data.name = res.rows.item(0).name;
                    _this.data.moisture = res.rows.item(0).moisture;
                    _this.data.temperature = res.rows.item(0).temperature;
                    _this.data.nameOne = res.rows.item(0).nameOne;
                    _this.data.nameTwo = res.rows.item(0).nameTwo;
                }
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    SavedDisplayPage.prototype.PushToSavePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__save_for_later_save_for_later__["a" /* SaveForLaterPage */]);
    };
    SavedDisplayPage.prototype.compilemsg = function () {
        this.msg = "Moisture" + this.data.moisture + "\n" + "Temperature" + this.data.temperature + "C" + "\n" + " Name " + this.data.name + "\n" + " Id 01 " + this.data.nameOne
            + "\n" + " Id 02" + this.data.nameTwo;
        return this.msg.concat(" \n Thank you for using PGA Moisture Analyzers");
    };
    /*
    
    Moisture: 22%
    Temperature: 13C
    Name: Wheat
    Id 01: ----
    Id 02: aaaaaa
    
    Thank you for using PGA Moisture Analyzers
    */
    SavedDisplayPage.prototype.ShareResults = function () {
        var _this = this;
        this.msg = this.compilemsg();
        var alert = this.alertCtrl.create({
            title: 'Results',
            message: 'You\'ve received your result, would you also like to share it?',
            buttons: [
                {
                    text: 'No, Thanks'
                },
                {
                    text: 'Share',
                    handler: function (_) {
                        _this.socialSharing.share(_this.msg, null, null, null);
                    }
                }
            ]
        });
        alert.present();
    };
    return SavedDisplayPage;
}());
SavedDisplayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-saved-display',template:/*ion-inline-start:"C:\Users\Shaharyar\Desktop\PGA\src\pages\saved-display\saved-display.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Results</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="padding">\n\n\n   <ion-grid>\n  <ion-row>\n   \n    <ion-col xl>\n    \n    <div align="center">\n      <img src="assets/image.jpg">\n    </div>\n    </ion-col>\n   \n  </ion-row>\n  \n\n\n<ion-row>\n  <ion-col xl>\n\n  <ion-card style="height:100%">\n      <h1 align="center" class="bold"> {{data.name}}</h1>\n      <p align="center" class="ion-1x">Moisture </p>\n      <h1 align="center" class="ion-5x italics blue">{{data.moisture}}%</h1>\n        <p align="center" class="ion-1x">Temperature</p>\n       <h2 align="center" class="ion-2x italics blue" >{{data.temperature}}&#176;C</h2>\n\n    <p align="center" class="ion-1x" >ID 01: {{data.nameOne}}</p>\n    <p align="center" class="ion-1x" >ID 02: {{data.nameTwo}}</p>\n  </ion-card>\n\n</ion-col>\n\n </ion-row> \n\n</ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button   ion-button large full (click)="PushToSavePage()">Previous Results</button>\n    <button   ion-button large full (click)="ShareResults()">Share</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Shaharyar\Desktop\PGA\src\pages\saved-display\saved-display.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SavedDisplayPage);

//# sourceMappingURL=saved-display.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_format_temperature_format_temperature__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_format_temperature_c_format_temperature_c__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_format_temperature_f_format_temperature_f__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_save_for_later_save_for_later__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_saved_display_saved_display__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_toast__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_screen_orientation__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_format_temperature_format_temperature__["a" /* FormatTemperaturePipe */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_format_temperature_c_format_temperature_c__["a" /* FormatTemperatureCPipe */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_format_temperature_f_format_temperature_f__["a" /* FormatTemperatureFPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pages_save_for_later_save_for_later__["a" /* SaveForLaterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_saved_display_saved_display__["a" /* SavedDisplayPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_save_for_later_save_for_later__["a" /* SaveForLaterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_saved_display_saved_display__["a" /* SavedDisplayPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_13__providers_data_data__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_screen_orientation__["a" /* ScreenOrientation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
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
    function MyApp(platform, statusBar, splashScreen, screenOrientation) {
        var _this = this;
        this.screenOrientation = screenOrientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            console.log(_this.screenOrientation.type); // Will return landscape" or "portrait"
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Shaharyar\Desktop\PGA\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Shaharyar\Desktop\PGA\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTemperaturePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Take raw Celsius value and return formatted string with Celsius and Fahrenheit
 */
var FormatTemperaturePipe = (function () {
    function FormatTemperaturePipe() {
    }
    FormatTemperaturePipe.prototype.transform = function (celsius) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (celsius === undefined) {
            return '???';
        }
        var fahrenheit = this.toFahrenheit(celsius);
        return celsius.toFixed(1) + '°C ' + fahrenheit.toFixed(1) + '°F';
    };
    FormatTemperaturePipe.prototype.toFahrenheit = function (celsius) {
        var fahrenheit = (celsius * 1.8 + 32.0);
        return fahrenheit;
    };
    return FormatTemperaturePipe;
}());
FormatTemperaturePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'formatTemperature',
    })
], FormatTemperaturePipe);

//# sourceMappingURL=format-temperature.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTemperatureCPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Take raw Celsius value and return formatted string with °C
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var FormatTemperatureCPipe = (function () {
    function FormatTemperatureCPipe() {
    }
    FormatTemperatureCPipe.prototype.transform = function (celsius) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (celsius === undefined) {
            return '???';
        }
        return celsius.toFixed(1) + '°C';
    };
    return FormatTemperatureCPipe;
}());
FormatTemperatureCPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'formatTemperatureC',
    })
], FormatTemperatureCPipe);

//# sourceMappingURL=format-temperature-c.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTemperatureFPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Take raw Celsius value and return formatted string with as ° Fahrenheit
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var FormatTemperatureFPipe = (function () {
    function FormatTemperatureFPipe() {
    }
    FormatTemperatureFPipe.prototype.transform = function (celsius) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (celsius === undefined) {
            return '???';
        }
        var fahrenheit = this.toFahrenheit(celsius);
        return fahrenheit.toFixed(1) + '°F';
    };
    FormatTemperatureFPipe.prototype.toFahrenheit = function (celsius) {
        var fahrenheit = (celsius * 1.8 + 32.0);
        return fahrenheit;
    };
    return FormatTemperatureFPipe;
}());
FormatTemperatureFPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'formatTemperatureF',
    })
], FormatTemperatureFPipe);

//# sourceMappingURL=format-temperature-f.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveForLaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__saved_display_saved_display__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SaveForLaterPage = (function () {
    function SaveForLaterPage(navCtrl, navParams, dataService, socialSharing, alertCtrl, sqlite) {
        //  for(var i=0; i<5; i++) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.sqlite = sqlite;
        //  savedData :any [];
        //  arrSavedData = {rowid:0,name:"",moisture:"",temperature:"",nameOne:"",nameTwo:""};
        this.savedArr = [];
        //     this.savedArr.push({rowid:'1',name:'Hard Red Spring Wheat',
        //     moisture:'22',temperature:'55',
        //     nameOne:'test1',nameTwo:'test2',time:'9:38pm'})
        // }
    }
    SaveForLaterPage.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    SaveForLaterPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    // not like this , get all current data and put them in array like expense array , then push them to other page to view it indivually by rowid
    SaveForLaterPage.prototype.getData = function () {
        // for(var i=0; i<5; i++) {
        var _this = this;
        //      this.savedArr.push({rowid:'1',name:'shery',
        //      moisture:'22',temperature:'55',
        //      nameOne:'test1',nameTwo:'test2',time:'9:38pm'})
        //  }
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM Data ORDER BY rowid DESC', {})
                .then(function (res) {
                console.log(res);
                _this.savedArr = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.savedArr.push({ rowid: res.rows.item(i).rowid, name: res.rows.item(i).name,
                        moisture: res.rows.item(i).moisture, temperature: res.rows.item(i).temperature,
                        nameOne: res.rows.item(i).nameOne, nameTwo: res.rows.item(i).nameTwo, time: res.rows.item(i).time });
                }
            })
                .catch(function (e) {
                console.log(e);
                //  console.log("Here's the saved data" + this.savedArr)
            });
        }).catch(function (e) {
            console.log(e);
        });
    };
    SaveForLaterPage.prototype.deleteData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM Data WHERE rowid=?', [rowid])
                .then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    /*
    db.executeSql('SELECT * FROM data WHERE rowid=?',[rowid])
    .then(res => {
        if(res.rows.length >0 ) {
        this.arrSavedData.rowid = res.rows.item(0).rowid;
        this.arrSavedData.name = res.rows.item(0).Name;
        this.arrSavedData.moisture = res.rows.item(0).Moisture;
        this.arrSavedData.temperature = res.rows.item(0).temperature;
        this.arrSavedData.nameOne = res.rows.item(0).nameOne;
        this.arrSavedData.nameTwo = res.rows.item(0).nameTwo;
    
      }
    })
    */
    /*
    getSavedData(){
    
        this.dataService.getData().then(data => {
          let savedString: any = false;
          if (typeof data === "undefined") { // if type of string are defined == string (json.stringify)
            savedString = JSON.stringify(data); //turn it into string
            console.log(savedString)
          }
          if (savedString) {
            savedString.forEach(savedDa => {
          //    this.savedData.push(savedDa , new Date);
          console.log(savedDa);
    
          //  this.savedData.push(new DataModel (savedDa.data, new Date(savedDa.date.toUTCString())));
          this.savedData.push(savedDa);
    
              console.log("Saved data" + savedDa.data);
            //  this.ShareResults(this.savedData);
            });
          }
    
    
    
        })
      }
     */
    SaveForLaterPage.prototype.compilemsg = function (index) {
        this.msg = "Moisture" + this.savedArr[index].moisture + "% " + "\n" + "Temperature" + this.savedArr[index].temperature + "C " + "\n" + " Name " + this.savedArr[index].name
            + "\n" + "Id 01 " + this.savedArr[index].nameOne + "\n" + "Id 02" + this.savedArr[index].nameTwo;
        return this.msg.concat(" \n Thank you for using PGA Moisture Analyzers");
    };
    SaveForLaterPage.prototype.ShareResults = function (index) {
        var _this = this;
        this.msg = this.compilemsg(index);
        var alert = this.alertCtrl.create({
            title: 'Results',
            message: 'You\'ve received your result, would you also like to share it?',
            buttons: [
                {
                    text: 'No, Thanks'
                },
                {
                    text: 'Share',
                    handler: function (_) {
                        _this.socialSharing.share(_this.msg, null, null, null);
                    }
                }
            ]
        });
        alert.present();
    };
    //
    SaveForLaterPage.prototype.PushToHomePage = function () {
        this.navCtrl.popToRoot();
    };
    SaveForLaterPage.prototype.pushDispalySavedPage = function (rowid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__saved_display_saved_display__["a" /* SavedDisplayPage */], {
            rowid: rowid
        });
    };
    return SaveForLaterPage;
}());
SaveForLaterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-save-for-later',template:/*ion-inline-start:"C:\Users\Shaharyar\Desktop\PGA\src\pages\save-for-later\save-for-later.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Previous Results</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-grid>\n  <ion-row>\n   \n    <ion-col xl>\n    \n     <div align="center">\n      <img src="assets/image.jpg">\n    </div>\n    \n    </ion-col>\n   \n  </ion-row>\n\n<ion-row>\n    <ion-col xl>\n\n<ion-scroll style="width:100%;height:65vh" scrollY="true">\n<ion-list>\n<ion-item-sliding *ngFor="let saved of savedArr; let i=index" >\n  \n  <ion-item nopadding (click)="pushDispalySavedPage(saved.rowid)">\n          <p>\n            <span>{{saved.name}}</span>\n            <br>\n            - {{saved.moisture}}% -\n            {{saved.temperature}}&#176;C\n          </p>\n          <br>\n          <h3 item-end>{{saved.time}}</h3>\n      </ion-item>\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" (click)="deleteData(saved.rowid)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n        <button ion-button  (click)="ShareResults(i)" color="primary">\n            <ion-icon name="share"></ion-icon>\n            Share\n        </button>\n      </ion-item-options>\n</ion-item-sliding>\n\n</ion-list>\n</ion-scroll>\n\n  </ion-col> \n  </ion-row>\n\n\n</ion-grid>\n\n\n  \n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <button  ion-button large full (click)="PushToHomePage()" >Receive a new result</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Shaharyar\Desktop\PGA\src\pages\save-for-later\save-for-later.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _f || Object])
], SaveForLaterPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=save-for-later.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map