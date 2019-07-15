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
    // Send all user and permissions in this component and make here the redirections to other pages
    return (<Route {...rest} render={(props) => (<Component {...props} />)}/>);
};

export const PermissionRoute = connect(mapStateToProps, mapDispatchToProps)(PermissionRouteInner);
