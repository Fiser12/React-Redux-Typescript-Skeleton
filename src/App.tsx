import {ConnectedRouter, push} from "connected-react-router";
import {createBrowserHistory} from "history";
import * as React from "react";
import {I18nextProvider} from "react-i18next";
import {connect, Provider, ReactReduxContext} from "react-redux";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {Dispatch} from "redux";
import i18n, {generateLanguage} from "../src/core/i18n";
import {PermissionRoute} from "./common/atoms/permission-route.atom";
import {routerSwitchRoutes, routesLinks} from "./core";
import {HomePage} from "./pages";
import configureStore from "./state/store";

export const history = createBrowserHistory();
const store = configureStore(history);

const AppInner = ({match, changeLanguage}) => {
    if (i18n.language !== match.params.locale) {
        i18n.changeLanguage(match.params.locale);
    }

    return (
        <Switch>
            <PermissionRoute exact path={routerSwitchRoutes().home} component={HomePage}/>
        </Switch>
    );
};

export const App = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store} context={ReactReduxContext}>
                <ConnectedRouter history={history} context={ReactReduxContext}>
                    <Router history={history}>
                        <Switch>
                            <Route path="/:locale" component={AppInner}/>
                            <Redirect to={routesLinks().home}/>
                        </Switch>
                    </Router>
                </ConnectedRouter>
            </Provider>
        </I18nextProvider>
    );
};
