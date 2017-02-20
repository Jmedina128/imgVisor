import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Galeria } from '../pages/galeria/galeria';
import { About } from '../pages/about/about';
import { SlidePage } from '../pages/slide/slide';
import { Albumprovider } from '../providers/albumprovider';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Galeria,
    About,
    SlidePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Galeria,
    About,
    SlidePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Albumprovider]
})
export class AppModule {}
