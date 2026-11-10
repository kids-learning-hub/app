/* Kids Learning Hub — Firebase web config for the optional parent account.
   null = accounts are switched off: "My space" then works on this device
   only (favourites + stars), and the Firebase SDK is never downloaded.
   To switch accounts on, replace null with the config object from
   Firebase console → Project settings → Your apps → Web app.
   (These values are public identifiers, not secrets: access is protected
   by the Firestore security rules and the list of authorised domains.)   */
window.KLH_FIREBASE = {
  apiKey: "AIzaSyC6c5AVhSqddVMmnjo8hDGuAhWx1dnQY0g",
  authDomain: "kids-learning-hub1.firebaseapp.com",
  projectId: "kids-learning-hub1",
  storageBucket: "kids-learning-hub1.firebasestorage.app",
  messagingSenderId: "63324814308",
  appId: "1:63324814308:web:a298580a559f134020a5f1"
};
