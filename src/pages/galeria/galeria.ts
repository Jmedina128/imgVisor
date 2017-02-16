import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SlidePage } from '../slide/slide';

@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html'
})

export class Galeria {

  selectedItem: any;
  icons: string[];
  titles = [];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.titles = ['the Mighty Thor', 'The Amazing Spiderman', 'The Incredible hulk', 'El Papa de los helados', 'The Evil Devil', 'The Super Dude'];

    this.items = [];
    for (let i = 1; i < 13; i++) {
      this.items.push({
        title: this.titles[Math.floor(Math.random() * this.titles.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SlidePage, {
      item: item
    });
  }
}

class Images{

    names = [];


}