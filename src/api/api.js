import axios from "axios";

export const instance = axios.create({
    baseURL: "http://31.24.93.27:11000/",
});

export const dataApi = {
    getCars() {
        return instance.get("api/cars/")
            .then(response => response.data)
    },

};
