import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const lightThemeURL = `https://gist.githubusercontent.com/victorvincent-vivriti/afa3185171bd65123446b8dc84416bb5/raw/23a0a952d0e1cfdfe914100dc68bc0611c0eedee/ca_theme_light.json`;
const darkThemeURL = `https://gist.githubusercontent.com/victorvincent-vivriti/1c4a04a0aaf37cfac13f761f294247db/raw/82f0de0873fafd5ef234ee5b633e38e16fb832fb/ca_theme_dark.json`;
const plutusThemeURL = `https://gist.githubusercontent.com/victorvincent-vivriti/d24288e2d262867ea8e747d973f71549/raw/16089e8c001556fa48ec39846ecbe7d4a0e7a721/ca_theme_plutus.json`;

const themeMap = new Map([
    ["light", lightThemeURL],
    ["dark", darkThemeURL],
    ["plutus", plutusThemeURL],
]);

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children, theme }) => {
    const [themeName, setThemeName] = useState(theme);
    const [themeURL, setThemeURL] = useState(themeMap.get(theme));

    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isThemeLoading, setIsThemeLoading] = useState(false);

    useEffect(() => {
        if (theme) {
            console.log("Setting Theme Name", themeMap.get(theme), theme);
            setThemeURL(themeMap.get(theme));
        }
    }, [theme]);

    useEffect(() => {
        if (themeURL) {
            if (!isInitialLoad) setIsThemeLoading(true);
            getTheme(themeURL);
        }
    }, [themeURL, isInitialLoad]);

    const setSassVariables = (tokens) => {
        Object.keys(tokens)?.map((key) =>
            document.documentElement.style.setProperty(key, tokens?.[key])
        );

        setIsInitialLoad(false);
        setIsThemeLoading(false);
    };

    const getTheme = async (themeURL) => {
        return axios
            .get(themeURL)
            .then((data) => data.data)
            .then((data) => setSassVariables(data))
            .catch((err) => console.error(err));
    };

    const setTheme = useCallback(
        (themeAlias) => {
            setThemeName(themeAlias);
            setThemeURL(themeMap.get(themeAlias));
        },
        [theme]
    );

    console.log({ themeName });

    if (isInitialLoad) return <p>Loading....</p>;

    return (
        <>
            <ThemeContext.Provider
                value={{ theme: themeName, isThemeLoading, setTheme }}
            >
                {children}
            </ThemeContext.Provider>
        </>
    );
};

export { ThemeContext, ThemeProvider };
