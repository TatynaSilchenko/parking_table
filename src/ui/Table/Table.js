import React from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Table = ({cars, ...props}) => {
    //Get column's name from state
    const columns = useSelector(state => state.table.columns);
    const searchTenant = useSelector(state => state.table.tenantFilter);
    const searchParked = useSelector(state => state.table.parkedFilter);


    const rows = () => {
        return cars.map(item => row(item))
    };

    const showInfo = (item, key) => {
        switch (key) {
            case "car_brand":
            case "car_model":
            case "car_tenant":
                return (!item[key]) ? '' : item[key].name;
            default:
                return item[key];
        }
    };
    const row = (item) => {
        return <tr key={item.id} style={{height: "50px", overflow: "hidden"}}>
            {Object.keys(columns).map(key => <td key={key}>
                {showInfo(item, key)}</td>)}
        </tr>

    };

    const headerColumns = () => Object.keys(columns).map(key => {
        //todo:another_arrow
        if (key === "car_tenant" || key === "car_number") {
            return <th key={key} width={columns[key].width}>
                {columns[key].label}

                <div>
                    <FontAwesomeIcon icon="sort-down" size="sm" onClick={() => sort(key)}/>
                    {/*<FontAwesomeIcon icon="sort-up" size="sm"  onClick={() => sort('car_tenant')}/>*/}
                </div>
            </th>
        }
        return <th key={key} width={columns[key].width}>
            {columns[key].label}</th>
    });

    const sort = (column) => {
        props.setSortParams(column);
    };

    const changeTenantHandler=(e)=>{
        props.setTenantFilter(e.currentTarget.value);
    };
    const changeParkedHandler=(e)=>{
        props.setParkedFilter(e.currentTarget.value);
    };

    return (
        <div className="container-fluid">
            {/*<h1>Cars</h1>*/}
            <div className="filters">
                <div className="filter_tenant">
                <span>Tenant:</span>
                <input type="text" placeholder="Enter tenant's name" onChange={changeTenantHandler} value={searchTenant}/>
                </div>
                <div className="filter_parked_cars">
                    <span>Parked:</span>
                    <input type="text" placeholder="in" onChange={changeParkedHandler} value={searchParked}/>
                </div>
            </div>
            <table className="table table-light table-hover" style={{width: "100%"}}>
                <thead className="tableHead">
                <tr>
                    {headerColumns()}
                </tr>
                </thead>
                <tbody>
                {rows()}
                </tbody>
            </table>
            {/*{cars[0].number}*/}
        </div>
    );
};

export default Table;
