import { Component, NgZone } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingCtrl: LoadingController,
    private zone: NgZone,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initializeRouting();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async initializeRouting() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    loading.present();
    // ここでログイン処理
    this.pushRegisterInitialPage();
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
