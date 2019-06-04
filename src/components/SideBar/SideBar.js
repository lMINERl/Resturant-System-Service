import React from 'react';

const SideBar = (props) => {

  return (
    <div className="sidebar">
    <h2 className="sidebar__headline mb-5">Categories</h2>
    <form className="text-center">
      <ul className="sidebar__list">
        <li className="form-group sidebar__list__item">
          <label className="control control--checkbox"
            >Fast Food
            <input type="checkbox" />
            <div className="control__indicator"></div>
          </label>
        </li>
        <hr />
        <li className="form-group sidebar__list__item">
          <label className="control control--checkbox"
            >Fast Food
            <input type="checkbox" />
            <div className="control__indicator"></div>
          </label>
        </li>
        <hr />
        <li className="form-group sidebar__list__item">
          <label className="control control--checkbox"
            >Fast Food
            <input type="checkbox" />
            <div className="control__indicator"></div>
          </label>
        </li>
        <hr />
      </ul>
    </form>
    <h2 className="sidebar__headline">Prices</h2>
    <form>
      <div className="form-group">
        <input className="form-control" type="range" min="0" max="1000" />
      </div>
    </form>
    <button className="btn btn-primary btn-block">View More</button>
  </div>
  );

}

export default SideBar;
