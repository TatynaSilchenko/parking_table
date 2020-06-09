import {connect} from "react-redux";
import React, {useEffect} from "react";
import Table from "./Table";
import Spinner from "../../assets/Spinner/Spinner";
import {getCars, setCurrentPage, setSortParams, setTenantFilter} from "../../redux/TableReducer";
import Pagination from "../Pagenation/Pagination";
import {getFilteredCarCars} from "../../redux/Selectors/selector";

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

    //Change page
    const paginate = (number) => {
        props.setCurrentPage(number)
    };

    //preloader
    if (props.isLoading) return <Spinner/>;
    return <>
        {cars&&<><Table cars ={currentCars}{...props}/>
        <Pagination postsPerPage={carsPerPage} totalCountPosts={cars.length}
                    paginate={paginate}/></>}
    </>;
};

let mapStateToProps = (state) => {
    return {
        // cars: getSortColomn(state),
        cars: getFilteredCarCars(state),
        isLoading: state.table.isLoading,
        currentPage: state.table.currentPage,
        carsPerPage: state.table.carsPerPage

    }
};

export default connect(mapStateToProps, {getCars,setCurrentPage,setSortParams,setTenantFilter})(TableContainer);
