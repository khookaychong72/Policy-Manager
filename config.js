/* ============================================================================
   Insurance Portfolio Manager - Firebase configuration
   ----------------------------------------------------------------------------
   HOW TO USE
   1. Open Firebase console -> Project settings -> Your apps -> Web app and copy
      the SDK config into the object below (replace every PASTE_ value).
   2. Leave `adminEmail: "admin@example.com",   /* <-- put the administrator sign-in address here (lower-case).
                                     It must match the admin email in firestore.rules. */
  firebase: null` to keep the offline single-file app: no network,
      no sign-in gate, every feature still works.

   IS THE API KEY A SECRET?  No. A Firebase web API key only identifies the
   project; it cannot read your data. Access is decided by Firebase
   Authentication and by firestore.rules ON THE SERVER. Never put a
   service-account JSON, a private key or an admin secret in this file - those
   bypass every rule and belong nowhere near a web page.
   ============================================================================ */

window.APP_CONFIG = {
  /* Firebase JS SDK (modular v9+ API). Pinned so deploys are reproducible. */
  sdkVersion: "12.17.1",

  /* Offline mode (default). Replace null with the object in the comment. */
  firebase: null

  
    firebase: {
    apiKey: "AIzaSyA_cRLXJjEJrajTCGyN0GQ4cbipr-CFoM8",
    authDomain: "policy-manager-417f0.firebaseapp.com",
    projectId: "policy-manager-417f0",
    storageBucket: "policy-manager-417f0.firebasestorage.app",
    messagingSenderId: "844306119962",
    appId: "1:844306119962:web:2fd12182209af141e200a3"
  }

};
