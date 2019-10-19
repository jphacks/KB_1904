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
import {ServiceModule} from '../service/services.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    ChildModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ChildModalPageModule,
    ApisModule,
    StoreModule.forRoot(reducers),
    ServiceModule
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
