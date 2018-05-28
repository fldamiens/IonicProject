import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CurrentHiking } from '../../Service/CurrentHiking';
import { GeolocationService } from '../../Service/GeolocationService';

import { ListHiking } from '../../pages/hiking-list/hiking-list';


@Component({
  selector: 'hiking-active',
  templateUrl: 'hiking-active.html'
})
export class HikeActivePage {
  private _hike: Hike;
  private _currentHiking: CurrentHiking;

  // google maps
  private zoom: number = 8;
  private lat: number;
  private lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHiking, public alertCtrl: AlertController,  public geoService: GeolocationService) {
    let res = geoService.getCurrentPosition();
    res.then((data)=>{
      this.lat = data[0];
      this.lng = data[1];
    })
    this._hike = currentHiking.currentHike;
    this._currentHiking = currentHiking;
    if(this._hike == null){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'There is no data to display !',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            handler: () => {
              this.navCtrl.push(ListHiking, {
              });
            }
          }
        ]
      });
      alert.present();
    }
  }

  itemDeactivate(event) {
    this._hike.active = false;
    this._currentHiking.resetHike();
    this.navCtrl.push(ListHiking, {});
  }
}
