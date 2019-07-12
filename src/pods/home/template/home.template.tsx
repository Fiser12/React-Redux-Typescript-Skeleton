import * as React from "react";
import {Trans} from "react-i18next";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IState} from "../../../state";
import "./home.template.scss";


// tslint:disable-next-line:no-empty-interface
export interface IProps {

}

function mapStateToProps(state: IState) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {};
}

const HomeTemplateInner = (props: IProps) => {
    return (
        <div>
            <h1><Trans>Title</Trans></h1>
        </div>
    );
};

export const HomeTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeTemplateInner);
