/* ============================================================================
   Insurance Portfolio Manager - Firebase configuration
   ----------------------------------------------------------------------------
   HOW TO USE
   1. Open Firebase console -> Project settings -> Your apps -> Web app and copy
      the SDK config into the `firebase` object below (replace every PASTE_ value).
   2. Leave `firebase: null` to keep the offline single-file app: no network,
      no sign-in gate, every feature still works.
   3. Set `adminEmail` to the administrator's sign-in address (lower-case).
      It must match the admin email in firestore.rules.

   IS THE API KEY A SECRET?  No. A Firebase web API key only identifies the
   project; it cannot read your data. Access is decided by Firebase
   Authentication and by firestore.rules ON THE SERVER. Never put a
   service-account JSON, a private key or an admin secret in this file - those
   bypass every rule and belong nowhere near a web page.
   ============================================================================ */

window.APP_CONFIG = {

  /* Firebase JS SDK (modular v9+ API). Pinned so deploys are reproducible. */
  sdkVersion: "12.17.1",

  /* Administrator sign-in address (lower-case). Must match firestore.rules. */
  adminEmail: "khookaychong@gmail.com",

  /* Offline mode (default). Replace null with your SDK config object. */
  firebase: null

};
