import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus =useOnlineStatus();
    let btnName = "Login";
    return (
        <div className="header">
            <div className="Logo-container">
                <img
                    className="Logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online status : {onlineStatus ?"✅":"🛑"};
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li>
                        <Link to="/contact">contact us</Link>
                    </li><li>
                    <Link to="/grocery"> Grocery</Link>
                    </li>
                    <li>cart</li>
                    <button className='Login' onClick={() => {
                        btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header