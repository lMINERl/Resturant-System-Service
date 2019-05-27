import React, { useState } from 'react';
import StarRating from '../../components/StarRating';
import SelectSize from '../../components/SelectSize';

const CardFood = (props) => {

  const sizes = [`Small`, `Meduim`, `Large`];

  const [state, SetState] = useState({
    name: 'Cheese Burger',
    discountPrice: 160.00,
    discountPercent: 50,
    price: 85.00,
    rating: 4,
    size: 0,
    amount: 1
  });


  const setRating = (rating) => {
    if (state.rating > -1 && state.rating < 5)
      SetState({
        ...state,
        rating: rating
      });
  }
  const increaseAmount = () => {
    if (state.amount < 10)
      SetState({
        ...state,
        amount: state.amount + 1
      });
  }
  const decreaseAmount = () => {
    if (state.amount > 0)
      SetState({
        ...state,
        amount: state.amount - 1
      })
  }

  const onSelectSize = (size) => {
    SetState({
      ...state,
      size: size
    })
  }

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
                  <div className="menu-card__sale">{state.discountPercent}</div>
                </div>
                <h3 className="menu-card__heading text-center">{state.name}</h3>
                <div className="star-rating text-center">
                  <ul className="list-inline">
                    <StarRating setRate={(rating) => setRating(rating)} rating={state.rating} outof={5} />
                  </ul>
                </div>
                <div className="menu-card__price-data">
                  <span className="menu-card__price-before">${state.discountPrice}
                    <span className="menu-card__dashed"></span>
                  </span>
                  <span className="menu-card__price">${state.price}</span>
                </div>
                <span className="menu-card__border"></span>
              </div>
              <div className="menu-card__size">
                <SelectSize selected={state.size} names={sizes} select={(sizes) => onSelectSize(sizes)} />
              </div>
              <div className="menu-card__size-info">
                <span onClick={() => decreaseAmount()} className="menu-card__size-info-left"><i className="fa fa-minus"></i></span>
                <input type="number" className="menu-card__size-info-medium" value={state.amount} />
                <span onClick={() => increaseAmount()} className="menu-card__size-info-right"><i className="fa fa-plus"></i></span>
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
