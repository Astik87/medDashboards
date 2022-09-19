import {Avatar} from "@mui/material";
import React from "react";
import notAva from "@components/Layout/Header/Profile/img/not-ava.svg";
import {Link} from "react-router-dom";

const NotAuthProfile = () => {
    return (
        <Link to="/auth">
            <div className="ava">
                <Avatar className="ava-image">
                    <img src={notAva} alt="not-ava"/>
                </Avatar>
            </div>
        </Link>
    )
}

export default NotAuthProfile
