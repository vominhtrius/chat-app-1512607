import { VIEW_LIST_CONTACTS, VIEW_LIST_CONVERSATIONS } from '../actions/event';

const initState = {
    isToggleContact: false,
    isToggleConversation: true,
}

const event = (state = initState, action) => {
    switch (action.type) {
        case VIEW_LIST_CONTACTS:
            return {
                ...state,
                isToggleContact: true,
                isToggleConversation: false
            }
        case VIEW_LIST_CONVERSATIONS:
            return {
                ...state,
                isToggleContact: false,
                isToggleConversation: true
            }
        default:
            return state;
    }
}

export default event;