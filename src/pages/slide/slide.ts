import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidePage {

  sItem: any;
  //items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.sItem = navParams.get('item');
  
  }

}
