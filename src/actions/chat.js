export const VIEW_MESSAGE = 'VIEW_MESSAGE';
export const LOAD_MESSAGES_DONE = 'LOAD_MESSAGES_DONE';

export const viewMessage = (from, to) => {
    return {
        type: VIEW_MESSAGE,
        from, to
    };
}

export const loadMessagesDone = () => {
    return {
        type: LOAD_MESSAGES_DONE,
    }
}