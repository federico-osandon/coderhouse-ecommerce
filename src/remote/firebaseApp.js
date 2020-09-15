import * as firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
//var firebaseConfig = {
//    apiKey: "AIzaSyC8NRPeuA23qYEN-1gDFww2mgjj9PzkvL4",
//    authDomain: "coder-ecommerce.firebaseapp.com",
//    databaseURL: "https://coder-ecommerce.firebaseio.com",
//    projectId: "coder-ecommerce",
//    storageBucket: "coder-ecommerce.appspot.com",
//    messagingSenderId: "1006894422450",
//    appId: "1:1006894422450:web:bd2d8f1e381780d625acab"
//};
//// Initialize Firebase
//export const firebaseApp = firebase.initializeApp(firebaseConfig);


const app = firebase.initializeApp({
    apiKey: "AIzaSyC8NRPeuA23qYEN-1gDFww2mgjj9PzkvL4",
    authDomain: "coder-ecommerce.firebaseapp.com",
    databaseURL: "https://coder-ecommerce.firebaseio.com",
    projectId: "coder-ecommerce",
    storageBucket: "coder-ecommerce.appspot.com",
    messagingSenderId: "1006894422450",
    appId: "1:1006894422450:web:bd2d8f1e381780d625acab"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}