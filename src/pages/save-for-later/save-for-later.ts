import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import {DataService} from '../../providers/data/data';
import {DataModel} from '../modals/data.modal';
import {SocialSharing} from "@ionic-native/social-sharing";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {SavedDisplayPage} from '../saved-display/saved-display';





@Component({
  selector: 'page-save-for-later',
  templateUrl: 'save-for-later.html',
})
export class SaveForLaterPage {

//  savedData :any [];
//  arrSavedData = {rowid:0,name:"",moisture:"",temperature:"",nameOne:"",nameTwo:""};
  savedArr: any = [];
  msg:string;




  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dataService:DataService,
    public socialSharing: SocialSharing,
    private alertCtrl:AlertController,
    private sqlite:SQLite) {

    //  for(var i=0; i<5; i++) {

    //     this.savedArr.push({rowid:'1',name:'Hard Red Spring Wheat',
    //     moisture:'22',temperature:'55',
    //     nameOne:'test1',nameTwo:'test2',time:'9:38pm'})
    // }

  }

 ionViewDidLoad(){
this.getData();

}
ionViewWillEnter(){
  this.getData();


}

// not like this , get all current data and put them in array like expense array , then push them to other page to view it indivually by rowid

getData(){

  
   // for(var i=0; i<5; i++) {

   //      this.savedArr.push({rowid:'1',name:'shery',
   //      moisture:'22',temperature:'55',
   //      nameOne:'test1',nameTwo:'test2',time:'9:38pm'})
   //  }

  this.sqlite.create({
    name:'ionicdb.db',
    location:'default'
  }).then((db:SQLiteObject) => {
    db.executeSql('SELECT * FROM Data ORDER BY rowid DESC',{})
    .then(res => {
      console.log(res);
      this.savedArr = [];
      for(var i=0; i<res.rows.length; i++) {

        

        this.savedArr.push({rowid:res.rows.item(i).rowid,name:res.rows.item(i).name,
        moisture:res.rows.item(i).moisture,temperature:res.rows.item(i).temperature,
        nameOne:res.rows.item(i).nameOne,nameTwo:res.rows.item(i).nameTwo,time:res.rows.item(i).time})
      }
    })

    .catch(e => {
      console.log(e);
    //  console.log("Here's the saved data" + this.savedArr)

    });
  }).catch(e => {
    console.log(e);

  });

}

deleteData(rowid){
  this.sqlite.create({
    name:'ionicdb.db',
    location:'default'
  }).then((db:SQLiteObject) => {
    db.executeSql('DELETE FROM Data WHERE rowid=?',[rowid])
    .then(res => {
      console.log(res);
      this.getData();
    })
    .catch(e => console.log(e));
  }).catch(e => console.log(e));
}


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



compilemsg(index):string{
 this.msg = "Moisture" + this.savedArr[index].moisture + "% "+  "\n" + "Temperature" +  this.savedArr[index].temperature + "C " +  "\n" +  " Name " + this.savedArr[index].name
 +  "\n"+ "Id 01 " + this.savedArr[index].nameOne +  "\n" + "Id 02" + this.savedArr[index].nameTwo;
return this.msg.concat(" \n Thank you for using PGA Moisture Analyzers");
}
ShareResults(index) {
  this.msg = this.compilemsg(index);

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

//


PushToHomePage(){
  this.navCtrl.popToRoot();
}
pushDispalySavedPage(rowid){

    this.navCtrl.push(SavedDisplayPage ,{
      rowid:rowid
    });

}

}
