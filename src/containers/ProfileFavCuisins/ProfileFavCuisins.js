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
class ProfileFavCuisins extends React.Component {
  render() {
    let menuListing = this.props.menus ? (
      this.props.menus.map((v, index) => {
        return (
          <div className="col-md-4 mb-4" key={v._id}>
            <CardFood
              handleOnAdd={() => this.props.addToCart(v)}
              data={v}
              delete={() => this.props.deleteItem(v._id)}
              setsize={(id, size) => this.props.setSize(id, size)}
              setrating={(id, rating) => this.props.setRating(id, rating)}
              setamount={(id, amount) => {
                this.props.setAmount(id, amount);
              }}
              key={v._id}
            />
          </div>
        );
      })
    ) : (
      <div>not found</div>
    );
    return <div className="row">{menuListing}</div>;
  }
}

function mapActionsToprops(dispatch) {
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
function mapStateToprops(state) {
  return {
    menus: state.food.foods
  };
}
export default connect(
  mapStateToprops,
  mapActionsToprops
)(ProfileFavCuisins);
