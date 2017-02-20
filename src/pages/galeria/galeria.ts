import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SlidePage } from '../slide/slide';
import { Albumprovider } from '../../providers/albumprovider';

@Component({
  
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
  providers : [Albumprovider],

})

export class Galeria {

  public albumes;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public albumProvider :  Albumprovider) {
      this.albumProvider.load().subscribe(
        (data) => {
          this.albumes = data;
        });
}

  itemTapped(event, album) {
    this.navCtrl.push(SlidePage, {
      icon : album.icon,
      title : album.title,
      images : album.images,
    });
  }
}