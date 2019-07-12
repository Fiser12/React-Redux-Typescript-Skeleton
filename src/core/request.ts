import axios from "axios";
import {defaultLocale} from "./const";

export const Request = (locale: string = defaultLocale) => axios.create({
    headers: {
        "accept-language": locale != null ? locale : defaultLocale,
    },
    timeout: 300000,
});
