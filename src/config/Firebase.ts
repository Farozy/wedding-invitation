// import { initializeApp } from "firebase/app";
// import { getDatabase } from "@firebase/database";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyCeRb_RQQdHnn11WhUJ9xHKdfA3m-ijS3Q",
//     authDomain: "comment-pre-wedding.firebaseapp.com",
//     databaseURL: "https://comment-pre-wedding-default-rtdb.firebaseio.com",
//     projectId: "comment-pre-wedding",
//     storageBucket: "comment-pre-wedding.appspot.com",
//     messagingSenderId: "975900259750",
//     appId: "1:975900259750:web:a32ae89c84c0bc22604b67",
//     measurementId: "G-HN9ZT5GPE7"
// };
//
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
//
// export {database};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeRb_RQQdHnn11WhUJ9xHKdfA3m-ijS3Q",
    authDomain: "comment-pre-wedding.firebaseapp.com",
    databaseURL: "https://comment-pre-wedding-default-rtdb.firebaseio.com",
    projectId: "comment-pre-wedding",
    storageBucket: "comment-pre-wedding.appspot.com",
    messagingSenderId: "975900259750",
    appId: "1:975900259750:web:a32ae89c84c0bc22604b67",
    measurementId: "G-HN9ZT5GPE7"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database};