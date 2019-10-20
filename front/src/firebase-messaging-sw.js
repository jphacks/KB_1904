// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const firebaseConfig = {
  apiKey: "AIzaSyC3R9gh0b9nXToEVl4C-A7k7z0wwa1UWQA",
  authDomain: "jphacks-f77ac.firebaseapp.com",
  databaseURL: "https://jphacks-f77ac.firebaseio.com",
  projectId: "jphacks-f77ac",
  storageBucket: "jphacks-f77ac.appspot.com",
  messagingSenderId: "327481213317",
  appId: "1:327481213317:web:933b1cbc33dfd74f8384ec"
};

firebase.initializeApp({
  firebaseConfig
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});
