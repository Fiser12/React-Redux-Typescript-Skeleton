export const getLocale = (state) => (): string => {
    return state.router.location.pathname.substring(1, 3);
};
