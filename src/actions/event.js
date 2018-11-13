export const VIEW_LIST_CONTACTS = 'VIEW_LIST_CONTACTS';
export const VIEW_LIST_CONVERSATIONS = 'VIEW_LIST_CONVERSATIONS';
export const FILTER_NAME = 'FILTER_NAME';
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

export const filterName = (value) => {
    console.log("call here !");
    console.log(value);
    return {
        type: FILTER_NAME,
        value
    }
}