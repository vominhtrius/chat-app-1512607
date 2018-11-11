import { VIEW_MESSAGE, LOAD_MESSAGES_DONE } from '../actions/chat';
const initState = {
    from: null,
    to: null,
    loadMessDone: false
};

const chat = (state = initState, action) => {
    switch (action.type) {
        case VIEW_MESSAGE:

            let noReLoad = state.from === action.from && state.to === action.to;

            return {
                ...state,
                from: action.from,
                to: action.to,
                loadMessDone: noReLoad
            };

        case LOAD_MESSAGES_DONE:
            return {
                ...state,
                loadMessDone: true
            };
        default: return state;
    }
}

export default chat;