import { Avatar, Container } from "@mui/material";
import React from "react";
import CALogo from "./../assets/img/ca-logo.svg";
import AvatarImg from "./../assets/img/avatar.jpeg";

const CAAppBar = ({ children, ...props }) => {
    return (
        <div className="ca-app-bar">
            <div className="flex-inline">
                <img className="ca-logo" src={CALogo} alt="ca-logo" />
                <div className="menu-list">
                    <span>MarketPlace</span>
                    <span>CredLoans</span>
                    <span>CredPools</span>
                    <span>CredBonds</span>
                    <span>MarketPlace</span>
                </div>
                <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                />
            </div>
        </div>
    );
};

export default CAAppBar;
