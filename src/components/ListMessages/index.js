import React, { Component } from 'react';
import './ListMessages.css';
import MessageItem from '../MessageItem';

class ListMessages extends Component {
    render() {
        let n = 50;
        let contactItems = new Array(n).fill(0);
        let i = 0;
        return (
            <div className="messages-container">
                <div className="messages-container-wrapper">
                    {
                        contactItems.map((v) => {
                            return <MessageItem v={i++}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListMessages;