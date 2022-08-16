import {useState} from "react";

import './style.css'
import Menu from "../Menu";

import {menuItems} from '../menuItems'
import Profile from "../Profile";
import SearchInput from "../SearchInput";

const MobileHeader = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={`mobile-header ${isActive ? 'active' : ''}`}>
            <div className="burger" onClick={() => setIsActive(!isActive)}>
                <span></span>
            </div>

            <div className="mobile-header-content">
                <div className="mobile-header-content-top">
                    <Profile />
                    <SearchInput />
                </div>
                <Menu menuItems={menuItems} onClick={() => setIsActive(false)}/>
            </div>

        </div>
    )
}

export default MobileHeader
