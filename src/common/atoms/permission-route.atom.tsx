import * as React from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router";
import {Dispatch} from "redux";
import {routesLinks} from "../../core";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {};
};

const PermissionRouteInner = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
};

export const PermissionRoute = connect(mapStateToProps, mapDispatchToProps)(PermissionRouteInner);
