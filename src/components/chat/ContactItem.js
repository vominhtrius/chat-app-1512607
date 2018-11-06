import React, { Component } from 'react';

class ContactItem extends Component {

    constructor(props) {
        super(props);
        this.onClickStar.bind(this);

    }

    onClickStar() {
        alert("Click star");
    }

    render() {
        const user = this.props.user.value;
        const urlAvatar = user.avatarUrl;
        const typeStar = (true === false) ? "star-filled-img" : "star-img";
        const status = user.online === true ? 'Đang hoạt động' : 'Hoạt động lúc ' + new Date(user.time).toLocaleString();
        console.log(this);

        return (
            <div className="contact-item-wrapper" onClick={() => {
                const idOwner = this.props.idOwner;
                const user = this.props.user.value;
                this.props.clickView(idOwner, user.uid);
            }}>
                <div className="contact-item">
                    <div className="contact-avatar">
                        <div className="contact-avatar-img"
                            style={{ backgroundImage: `url(${urlAvatar})` }}
                        >
                        </div>
                    </div>

                    <div className="contact-info">
                        <div className="contact-name">
                            {this.props.user.value.displayName}
                        </div>
                        <div className="contact-status">
                            {status}
                        </div>
                    </div>
                    <div className="contact-tool">
                        <div className="star">
                            <div id={typeStar}
                                onClick={this.onClickStar}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactItem;