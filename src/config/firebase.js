import firebase from 'firebase';
export const userProfilesURI = 'userProfiles';
export const appInfosURI = 'appInfos';
export const starInfoURI = 'starInfo';
export const messagesURI = 'messages';

export const firebaseConfig = {
    apiKey: "AIzaSyDWaH9W5Uea84O_hIysZXd6NNwXS8quLZA",
    authDomain: "chat-1512607.firebaseapp.com",
    databaseURL: "https://chat-1512607.firebaseio.com",
    projectId: "chat-1512607",
    storageBucket: "chat-1512607.appspot.com",
    messagingSenderId: "372444766008"
}

export const rrfConfig = {
    userProfile: userProfilesURI,
};

export default firebase.initializeApp(firebaseConfig);
