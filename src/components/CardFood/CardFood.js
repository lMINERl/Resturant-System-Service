import React from 'react';

const CardFood = (props) => {
  return (
    
    <div className="menu-card">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="menu-card__item">
                    <div className="menu-card__edit-delete-fav">
                        <i className="fa fa-pencil"></i>
                        <i className="fa fa-trash"></i>
                        <i className="fa fa-heart-o"></i>
                    </div>
                    <div className="menu-card__info">
                        <div className="menu-card__image-card">
                            <img className="menu-card__image" alt="logo" src="images/services/logo.jpg" />
                            <div className="menu-card__sale">50%</div>
                        </div>
                        <h3 className="menu-card__heading text-center">Cheese Burger</h3>
                        <div className="star-rating text-center">
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
                        <div className="menu-card__price-data">
                            <span className="menu-card__price-before">$160.00
                                <span className="menu-card__dashed"></span>
                            </span>
                            <span className="menu-card__price">$85.00</span>
                        </div>
                        <span className="menu-card__border"></span>
                    </div>
                    <div className="menu-card__size">
                        <div className="menu-card__size-data">

                            <label  htmlFor="radiosize1" className="menu-card__option-size">
                                <input type="radio" name="checksize" id="radiosize1"/>
                                <span className="menu-card__option "></span>
                                Small
                            </label>
                        </div>
                        <div className="menu-card__size-data">
                            <label id="radiosize2" className="menu-card__option-size">
                                <input type="radio" name="checksize" id="radiosize2"/>
                                <span className="menu-card__option"></span>
                                Medium
                            </label>
                        </div>
                        <div className="menu-card__size-data">

                            <label htmlFor="radiosize3" className="menu-card__option-size">
                                <input type="radio" name="checksize" id="radiosize3"/>
                                <span className="menu-card__option"></span>
                                Large
                            </label>
                        </div>
                    </div>
                    <div className="menu-card__size-info">
                        <span className="menu-card__size-info-left">-</span>
                        <input type="number" className="menu-card__size-info-medium"/>
                        <span className="menu-card__size-info-right">+</span>
                    </div>
                    <button className="button button--primary button--small-btn  button--block-btn">Order Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
  );

}

export default CardFood;
