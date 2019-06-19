import React from "react";
import CardFood from "../../components/CardFood/index";
import Cart from "../../components/OrderBill/OrderBill";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { deleteItem } from "../../store/actions/foodActions";
import { bindActionCreators } from "redux";

const MenuListing = props => {
  let menuListing = props.menus ? (
    props.menus.map((v, index) => {
      return (
        <CardFood
          handleOnAdd={() => props.addToCart(v)}
          data={v}
          delete={() => props.deleteItem(v._id)}
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
        <div className="row">
          <div className="col-3" />
          <div />
          {menuListing}
        </div>
      </div>
      <Cart />
    </div>
  );
};
function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart,
      deleteItem
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
