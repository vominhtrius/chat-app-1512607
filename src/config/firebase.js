import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyDWaH9W5Uea84O_hIysZXd6NNwXS8quLZA",
    authDomain: "chat-1512607.firebaseapp.com",
    databaseURL: "https://chat-1512607.firebaseio.com",
    projectId: "chat-1512607",
    storageBucket: "chat-1512607.appspot.com",
    messagingSenderId: "372444766008"
}

export default firebase.initializeApp(firebaseConfig);