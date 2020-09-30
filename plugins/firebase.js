import firebase from "firebase"
import 'firebase/auth'

const config = {
    projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyC1GkZpnhqx9O9NWCxlDdrflpeTNiY7Htk",
        authDomain: "ycs-prj.firebaseapp.com",
        databaseURL: "https://ycs-prj.firebaseio.com",
        projectId: "ycs-prj",
        storageBucket: "ycs-prj.appspot.com",
        messagingSenderId: "984893195420",
        appId: "1:984893195420:web:441dc3236face15ada1959",
        measurementId: "G-SEMJ94GS9E"
    })
}
export const authProviders = {

    Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
}

export const auth = firebase.auth()
export default firebase