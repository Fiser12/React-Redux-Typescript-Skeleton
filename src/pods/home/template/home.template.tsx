import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FooterBar} from "../../../common/organisms/footer-bar/footer-bar.organism";
import {HeaderBar} from "../../../common/organisms/header-bar/header-bar.organism";
import {IState} from "../../../state";
import "./home.template.scss";


export interface IProps {
    changeLanguage: (locale: string) => void;
}

function mapStateToProps(state: IState) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {};
}

const HomeTemplateInner = (props: IProps) => {
    const {changeLanguage} = props;

    return (
        <>
            <HeaderBar changeLanguage={changeLanguage}/>
            <div>

            </div>
            <FooterBar/>
        </>
    );
};

export const HomeTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeTemplateInner);
