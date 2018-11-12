import React, { Component } from 'react';
import './ListConversations.css';
import ConversationItem from '../ConversationItem';

class ListConversations extends Component {
    componentDidMount() {

    }

    render() {
        let n = 100;
        let contactItems = new Array(n).fill(0);
        console.log("call here");
        return (
            <div className="list-conversations">
                <div className="conversations-container">
                    {
                        contactItems.map(() => {
                            return <ConversationItem />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListConversations;