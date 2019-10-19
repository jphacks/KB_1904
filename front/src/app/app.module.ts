import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptors';

import { ChildModalPage } from './child/child-modal/child-modal.page';
import { ChildModalPageModule } from './child/child-modal/child-modal.module';
import { ApisModule } from '../api/apis.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { ServiceModule } from '../service/services.module';
import { IonicStorageModule } from '@ionic/storage';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC3R9gh0b9nXToEVl4C-A7k7z0wwa1UWQA',
  authDomain: 'jphacks-f77ac.firebaseapp.com',
  databaseURL: 'https://jphacks-f77ac.firebaseio.com',
  projectId: 'jphacks-f77ac',
  storageBucket: 'jphacks-f77ac.appspot.com',
  messagingSenderId: '327481213317',
  appId: '1:327481213317:web:e081a936c594437b8384ec'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ChildModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ChildModalPageModule,
    ApisModule,
    StoreModule.forRoot(reducers),
    ServiceModule,
    IonicStorageModule.forRoot({ name: 'OutiQuestLocalStorageDb' }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
