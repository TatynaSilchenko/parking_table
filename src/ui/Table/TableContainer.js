import {connect} from "react-redux";
import React, {useEffect} from "react";
import Table from "./Table";
import Spinner from "../../assets/Spinner/Spinner";
import {getCars, setCurrentPage, setParkedFilter, setSortParams, setTenantFilter} from "../../redux/TableReducer";
import Pagination from "../Pagenation/Pagination";
import {getDataCarCars} from "../../redux/Selectors/selector";

const TableContainer = ({carsPerPage,cars,currentPage,...props}) => {
    //load data
    useEffect(() => {
        props.getCars();
        // eslint-disable-next-line
    }, []);

    //Get current posts
    const lastCarIndex = currentPage * carsPerPage;
    const firstCarIndex = lastCarIndex - carsPerPage;
    const currentCars= cars&&cars.slice(firstCarIndex, lastCarIndex);



    //preloader
    if (props.isLoading) return <Spinner/>;
    return <>
        {cars&&<><Table carsPerPage={carsPerPage} totalCountPosts={cars.length} cars ={currentCars}{...props}/>
        {/*<Pagination postsPerPage={carsPerPage} totalCountPosts={cars.length}*/}
        {/*            setCurrentPage={props.setCurrentPage}/>*/}
                    </>}
    </>;
};

let mapStateToProps = (state) => {
    return {
        cars: getDataCarCars(state),
        isLoading: state.table.isLoading,
        currentPage: state.table.currentPage,
        carsPerPage: state.table.carsPerPage

    }
};

export default connect(mapStateToProps, {getCars,setCurrentPage,setSortParams,setTenantFilter,setParkedFilter})(TableContainer);
