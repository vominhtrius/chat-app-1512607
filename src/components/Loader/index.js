import React from 'react'
import './Loader.css';

const Loader = () => {
    return (<div className="loader-wrapper">
        <div className="cssload-loader">
            <div className="cssload-inner cssload-one"></div>
            <div className="cssload-inner cssload-two"></div>
            <div className="cssload-inner cssload-three"></div>
        </div>
    </div>);
}

export default (Loader);