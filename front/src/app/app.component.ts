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

import { MessagingService } from '../service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  message;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingCtrl: LoadingController,
    private zone: NgZone,
    private router: Router,
    private localStrage: Storage,
    private store: Store<AppState>,
    private msgService: MessagingService,
    private authSvc: AuthService
  ) {}

  ngOnInit() {
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
    this.initializeRouting();
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
