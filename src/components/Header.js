import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <nav>
            <div className="logo">
                <Link to="/Home">Soccer United</Link>
            </div>
            <div className="nav">
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Product">Products</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li>
                        <Link to="/Product"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header