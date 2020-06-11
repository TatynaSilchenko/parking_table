import {createSelector} from "reselect";

export const getSortColomn1 = (state, column) => {
    if (!column) return state.table.cars;
    return state.cars.sort((a, b) => a.column > b.column ? 1 : -1)
};
export const sortSelector = state => state.table.sortParams;
export const getCars = state => state.table.cars;
export const getTenantFilter = state => state.table.tenantFilter;
export const getParkedFilter = state => state.table.parkedFilter;

export const getSortColomn = createSelector(getCars, sortSelector,
    (cars, sortParams) => {
        if (sortParams.dataField === "car_tenant") {
            let sortDirection = sortParams.direction === "asc" ? 1 : -1;
            const sortedData = [...cars].sort((a, b) => {
                if (a[sortParams.dataField]?.name === b[sortParams.dataField]?.name) return 0;
                return a[sortParams.dataField]?.name.toLowerCase() > b[sortParams.dataField]?.name.toLowerCase()
                    ? sortDirection : sortDirection * -1
            });
            return sortedData
        }
        if (sortParams.dataField === "car_number") {
            let sortDirection = sortParams.direction === "asc" ? 1 : -1;
            const sortedData = [...cars].sort((a, b) => {
                if (a[sortParams.dataField] === b[sortParams.dataField]) return 0;
                return a[sortParams.dataField].trim().toLowerCase() > b[sortParams.dataField].trim().toLowerCase() ? sortDirection : sortDirection * -1
            });
            return sortedData
        }
        return cars
    });

export const getDataCarCars = createSelector(getSortColomn, getTenantFilter, getParkedFilter,
    (cars, tenantFilter, parkedFilter) => {

        if ((!tenantFilter) && (!parkedFilter)) return cars;
        if (tenantFilter && parkedFilter) return cars.filter(c => {//todo:remove return
                return c.car_tenant.name.toLowerCase().includes(tenantFilter.toLowerCase())
            }
        ).filter(c=>c.parked.toLowerCase().indexOf(parkedFilter.toLowerCase())>-1)
        return !parkedFilter ? cars.filter(c => {//todo:remove return
            return c.car_tenant.name.toLowerCase().includes(tenantFilter.toLowerCase())
        }) : cars.filter(c => {//todo:remove return
            return c.parked.toLowerCase().indexOf(parkedFilter.toLowerCase())>-1
        })


    });
