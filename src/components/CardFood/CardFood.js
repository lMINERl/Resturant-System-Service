import React from 'react';
import StarRating from '../../components/StarRating';
import SelectSize from '../../components/SelectSize';

const CardFood = (props) => {



  return (
    <div className="menu-card__item">
      <div className="menu-card__edit-delete-fav">
        <i className="fa fa-pencil"></i>
        <i className="fa fa-trash"></i>
        <i className="fa fa-heart-o"></i>
      </div>
      <div className="menu-card__info">
        <div className="menu-card__image-card">
          <img className="menu-card__image" alt="logo" src="images/services/logo.jpg" />
          <div className="menu-card__sale">{props.data.discountPercent}</div>
        </div>
        <h3 className="menu-card__heading text-center">{props.data.name}</h3>
        <div className="star-rating text-center">
          <ul className="list-inline">

            <StarRating setRate={(rating) => props.setrating(props.data.id, rating)} rating={props.data.rating} outof={5} />

          </ul>
        </div>
        <div className="menu-card__price-data">
          <span className="menu-card__price-before">${props.data.discountPrice}
            <span className="menu-card__dashed"></span>
          </span>
          <span className="menu-card__price">${props.data.price}</span>
        </div>
        <span className="menu-card__border"></span>
      </div>
      <div className="menu-card__size">

        <SelectSize
          size={props.data.size}
          comId={props.data.id}
          names={props.data.sizes}
          select={(size) => props.setsize(props.data.id, size)} />

      </div>
      <div className="menu-card__size-info">
        <span onClick={() => props.setamount(props.data.id, props.data.amount + 1)} className="menu-card__size-info-left"><i className="fa fa-minus"></i></span>
        <input type="number" className="menu-card__size-info-medium" value={props.data.amount} onChange={() => { }} />
        <span onClick={() => props.setamount(props.data.id, props.data.amount - 1)} className="menu-card__size-info-right"><i className="fa fa-plus"></i></span>
      </div>
      <button className="button button--primary button--small-btn  button--block-btn">Order Now</button>
    </div>

  );

}

export default CardFood;
