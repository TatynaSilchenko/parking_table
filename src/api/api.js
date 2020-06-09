import axios from "axios";

export const instance = axios.create({
    baseURL: "http://31.24.93.27:11000/api/",
});

export const dataApi = {
    getCars() {
        return instance.get("cars/")
            .then(response => response.data)
    },
    getParkedCar(){
        return instance.get("stat/here/")
    }

};
