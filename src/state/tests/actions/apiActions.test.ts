import {
    ApiActionType,
    apiError,
    apiRequest,
    apiSuccess,
    IApiErrorAction,
    IApiRequestAction,
    IApiResponseAction,
    Method,
} from "../../actions/apiActions";

describe("actions::apiActions", () => {
    it("apiRequest", () => {
        const expectedAction: IApiRequestAction<{}> = {
            meta: {
                feature: "FEATURE_NAME",
                method: Method.GET,
                url: "/url/send",
            },
            payload: {object: "object"},
            type: `${ApiActionType.API_REQUEST} FEATURE_NAME`,
        };
        expect(
            apiRequest<{}>({object: "object"}, Method.GET, "/url/send", "FEATURE_NAME"),
        ).toEqual(expectedAction);
    });

    it("apiSuccess", () => {
        const expectedAction: IApiResponseAction<{}> = {
            meta: "FEATURE_NAME",
            payload: {object: "object"},
            type: `${ApiActionType.API_SUCCESS} FEATURE_NAME`,
        };
        expect(
            apiSuccess<{}>({object: "object"}, "FEATURE_NAME"),
        ).toEqual(expectedAction);
    });

    it("apiError", () => {
        const expectedAction: IApiErrorAction = {
            meta: "FEATURE_NAME",
            payload: {object: "object"},
            type: `${ApiActionType.API_ERROR} FEATURE_NAME`,
        };
        expect(
            apiError({object: "object"}, "FEATURE_NAME"),
        ).toEqual(expectedAction);
    });
});

