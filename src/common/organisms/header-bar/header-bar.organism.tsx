import * as React from "react";
import {Trans, useTranslation} from "react-i18next";
import "./header-bar.organism.scss";

export interface IProps {
    changeLanguage: (locale: string) => void;
}

export const HeaderBar = (props: IProps) => {
    const {changeLanguage} = props;
    useTranslation("header");

    return (
        <header className={"header-bar"}>
            <div className={"header-bar__title"}>
                <h1><Trans>Title</Trans></h1>
            </div>
            <div className={"header-bar__language-section"}>
                <h3><Trans>Language</Trans></h3>
                <a onClick={() => changeLanguage("es")}>
                    <Trans>Spanish</Trans>
                </a>
                <a onClick={() => changeLanguage("en")}>
                    <Trans>English</Trans>
                </a>
            </div>
        </header>
    );
};
