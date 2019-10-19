import { Component, OnInit } from '@angular/core';
import { Parent, Child } from '../../models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-initial',
  templateUrl: './register-initial.page.html',
  styleUrls: ['./register-initial.page.scss'],
})
export class RegisterInitialPage implements OnInit {
  formNumber = 0;
  form1 = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  form2 = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sex: new FormControl('', [Validators.required]),
  });
  form3 = new FormGroup({
    whosePhone: new FormControl('', [Validators.required]),
  });
  parent: Parent;
  child: Child;
  password: string;

  constructor(private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {}

  async register1(form: FormGroup, event) {
    if (form.invalid) {
      const toast = await this.toastCtrl.create({ message: 'フォームの値が無効です', duration: 1500 });
      toast.present();
      return;
    }
    this.parent.name = form.value.name;
    this.parent.email = form.value.email;
    this.password = form.value.password;
    this.formNumber = 1;
  }
  async register2(form: FormGroup, event) {
    if (form.invalid) {
      const toast = await this.toastCtrl.create({ message: 'フォームの値が無効です', duration: 1500 });
      toast.present();
      return;
    }
    this.child.name = form.value.name;
    this.child.sex = form.value.sex;
    this.formNumber = 2;
  }
  register3(isParent: boolean) {}
}
