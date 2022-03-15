import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'

function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <a><Link to ="/">Home</Link></a>
                </li>
                <li>
                    <a><Link to ="/post">Novel</Link></a>
                </li>
                <li>
                    <a><Link to ="/category">Tag</Link></a>
                </li>
                <li>
                    <a><Link to ="/author">Author</Link></a>
                </li>
            </ul>
        </div>
    );
        
}

export default Nav;