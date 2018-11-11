import React, { Component } from 'react'
import './Loader.css';

class Loader extends Component {
    render() {
        return (<div className="loader-wrapper">
            <div className="cssload-loader">
                <div className="cssload-inner cssload-one"></div>
                <div className="cssload-inner cssload-two"></div>
                <div className="cssload-inner cssload-three"></div>
            </div>
        </div>);
    }
}


export default (Loader);