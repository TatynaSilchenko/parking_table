import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NewCar from "../NewCarForm/NewCar";
import {useSelector} from "react-redux";

const Settings = (props) => {
    const searchTenant = useSelector(state => state.table.tenantFilter);
    const searchParked = useSelector(state => state.table.parkedFilter);
    const [isEditeMode, setIsEditeMode] = useState(false);

    const changeTenantHandler = (e) => {
        props.setTenantFilter(e.currentTarget.value);
    };
    const changeParkedHandler = (e) => {
        props.setParkedFilter(e.currentTarget.value);
    };

    const addNewCar = () => {
        setIsEditeMode(true);
    };
    const onhandleSubmit = () => {
        setIsEditeMode(false);
    }
    return (
        <div className="settings">
            <div className="filters">
                <div>
                    <span className="title">Tenant:</span>
                    <input className="new-data" type="text" placeholder="Enter tenant's name" onChange={changeTenantHandler}
                           value={searchTenant}/>
                </div>
                <div className="filter_parked_cars">
                    <span className="title">Parked:</span>
                    <input type="text"  className="new-data"placeholder="in" onChange={changeParkedHandler} value={searchParked}/>
                </div>
            </div>
            <div className="new-car">
                <div><FontAwesomeIcon icon="plus-circle" onClick={addNewCar} className="addIcon"/></div>
                {isEditeMode && <NewCar onSubmit={onhandleSubmit}/>
                }
            </div>
        </div>
    );
};

export default Settings;
