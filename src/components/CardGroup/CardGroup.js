import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import OrderBill from '../OrderBill';

const CardGroup = (props) => {
  const [view, setView] = useState(false);

  let Cart = (view) ?
    (
      <OrderBill
      />
    ) : (<React.Fragment></React.Fragment>);

  return (
    <div className="menu-card__item  menu-border">
      <div className="menu-card__info">
        <div className="menu-card__image-card border--primary">
          <img className="menu-card__image" alt="white hat" src="assets/white-hat-and-yellow-bread-78@2x.jpg" />
        </div>
        <h3 className="menu-card__heading--black text-center">{props.data.name}</h3>
        <div className="menu-card__fav">
          <i onClick={() => setView(!view)} className="fa fa-shopping-cart fa-lg"></i>
          {Cart}
        </div>
        <span className="menu-card__border-primary"></span>
      </div>
      <div className="menu-card__calender-time-date fa-2x">
        <i className="fa fa-calendar"></i>

        <span>{props.data.day}
          <p>{props.data.date}</p>
          <p>{props.data.time}</p>
        </span>

      </div>
      <div className="menu-card__edit-delete">
        <i className="fa fa-edit"></i>
        <i onClick={() => { props.delitem(props.data.id) }} className="fa fa-trash"></i>
        <i className="fa fa-sign-out"></i>
      </div>
      <NavLink to="/offers" className="button button--secondary button--small-btn ">
        <i className="fa fa-spoon margin-right"></i>View Menu</NavLink>
    </div>
  );
}

export default CardGroup;
