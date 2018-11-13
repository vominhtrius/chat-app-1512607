import firebase from 'firebase';
import { firebaseConfig, userProfilesURI, appInfosURI } from '../config/firebase';

export const onAuthStateChanged = () => {

    firebase.auth().onAuthStateChanged(user => {
        if (user !== null) {

            const db = firebase.database();
            let connectRef = db.refFromURL(`${firebaseConfig.databaseURL}/.info/connected`);
            let ref = db.refFromURL(`${firebaseConfig.databaseURL}/${userProfilesURI}/${user.uid}`);

            connectRef.on('value', function (snapshot) {
                if (snapshot.val()) {

                    console.log(snapshot.val());
                    console.log(user);
                    ref.onDisconnect().set({
                        avatarUrl: user.photoURL,
                        displayName: user.displayName,
                        email: user.email,
                        appInfos: {
                            uid: user.uid,
                            lastOnline: firebase.database.ServerValue.TIMESTAMP,
                            isOnline: false,
                        },
                        providerData: user.providerData
                    });

                    ref.set({
                        avatarUrl: user.photoURL,
                        displayName: user.displayName,
                        email: user.email,
                        appInfos: {
                            uid: user.uid,
                            lastOnline: firebase.database.ServerValue.TIMESTAMP,
                            isOnline: true,
                        },
                        providerData: user.providerData
                    });
                }
            });
        }
    });
}


export const onAuthLogout = (auth) => {
    const db = firebase.database();

    firebase.auth().signOut().then(() => {
        let appInfoRef = db.refFromURL(`${firebaseConfig.databaseURL}/${userProfilesURI}/${auth.uid}/${appInfosURI}`);
        appInfoRef.set({
            uid: auth.uid,
            time: firebase.database.ServerValue.TIMESTAMP,
            online: false,
        });
    });
}