import React from "react";
import CardFood from "../../components/CardFood/index";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { deleteItem, setSize, setRating, setAmount } from "../../store/actions/foodActions";
import { bindActionCreators } from "redux";

const MenuListing = props => {
  let menuListing = props.menus ? (
    props.menus.map((v, index) => {
      return (
        <CardFood
          handleOnAdd={() => props.addToCart(v)}
          data={v}
          delete={() => props.deleteItem(v._id)}
          setsize={(id, size) => props.setSize(id, size)}
          setrating={(id, rating) => props.setRating(id, rating)}
          setamount={(id, amount) => { props.setAmount(id, amount) }}
          key={v._id}
        />
      );
    })
  ) : (
      <div>not found</div>
    );

  return (
    <div className="menu-card">
      <div className="container">
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
