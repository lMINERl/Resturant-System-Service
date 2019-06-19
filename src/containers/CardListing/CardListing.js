import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CardFood from "../../components/CardFood/index";
// import Cart from '../../components/OrderBill/OrderBill';
import SideBar from "../../components/SideBar/index";
import { connect } from "react-redux";
import {
  getRestaurantMenuDispatch,
  setSize,
  setRating,
  setAmount,
  deleteItem,
  getFilteredItems
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
    let filterListing = ()=>{this.props.getFilteredItems (this.props.checkedlist)}
    return (
      <>
      <div className="h-100 mt-5 mb-5" />
      <div className="h-100 mt-5 mb-5" />
      <div className="h-100 mt-5 mb-5" />
      <div className="h-100 mt-5 mb-5" />

      <div className="">
        <div className="d-flex justify-content-between container mt-5 mb-5 listing-header listing-header--with-margin">
        Domino's Pizza Menu
          <NavLink
            to="/foodform"
            className="badge badge-warning listing-header__btn "
          >
            <i className="fa fa-plus-square" />
            Add Food
          </NavLink>
        </div>
        </div>
      <div className="menu-card">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9 d-flex flex-wrap align-content-around">
              {menuListing}
              
            </div>
          </div>
        </div>
        {/* <Cart /> */}
      </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.food.foods,
    checkedlist:state.category.checkedlist
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
      deleteItem,
      getFilteredItems
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CardListing);
