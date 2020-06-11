import React, {useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NewCar from "../NewCarForm/NewCar";
import Settings from "../Settings/Settings";
import Pagination from "../Pagenation/Pagination";

const Table = React.memo(({cars, ...props}) => {
    //Get column's name from state
    const columns = useSelector(state => state.table.columns);
    // const searchTenant = useSelector(state => state.table.tenantFilter);
    // const searchParked = useSelector(state => state.table.parkedFilter);

    // const [isEditeMode, setIsEditeMode] = useState(false);


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
                </div>
            </th>
        }
        return <th key={key} width={columns[key].width}>
            {columns[key].label}</th>
    });

    const sort = (column) => {
        props.setSortParams(column);
    };

    return (
        <div className="app-wrapper">
            <Settings setTenantFilter={props.setTenantFilter} setParkedFilter={props.setParkedFilter}/>
            <div className="container-fluid">
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
                <Pagination postsPerPage={props.carsPerPage} totalCountPosts={props.totalCountPosts}
                            setCurrentPage={props.setCurrentPage}/>
            </div>
        </div>
    );
});

export default Table;
