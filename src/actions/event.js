export const VIEW_LIST_CONTACTS = 'VIEW_LIST_CONTACTS';
export const VIEW_LIST_CONVERSATIONS = 'VIEW_LIST_CONVERSATIONS';

export const viewListContacts = () => {
    return {
        type: VIEW_LIST_CONTACTS,
    }
}

export const viewListConversation = () => {
    return {
        type: VIEW_LIST_CONVERSATIONS,
    }
}