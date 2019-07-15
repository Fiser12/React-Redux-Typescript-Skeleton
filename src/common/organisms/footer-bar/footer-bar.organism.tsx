import * as React from "react";
import {Trans, useTranslation} from "react-i18next";
import "./footer-bar.organism.scss";

export const FooterBar = () => {
    useTranslation("footer");

    return (
        <footer className={"footer-bar"}>
            <p><Trans ns={"footer"}>Footer</Trans></p>
        </footer>
    );
};
