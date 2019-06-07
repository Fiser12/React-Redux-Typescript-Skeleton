import axios from "axios";
import {baseApiUrl} from "./const";

export const Request = () => axios.create({
    baseURL: baseApiUrl,
    timeout: 300000,
});
