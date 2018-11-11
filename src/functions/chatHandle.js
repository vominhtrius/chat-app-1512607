import firebase from 'firebase';
import { firebaseConfig, userProfilesURI, appInfosURI, starInfoURI } from '../config/firebase';

export const addStarUser = (ownerUID, starID) => {
    const db = firebase.database();
    let starRef = db.refFromURL(`${firebaseConfig.databaseURL}/${starInfoURI}/${ownerUID}/${starID}`);

    starRef.set({
        time: firebase.database.ServerValue.TIMESTAMP,
    });
}

export const removeStarUser = (ownerUID, uid) => {
    const db = firebase.database();
    let starRef = db.refFromURL(`${firebaseConfig.databaseURL}/${starInfoURI}/${ownerUID}/${uid}`);
    starRef.remove();
}