import { Component, NgZone } from '@angular/core';

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
    private router: Router,
    private localStrage: Storage,
    private store: Store<AppState>
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.store.select(state => state);
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
    this.store
      .select(state => selectToken(state))
      .subscribe(
        () => {
          this.router.navigateByUrl('');
        },
        _ => {
          this.pushRegisterInitialPage();
        }
      );
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
