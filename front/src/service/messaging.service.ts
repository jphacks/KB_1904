import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyC3R9gh0b9nXToEVl4C-A7k7z0wwa1UWQA',
  authDomain: 'jphacks-f77ac.firebaseapp.com',
  databaseURL: 'https://jphacks-f77ac.firebaseio.com',
  projectId: 'jphacks-f77ac',
  storageBucket: 'jphacks-f77ac.appspot.com',
  messagingSenderId: '327481213317',
  appId: '1:327481213317:web:933b1cbc33dfd74f8384ec'
};

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  messaging;
  currentMessage = new BehaviorSubject(null);
  constructor() {
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(
      'BLYilK58bHL_wUTL3oYrgPiuGwv-TqvIKY6wOPHbbid1as-eHTAnVVXmM2k_b8UJwsQmqphdnoo5L_MECdYX99k'
    );
    this.messaging = messaging;
  }

  getPermission() {
    return this.messaging
      .requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then((token) => localStorage.setItem('device-token', token))
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log('Message received. ', payload);
      this.currentMessage.next(payload);
    });
  }
}
