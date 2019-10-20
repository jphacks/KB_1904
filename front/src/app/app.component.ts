import { Component, NgZone, OnInit } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AppState } from 'src/store';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/store/jwt-token.store';
import { logging } from 'protractor';
import { AuthService } from 'src/service/auth.service';

import * as firebase from 'firebase/app';
import 'firebase/messaging';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  messaging = firebase.messaging();
  //   currentMessage = new BehaviorSubject(null);

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingCtrl: LoadingController,
    private zone: NgZone,
    private router: Router,
    private localStrage: Storage,
    private store: Store<AppState>,
    private authSvc: AuthService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.getPermission();
    this.receiveMessage();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.store.select(state => state);
      this.initializeRouting();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.messaging.usePublicVapidKey('BLYilK58bHL_wUTL3oYrgPiuGwv-TqvIKY6wOPHbbid1as-eHTAnVVXmM2k_b8UJwsQmqphdnoo5L_MECdYX99k');
  }

  getPermission() {
    this.messaging
      .requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
//       this.currentMessage.next(payload);
    });
  }

  async initializeRouting() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    loading.present();
    if (!this.authSvc.exist()) {
      this.router.navigateByUrl('');
    } else {
      this.pushRegisterInitialPage();
    }
    loading.dismiss();
  }

  private pushRegisterInitialPage() {
    this.zone.run(() => {
      this.ready$.next(true);
      this.router.navigateByUrl('register-initial');
    });
    this.splashScreen.hide();
  }
}
