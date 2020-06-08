import {dataApi} from "../api/api";

const SET_ISLOADING = "TABLE/SET_ISLOADING";
const SET_CARS = "TABLE/SET_CARS";
const SET_CURRENT_PAGE = "TABLE/SET_CURRENT_PAGE";
const SET_SORT_PARAMS = "TABLE/SET_SORT_PARAMS";

const initialState = {
    columns: {
        id: {
            key: "id",
            label: "ID",
            width: "5%!important",

        },
        car_tenant: {
            key: "tenant",
            label: "Tenant",
            width: "100px!important",
        },
        car_number: {
            key: "number",
            label: "Number",
            width: "22.5%!important",
        },
        car_brand: {
            key: "brand",
            label: "Brand",
            width: "20%!important"
        },
        car_model: {
            key: "model",
            label: "Model",
            width: "20%!important"
        },
    },
    cars: [],
    isLoading: false,
    currentPage: 1,
    carsPerPage: 10,
    sortParams:{
        dataField:"id",
        direction:"desc"
    }
};

const TableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISLOADING:
            return {...state, isLoading: action.value};
        case SET_CARS:
            return {...state, cars: action.cars};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.number};
        case SET_SORT_PARAMS:
            return {...state, sortParams: {...state.sortParams,dataField:action.column,
                    direction:state.sortParams.direction==="asc"?"desc":"asc"}};
        default: {
            return state;
        }
    }
};

export const setIsLoading = (value) => ({type: SET_ISLOADING, value});
export const setCars = (cars) => ({type: SET_CARS, cars});
export const setCurrentPage = (number) => ({type: SET_CURRENT_PAGE, number});
export const setSortParams = (column) => ({type: SET_SORT_PARAMS, column});

export const getCars = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const data = await dataApi.getCars();
        dispatch(setCars(data));
        dispatch(setIsLoading(false));
    } catch (e) {
        throw new Error(e)
    }
};
export default TableReducer;
