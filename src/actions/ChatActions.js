export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const RECEIVER = 'RECEIVER';
export const VIEW_MESSAGE = 'VIEW_MESSAGE';
export const SEND_NEW_MESSAGE = 'SEND_MESSAGE';
export const FILTER_BY_UID = 'FILTER_BY_UID';

export const viewMessage = (from, to) => {
  return {
    type: VIEW_MESSAGE,
    from, to
  };
}

export const addNewMessage = (from, to, messages) => {
  return {
    type: ADD_NEW_MESSAGE,
    from,
    to,
    messages
  }
}

export const sendNewMessage = (from, to, messages) => {
  return {
    type: SEND_NEW_MESSAGE,
    from,
    to,
    messages
  }
}


export const addReceiver = user => {
  return { type: RECEIVER, user }
}

export const filterByUid = (from, to) => {
  return { type: FILTER_BY_UID, from, to };
}
