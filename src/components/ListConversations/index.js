import React, {Component} from 'react';
import './ListConversations.css';
import ConversationItem from '../ConversationItem';

class ListConversations extends Component{
    render() {
        let n = 100;
        let contactItems = new Array(n).fill(0);

        return (
            <div className="list-conversations non-display">
                <div className="conversations-container">
                    {
                        contactItems.map(() => {
                            return <ConversationItem/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListConversations;