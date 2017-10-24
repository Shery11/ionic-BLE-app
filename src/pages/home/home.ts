import { BLE } from '@ionic-native/ble';
import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import {SaveForLaterPage} from '../save-for-later/save-for-later';

//const THERMOMETER_SERVICE = 'ffe0';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  devices: any[] = [];
  showMa: boolean = false;
 Madevcies: any[] = [] ;
  statusMessage: string;


  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private ble: BLE,
              private ngZone: NgZone) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
    // this.push();
  }


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

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list
    this.showMa = false;
//   this.Madevcies = [];

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    //this.devices.push(device);

    this.ngZone.run(() => {
      this.devices.push(device);
    //  this.Madevcies = this.devices.filter((devic) => devic.startsWith('M'));
    //  console.log('Devices start with M ' + this.Madevcies);

    });
  //  let Madevcies = this.devices.filter((devic) => devic.startsWith("MA040"));
  //  console.log("Decvies starts with M" + Madevcies)

    // this.Madevcies = this.devices.filter(function (devic) {
//  return devic[0].toLowerCase() === 'MA';
//});

//console.log("Decvies starts with M" + this.Madevcies)

  }


  // If location permission is denied, you'll end up here
  scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }


  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.push(DetailPage, {
      device: device
    });
  }

  PushToSavePage(){
      this.navCtrl.push(SaveForLaterPage);
  }


}
