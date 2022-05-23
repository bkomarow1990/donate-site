import axios from "axios";
import { SERVER_URL } from "../constants/url";

const URL = `${SERVER_URL}/Account/`;

axios.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default class authenticationService {
    static registerUser(model) {
        return axios.post(URL + "register", model);
    }

    static loginUser(model) {
        return axios.post(URL + "login", model);
    }

    static logoutUser(model) {
        return axios.post(URL + "logout", model);
    }
}
