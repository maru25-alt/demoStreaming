import React from 'react';
import {Link} from 'react-router-dom'

export default function Header({title}) {
    return (
        <div className="header">
            <div className="header__top">
                <Link className="header__logo" to="/"> DEMO Streaming </Link>
                <div className="header__navs">
                    <button className="login__button">Log in</button>
                    <button className="start__button">Start your free trial</button>
                </div>
            </div>
            <div className="header__bottom">
               <h3> Popular {title} </h3>
            </div>
        </div>
    )
}
