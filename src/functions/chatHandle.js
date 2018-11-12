import firebase from 'firebase';
import {
    firebaseConfig, lastChatURI,
    starInfoURI, messagesURI
} from '../config/firebase';

import { getChannel } from './helper';

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

export const handleSendTextMessage = (from, to, message) => {
    let timeSend = new Date().getTime();
    let _message = {
        from: from,
        to: to,
        content: message,
        time: timeSend,
        type: 'text'
    }

    const channel = getChannel(from, to);

    firebase.push(`/${messagesURI}/${channel}`, _message);

    const fromRef = firebase.database().refFromURL(`${firebaseConfig.databaseURL}/${lastChatURI}/${from}/${to}`);
    const toRef = firebase.database().refFromURL(`${firebaseConfig.databaseURL}/${lastChatURI}/${to}/${from}`);
    fromRef.set(
        {
            lastTime: timeSend,
            lastContent: message
        }
    );

    toRef.set(
        {
            lastTime: timeSend,
            lastContent: message
        }
    );
}