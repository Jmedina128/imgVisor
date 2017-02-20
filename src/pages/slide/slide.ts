import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidePage {

  images : any;
  icon : string;
  title : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.images = navParams.get('images');
  this.title = navParams.get('title');
  this.icon = navParams.get('icon');
  
  }

}
