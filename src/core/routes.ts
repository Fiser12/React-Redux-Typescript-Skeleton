import {generatePath} from "react-router";
import {Action, Store} from "redux";
import i18n from "./i18n";

const locale = (): string => i18n.language.substring(0, 2);

interface IBaseRoutes {
    home: string;
}

export let routerSwitchRoutes: () => IBaseRoutes = () => ({
    home: "/:locale",
});

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type RoutesLinks = IBaseRoutes;
/*
//Omitir los que se considere que hay que reemplazar por métodoos contructores pasandoles parametros
type RoutesLinks = Omit<IBaseRoutes,
    "urlExampleById"> & {
};
*/
export const routesLinks: () => RoutesLinks = () => (
    {
        ...routerSwitchRoutes(),
        home: generatePath(routerSwitchRoutes().home, {
            locale: locale(),
        }),
    }
);

export type ActionToDispatch = (urlParams, store?: Store) => Action;
export type ActionsToDispatch = ActionToDispatch[];

export interface IRouteHandlerActionsOnLoad {
    actionsToDispatch: ActionsToDispatch;
    route: string;
}

export type RoutesHandlerActionsOnLoad = IRouteHandlerActionsOnLoad[];

export const routesHandlerActionsOnLoad: RoutesHandlerActionsOnLoad = [

];
