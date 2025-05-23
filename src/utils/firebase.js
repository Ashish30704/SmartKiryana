import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyADtKRAgmNX3JqEdpxBgKFsbJ2WW8vQPMI',
    projectId: 'smartkiryana',
    storageBucket: 'smartkiryana.firebasestorage.app',
    messagingSenderId: '660845348398',
    appId: '1:660845348398:android:6bcb64cca0caa5dca941bf',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)