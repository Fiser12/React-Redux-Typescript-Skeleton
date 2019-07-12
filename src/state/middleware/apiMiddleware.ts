import {AxiosError, AxiosResponse} from "axios";
import {Request} from "core";
import {Dispatch, Middleware, Store} from "redux";
import {ApiActionType, apiError, apiSuccess, IApiRequestAction, Method} from "../actions/apiActions";
import {getLocale} from "../queries/languageQueries";

export const apiMiddleware: Middleware = (store: Store) =>
    (next: Dispatch) =>
        <R, B>(action: IApiRequestAction<R>) => {
            next(action);

            if (action.type.includes(ApiActionType.API_REQUEST)) {
                const apiRequestAction: IApiRequestAction<R> = action as IApiRequestAction<R>;
                const {url, method, feature} = apiRequestAction.meta;
                let request = null;
                const locale = getLocale(store.getState())();

                if (method === Method.POST) {
                    request = Request(locale).post<R>(url, apiRequestAction.payload);
                } else if (method === Method.PUT) {
                    request = Request(locale).put<R>(url, apiRequestAction.payload);
                } else if (method === Method.DELETE) {
                    request = Request(locale).delete(url);
                } else if (method === Method.GET) {
                    request = Request(locale).get<R>(url);
                } else {
                    throw new Error("Invalid method " + method + " for the API Middleware");
                }

                request.then((response: AxiosResponse<R>) => {
                    store.dispatch(apiSuccess<R>(response.data, feature));
                });
                request.catch((error: AxiosError) => {
                    store.dispatch(apiError(error, feature));
                });
            }
        };
