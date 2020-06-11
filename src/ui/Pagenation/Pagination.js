import React from "react";

const Pagination = React.memo(({postsPerPage, totalCountPosts, ...props}) => {
    //Change page
    const paginate = (number) => {
        props.setCurrentPage(number)
    };
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalCountPosts / postsPerPage); i++) {
        pageNumber.push(i)
    };
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(n =>
                    <li key={n} className="page-item">
                        <a href="!#" className="page-link" onClick={() => paginate(n)}>
                            {n}
                        </a>
                    </li>)}
            </ul>
        </nav>
    );
});

export default Pagination;
