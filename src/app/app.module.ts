import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BLE } from '@ionic-native/ble';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { FormatTemperaturePipe } from '../pipes/format-temperature/format-temperature';
import { FormatTemperatureCPipe } from '../pipes/format-temperature-c/format-temperature-c';
import { FormatTemperatureFPipe } from '../pipes/format-temperature-f/format-temperature-f';
import { DataService } from '../providers/data/data';
import { IonicStorageModule } from '@ionic/storage';
import {SocialSharing} from "@ionic-native/social-sharing";
import {SaveForLaterPage} from '../pages/save-for-later/save-for-later';
import {SavedDisplayPage} from '../pages/saved-display/saved-display';
import { Toast } from '@ionic-native/toast';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ScreenOrientation } from '@ionic-native/screen-orientation';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    FormatTemperaturePipe,
    FormatTemperatureCPipe,
    FormatTemperatureFPipe,
    SaveForLaterPage,
    SavedDisplayPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    SaveForLaterPage,
    SavedDisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE,
    DataService,
    SocialSharing,
    SQLite,
    Toast,
    ScreenOrientation

  ]
})
export class AppModule {}
