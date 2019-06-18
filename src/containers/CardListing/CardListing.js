import React, { Component } from "react";
import CardFood from "../../components/CardFood/index";
import { connect } from "react-redux";
import {
  getRestaurantMenuDispatch,
  setSize,
  setRating,
  setAmount,
  deleteItem
} from "../../store/actions/foodActions";
import { addToCart } from "../../store/actions/cartActions";
import { bindActionCreators } from "redux";

class CardListing extends Component {
  // from database
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getRestaurantMenuDispatch(this.props.match.params.id);
      // this.props.history.push("/") // notfound
    }
  }

  setAmount = (id, amount) => {
    this.props.setAmount(id, amount);
  };

  setRating = (id, rating) => {
    this.props.setRating(id, rating);
  };
  setSize = (id, size) => {
    this.props.setSize(id, size);
  };

  dispatchAddToCart(cardItem) {
    this.props.addToCart(cardItem);
  }

  render() {
    let menuListing = this.props.data ? (
      this.props.data.map((v, index) => {
        return (
          <CardFood
            key={v._id}
            delete={() => this.props.deleteItem(v._id)}
            handleOnAdd={this.dispatchAddToCart.bind(this)}
            data={v}
            setsize={this.setSize.bind(this)}
            setrating={this.setRating.bind(this)}
            setamount={this.setAmount.bind(this)}
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
        {/* <Cart /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.food.foods
  };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurantMenuDispatch,
      addToCart,
      setSize,
      setRating,
      setAmount,
      deleteItem
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CardListing);
