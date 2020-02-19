import React from 'react';

const Pagination = (props) => {
    const pageLinks = [];

    for(let i = 1; i <= props.pages + 1; i++ ){
        let active = props.currentPage === i ? 'active' : ''; 
    pageLinks.push(<li className={active} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return (
        <div>
            <ul className="pagination">
                {props.currentPage > 1 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#"> <i class="fas fa-arrow-left"></i></a></li> : '' }
                {/* {pageLinks} */}
                {props.currentPage < props.pages + 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#"><i class="fas fa-arrow-right"></i></a></li> : '' }
            </ul>
        </div>
    )
}

export default Pagination;
