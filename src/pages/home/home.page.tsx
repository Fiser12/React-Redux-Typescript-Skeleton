import {push} from "connected-react-router";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import i18n, {generateLanguage} from "../../core/i18n";
import {HomeTemplate} from "../../pods/home/template/home.template";
import {IState} from "../../state";

// tslint:disable-next-line:no-empty-interface
export interface IProps {
    changeLanguage: (locale: string) => void;
}

function mapStateToProps(state: IState) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        changeLanguage: (locale: string) => {
            dispatch(push(generateLanguage(locale, location)));
            i18n.changeLanguage(locale);
        },
    };
}

const HomePageInner = (props: IProps) => {
    const {changeLanguage} = props;


    return (
        <HomeTemplate changeLanguage={changeLanguage} />
    );
};

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePageInner);
