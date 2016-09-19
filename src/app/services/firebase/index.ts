import { AuthMethods,
    defaultFirebase,
    FIREBASE_PROVIDERS,
    firebaseAuthConfig 
} from 'angularfire2';

/*export const FIREBASE_APP_PROVIDERS: any[] = [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://flickering-heat-8853.firebaseio.com'),
    firebaseAuthConfig({
        method: AuthMethods.Popup
    })
];*/

 export const FIREBASE_APP_PROVIDERS: any[] = [
    FIREBASE_PROVIDERS,
    defaultFirebase({
    apiKey: "AIzaSyBuKpB_Giclwxl1BknyZjOrk7nfIgI44QI",
        authDomain: "flickering-heat-8853.firebaseapp.com",
        databaseURL: "https://flickering-heat-8853.firebaseio.com",
    storageBucket: "flickering-heat-8853.appspot.com",
  }),
    firebaseAuthConfig({
        method: AuthMethods.Popup
    })
];