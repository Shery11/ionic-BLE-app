import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import {SaveForLaterPage} from '../save-for-later/save-for-later';
import {SocialSharing} from "@ionic-native/social-sharing";


@Component({
  selector: 'page-saved-display',
  templateUrl: 'saved-display.html',
})
export class SavedDisplayPage {
  data ={rowid:0,name:"",moisture:"",temperature:"",nameOne:"",nameTwo:""}
  msg : string ;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite:SQLite,
    private toast:Toast,
    public socialSharing: SocialSharing,
    private alertCtrl:AlertController
) {
  this.getCurrentData(navParams.get("rowid"));

  }

  ionViewDidLoad() {
  }

  getCurrentData(rowid){
    this.sqlite.create({
      name:'ionicdb.db',
      location:'default'
    }).then((db:SQLiteObject) => {
      db.executeSql('SELECT * FROM Data WHERE rowid=?',[rowid])
      .then(res => {
        if(res.rows.length >0 ) {
          this.data.rowid = res.rows.item(0).rowid;
          this.data.name = res.rows.item(0).name;
          this.data.moisture = res.rows.item(0).moisture;
          this.data.temperature = res.rows.item(0).temperature;
          this.data.nameOne = res.rows.item(0).nameOne;
          this.data.nameTwo = res.rows.item(0).nameTwo
        }
      })
      .catch(e => {
        console.log(e);
        this.toast.show(e,'5000','center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      });
    }).catch(e => {
      console.log(e);
      this.toast.show(e,'5000','center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });

  }

  PushToSavePage(){
      this.navCtrl.push(SaveForLaterPage);
  }

  compilemsg():string{
   this.msg = "Moisture" + this.data.moisture + "\n"  + "Temperature" +  this.data.temperature + "C"  +  "\n" +  " Name " + this.data.name +  "\n" +  " Id 01 " + this.data.nameOne
  + "\n" +" Id 02" + this.data.nameTwo;
  return this.msg.concat(" \n Thank you for using PGA Moisture Analyzers");
 }

/*

Moisture: 22%
Temperature: 13C
Name: Wheat
Id 01: ----
Id 02: aaaaaa

Thank you for using PGA Moisture Analyzers
*/

ShareResults() {
  this.msg = this.compilemsg();

  let alert = this.alertCtrl.create({
    title: 'Results',
    message: 'You\'ve received your result, would you also like to share it?',
    buttons: [
      {
        text: 'No, Thanks'
      },
      {
        text: 'Share',
        handler: _=> {
          this.socialSharing.share(this.msg, null, null, null);
        }
      }
    ]
  });
  alert.present();
}
}
