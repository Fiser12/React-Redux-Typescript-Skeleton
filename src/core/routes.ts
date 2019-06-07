import {generatePath} from "react-router";

interface IBaseRoutes {
    home: string;
    exampleApi: string;
}

export const routerSwitchRoutes: IBaseRoutes = {
    exampleApi: "/api/example?id=:id&status=:status",
    home: "/",
};

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type RoutesLinks = Omit<IBaseRoutes,
    "exampleApi"> & {
    exampleApi: (id: string, status: boolean) => string,
};

export const routesLinks: RoutesLinks = {
    ...routerSwitchRoutes,
    exampleApi: (id: string, status: boolean) => generatePath(routerSwitchRoutes.exampleApi, {id, status}),
};
