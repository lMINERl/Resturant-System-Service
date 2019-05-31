import React, { Component } from 'react';
import lodash from 'lodash';

const Pagination = props => {
    // const {itemCount , pageSize} = props;
    console.log(props.currentPage)
    const pageCount = Math.ceil(props.itemCount / props.pageSize);

    const pages = lodash.range(1, pageCount + 1)
    return ( 

 <nav >
  <ul className="pagination">
   {pages.map(page => (
    <li key={page} className={page === props.currentPage ? 'page-item active' : 'page-item'}><a style={{cursor: 'pointer'}} className="page-link" onClick={() => props.onPageChange(page)}>{page}</a></li> 
    ))}
    
  </ul>
</nav>
     );
}
 
export default Pagination;