import React from 'react';
import lodash from 'lodash';

const Pagination = props => {
  // const {itemCount , pageSize} = props;
  const pageCount = Math.ceil(props.itemCount / props.pageSize);

  const pages = lodash.range(1, pageCount + 1)
  return (

    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page === props.currentPage ? 'page-item active' : 'page-item'}><button className="button page-link" onClick={() => props.onPageChange(page)}>{page}</button></li>
        ))}

      </ul>
    </nav>
  );
}

export default Pagination;