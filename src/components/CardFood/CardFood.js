/* eslint-disable react/no-typos */
import React from "react";
import { NavLink } from "react-router-dom";
import StarRating from "../../components/StarRating";
import SelectSize from "../../components/SelectSize";
import { getItemById } from "../../store/actions/foodActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Proptype from "prop-types";
import resLogo from "../../assets/white-hat-and-yellow-bread@2x.jpg";
function mapStateToProps(state) {
  return {
    user: state.user.user,
    token: state.user.token
  };
}

function mapActionToProps(dispatch) {
  return bindActionCreators(
    {
      getItemById
    },
    dispatch
  );
}

const CardFood = props => {
  let Sale = null;
  if (props.data.discountPrice > 0) {
    Sale = (
      <div className="menu-card__sale d-flex justify-content-center ">
        {props.data.discountPrice}%
      </div>
    );
  }

  const isLogedIn = () => {
    let obj = {
      deleteFood: null,
      editFood: null,
      favFood: null
    };
    if (props.user._id && props.token) {
      obj.favFood = <i className="fa fa-heart-o" />;
      if (props.user.roles.some(v => v === "delete"))
        obj.deleteFood = (
          <i onClick={() => props.delete()} className="fa fa-trash" />
        );
      if (props.user.roles.some(v => v === "edit"))
        obj.editFood = <i className="fa fa-pencil" />;
    }
    return obj;
  };

  return (
    <div className="menu-card__item">
      <div className="menu-card__edit-delete-fav">
        {isLogedIn().deleteFood}
        {isLogedIn().editFood}
        {isLogedIn().favFood}
      </div>
      <div className="menu-card__info">
        <div className="menu-card__image-card">
          <img className="menu-card__image" alt="logo" src={resLogo} />
          {Sale}
        </div>
        <div className="menu-card__edit-delete-fav">
        {isLogedIn().deleteFood}
        {isLogedIn().editFood}
        {isLogedIn().favFood}
      </div>
        <NavLink
          to="/fooddetails"
          onClick={() => props.getItemById(props.data._id)}
        >
          <h3 className="menu-card__heading text-center mt-5 mb-2">
            {props.data.name}
          </h3>
        </NavLink>
        <div className="star-rating text-center">
          <ul className="list-inline">
            <StarRating
              setRate={rating => props.setrating(props.data._id, rating)}
              rating={props.data.rating}
              outof={5}
            />
          </ul>
        </div>
        <div className="menu-card__price-data">
          <span className="menu-card__price">
            ${props.data.price[props.data.size]}
          </span>
        </div>
        <span className="menu-card__border" />
      </div>
      <div className="menu-card__size">
        <SelectSize
          size={props.data.size}
          comId={props.data._id}
          names={props.data.sizes}
          select={size => props.setsize(props.data._id, size)}
        />
      </div>
      <div className="menu-card__size-info">
        <span
          onClick={() => props.setamount(props.data._id, props.data.amount - 1)}
          className="menu-card__size-info-left"
        >
          <i className="fa fa-minus" />
        </span>
        <input
          type="text"
          className="menu-card__size-info-medium"
          value={props.data.amount}
          onChange={() => {}}
        />
        <span
          onClick={() => props.setamount(props.data._id, props.data.amount + 1)}
          className="menu-card__size-info-right"
        >
          <i className="fa fa-plus" />
        </span>
      </div>
      <button
        onClick={() => props.handleOnAdd(props.data)}
        className="button button--primary button--small-btn  button--block-btn"
      >
        Add To Cart
      </button>
    </div>
  );
};

CardFood.proptype = {
  data: Proptype.shape({
    _id: Proptype.string.isRequired,
    name: Proptype.string.isRequired,
    rating: Proptype.number.isRequired,
    discountPercent: Proptype.number,
    discountPrice: Proptype.number,
    amount: Proptype.number,
    size: Proptype.number.isRequired,
    sizes: Proptype.arrayOf(Proptype.string).isRequired,
    price: Proptype.arrayOf(Proptype.number).isRequired
  }).isRequired,
  handleOnAdd: Proptype.func.isRequired,
  delete: Proptype.func.isRequired,
  setsize: Proptype.func.isRequired,
  setamount: Proptype.func.isRequired,
  setrating: Proptype.func.isRequired
};

CardFood.defaultProps = {
  discountPercent: 0,
  discountPrice: 0,
  amount: 0
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(CardFood);
