import Menu from "./Menu";

import './style.css'
import logo from './img/logo.svg'
import {menuItems} from "./menuItems";
import SearchInput from "./SearchInput";
import Profile from "./Profile";
import MobileHeader from "./MobileHeader";

const Header = () => {
    return (
        <header className="header">
            <div className="container d-flex jcsb">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <div className="container--content header-content">
                    <Menu menuItems={menuItems}/>
                    <SearchInput/>
                    <Profile/>
                    <MobileHeader />
                </div>
            </div>
        </header>
    )
}

export default Header
