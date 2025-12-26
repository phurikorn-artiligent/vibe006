importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// 1. Initialize Firebase in the Service Worker
// NOTE: These values must match your client config.
// Ideally, we'd inject these from env, but SWs don't have access to process.env at build time easily without a bundler.
// For now, we'll hardcode the values the user provided or fetch them.
// A common pattern is to just initialize with default if the project is simple, 
// OR pass the config via URL params if needed, but hardcoding here is the most robust "quick fix".

const firebaseConfig = {
  apiKey: "AIzaSyAfm-7E2Ciy_lz4ohHJjtxmHHDIK1-WCDs",
  authDomain: "vibe-webpush.firebaseapp.com",
  projectId: "vibe-webpush",
  storageBucket: "vibe-webpush.firebasestorage.app",
  messagingSenderId: "405595138418",
  appId: "1:405595138418:web:7e82d1105c4c5920b495eb"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 2. Handle Background Messages
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here if needed
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Ensure you have an icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
