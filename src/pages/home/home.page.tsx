import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {HomeTemplate} from "../../pods/home/template/home.template";
import {IState} from "../../state";


// tslint:disable-next-line:no-empty-interface
export interface IProps {
}

function mapStateToProps(state: IState) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {};
}

const HomePageInner = (props: IProps) => {
    const {} = props;


    return (
        <HomeTemplate/>
    );
};

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePageInner);
