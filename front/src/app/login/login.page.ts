import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formNumber = 0;
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  email: string;
  password: string;
  constructor(private router: Router, private toastCtrl: ToastController, private authSvc: AuthService) {}

  ngOnInit() {}

  async login1(form: FormGroup, event) {
    if (form.invalid) {
      const toast = await this.toastCtrl.create({ message: 'フォームの値が無効です', duration: 1500 });
      toast.present();
      return;
    }
    this.email = form.value.email;
    this.password = form.value.password;
    this.formNumber = 1;
  }
  async login2(isParent: boolean) {
    this.authSvc.login(this.email, this.password).subscribe(
      _ => {
        if (isParent) {
          this.router.navigateByUrl('');
        } else {
          this.router.navigateByUrl('child');
        }
      },
      async err => {
        const toast = await this.toastCtrl.create({ message: 'ネットワークエラー', duration: 3000 });
        toast.present();
      }
    );
  }
}
