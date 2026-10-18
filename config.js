/* ============================================================================
   Insurance Portfolio Manager - Firebase configuration
   ----------------------------------------------------------------------------
   THIS COPY IS CONFIGURED: the `firebase` object below is filled in with the
   web settings for the project policy-manager-417f0, so email/password and
   Google sign-in are switched on and the sign-in gate will appear.

   adminEmail is already set to the administrator's sign-in address.

   IS THE API KEY A SECRET?  No. A Firebase web API key only identifies the
   project; it cannot read your data. Access is decided by Firebase
   Authentication and by firestore.rules ON THE SERVER. Never put a
   service-account JSON, a private key or an admin secret in this file.
   ============================================================================ */

window.APP_CONFIG = {

  /* Firebase JS SDK (modular v9+ API). Pinned so deploys are reproducible. */
  sdkVersion: "12.17.1",

  /* Administrator sign-in address (lower-case). Must match firestore.rules. */
  adminEmail: "khookaychong@gmail.com",

  firebase: {
    apiKey: "AIzaSyA_cRLXJjEJrajTCGyN0GQ4cbipr-CFoM8",
    authDomain: "policy-manager-417f0.firebaseapp.com",
    projectId: "policy-manager-417f0",
    storageBucket: "policy-manager-417f0.firebasestorage.app",
    messagingSenderId: "844306119962",
    appId: "1:844306119962:web:2fd12182209af141e200a3"
  }

};
