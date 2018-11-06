import { VIEW_MESSAGE, SEND_NEW_MESSAGE } from '../actions/ChatActions';

const initState = {
    from: null,
    to: null,
    message: null
};

const chat = (state = initState, action) => {
    switch (action.type) {
        case VIEW_MESSAGE:
            console.log(action);

            return {
                ...state,
                from: action.from,
                to: action.to
            };
            
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                from: action.from,
                to: action.to,
                message: action.message
            }
        default: return state;
    }
}

export default chat;