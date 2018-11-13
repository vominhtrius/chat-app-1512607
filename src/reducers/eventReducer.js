import { VIEW_LIST_CONTACTS, VIEW_LIST_CONVERSATIONS, FILTER_NAME } from '../actions/event';

const initState = {
    isToggleContact: false,
    isToggleConversation: true,
    valueFilter: '',
}

const event = (state = initState, action) => {
    switch (action.type) {
        case VIEW_LIST_CONTACTS:
            return {
                ...state,
                isToggleContact: true,
                isToggleConversation: false
            };
        case VIEW_LIST_CONVERSATIONS:
            return {
                ...state,
                isToggleContact: false,
                isToggleConversation: true
            };
        case FILTER_NAME:
            {
                return {
                    ...state,
                    valueFilter: action.value
                };
            }
        default:
            return state;
    }
}

export default event;