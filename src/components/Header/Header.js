import React from 'react';
import './header.styles.css'
import Image from "react-bootstrap/Image";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="sidebar">
            <Link to='/'>
                <div className="todos navigation">
                    <Image src="/icons/home.png" />
                    <span><b>Home</b></span>
                </div>
            </Link>
            <Link to='/todo'>
                <div className="todos navigation">
                    <Image src="/icons/todo.png"  />
                    <span><b>TODO</b></span>
                </div>
            </Link>
            <Link to='/passwords'>
                <div className="passwords navigation">
                    <Image src="/icons/key.png"  />
                    <span><b>Passwords</b></span>
                </div>
            </Link>
        </div>
    );
};

export default Header;
