import React from "react";
import CardFood from "../../components/CardFood/index";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import {
  deleteItem,
  setSize,
  setRating,
  setAmount
} from "../../store/actions/foodActions";
import { bindActionCreators } from "redux";

const MenuListing = props => {
  let menuListing = props.menus ? (
    props.menus.map((v, index) => {
      return (
        <div className="col-md-3 mb-4" key={v._id}>
          <CardFood
            handleOnAdd={() => props.addToCart(v)}
            data={v}
            delete={() => props.deleteItem(v._id)}
            setsize={(id, size) => props.setSize(id, size)}
            setrating={(id, rating) => props.setRating(id, rating)}
            setamount={(id, amount) => {
              props.setAmount(id, amount);
            }}
            key={v._id}
          />
        </div>
      );
    })
  ) : (
    <div>not found</div>
  );
  return (
    <div className="menu-card mt-5">
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="row">{menuListing}</div>
      </div>
    </div>
  );
};
function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart,
      deleteItem,
      setSize,
      setRating,
      setAmount
    },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    menus: state.food.foods
  };
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(MenuListing);
