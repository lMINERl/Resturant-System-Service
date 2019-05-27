import React from 'react';

const CardFood = (props) => {
  return (
    <div className="menu-card__item">
      <div className="menu-card__info-data">
        <div className="menu-card__image-card">
          <img className="menu-card__image" src="images/services/logo.jpg" />
        </div>
        <div className="menu-card__menu-data">
          <h3 className="menu-card__heading">Cheese Burger</h3>
          <div className="menu-card__fav">
            <i className="fa fa-heart-o fa-lg"></i>
          </div>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star-o"></i>
              </li>
            </ul>
          </div>
          <div className="menu-card__data">
            <p className="menu-card__data-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
          </div>
          <button className="button button--primary button--small-btn">
            <i className="fa fa-spoon margin-right"></i>View Menu</button>
        </div>
      </div>

    </div>
  );

}

export default CardFood;
