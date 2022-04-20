import { Avatar } from "@mui/material";
import React, { useCallback, useContext } from "react";
import CALogo from "./../assets/img/ca-logo.svg";
import { ThemeContext } from "../providers/ThemeProvider/ThemeProvider";

const CAAppBar = ({ children, ...props }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    console.log(theme);

    const onThemeChange = useCallback(
        (themeName = null) => {
            if (themeName) {
                setTheme(themeName);
                return;
            }
            if (theme === "light") setTheme("dark");
            if (theme === "dark") setTheme("plutus");
            if (theme === "plutus") setTheme("light");
        },
        [theme]
    );

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
                <div>
                    <span onClick={() => onThemeChange("light")}>Light</span>
                    <span onClick={() => onThemeChange("dark")}>Dark</span>
                    <span onClick={() => onThemeChange("plutus")}>Plutus</span>
                </div>
                <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    onClick={onThemeChange}
                />
            </div>
        </div>
    );
};

export default CAAppBar;
