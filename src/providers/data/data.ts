import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";


@Injectable()
export class DataService {

  constructor(public http: Http, public storage: Storage) {
  }

  getData(): Promise<any> {
    return this.storage.get('data');

  }

  save(data): void {
  //  let newData = JSON.stringify(data); // must turn the data into string to save it
    this.storage.set('data', data);
    console.log(data)
  }

}
