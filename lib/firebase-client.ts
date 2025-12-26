"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export async function requestNotificationPermission() {
  const supported = await isSupported();
  if (!supported) {
    console.log("Firebase Messaging not supported in this browser.");
    return null;
  }

  const messaging = getMessaging(app);

  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {

      // Register Service Worker explicitly and wait for it to be ready
      await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      const serviceWorkerRegistration = await navigator.serviceWorker.ready;

      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
        serviceWorkerRegistration: serviceWorkerRegistration,
      });
      return token;
    } else {
      console.log("Notification permission denied.");
      return null;
    }
  } catch (error) {
    console.error("Error requesting notification permission:", error);
    return null;
  }
}
