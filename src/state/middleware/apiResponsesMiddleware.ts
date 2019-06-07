import {Action, Dispatch, Middleware, Store} from "redux";

export const apiResponsesMiddleware: Middleware = <IState>(store: Store) => (next: Dispatch) => (action: Action) => {
    next(action);

};
