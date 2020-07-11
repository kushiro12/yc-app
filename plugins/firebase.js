import firebase from "firebase"
const config = {
    projectId: process.env.FIREBASE_PROJECT_ID
}

   if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAxAADU0IDk2kNG7mK8h4Ovu5PH3nVrXcw",
        authDomain: "yc-app-a77fd.firebaseapp.com",
        databaseURL: "https://yc-app-a77fd.firebaseio.com",
        projectId: "yc-app-a77fd",
        storageBucket: "yc-app-a77fd.appspot.com",
        messagingSenderId: "948834959529",
        appId: "1:948834959529:web:ee78a332437926960329b8",
        measurementId: "G-9JM9Z33RM9"
    })}
    export default firebase