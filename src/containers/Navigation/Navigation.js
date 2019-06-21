import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "../../components/OrderBill";

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user.user,
    token: state.user.token
  };
};

class Navigation extends React.Component {
  state = {
    isCart: false,
    isMenu: false
  };

  totalCount({ cart }) {
    return cart.reduce((tcount, item) => {
      tcount += item.amount;
      return tcount;
    }, 0);
  }
  toggleCart(isCart) {
    this.setState({
      ...this.state,
      isCart: isCart
    });
  }
  render() {
    const cartBill = this.state.isCart ? <Cart /> : <></>;
    const IsLogedIn = () => {
      const obj = {
        bar: null,
        profile: null,
        profileSettings: null,
        groupOrder: null
      };
      // debugger;
      if (this.props.user._id && this.props.token) {
        obj.profile = (
          <NavLink to="/profile">
            <i className="fa fa-user-circle" />
          </NavLink>
        );
        obj.profileSettings = (
          <li className="nav-item dropdown">
            <NavLink
              to="/"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="fa fa-ellipsis-v setting_icon"
                onClick={() =>
                  this.setState({
                    ...this.state,
                    isMenu: !this.state.isMenu
                  })
                }
              />
            </NavLink>
            <div
              className={
                this.state.isMenu ? "dropdown-menu1" : "dropdown-menu1 d-none"
              }
              aria-labelledby="dropdownMenu2"
            >
              <button className="dropdown-item" type="button">
                <NavLink className="dropdownNav" to="/profile">
                  Profile
                </NavLink>
              </button>
              <button className="dropdown-item" type="button">
                <NavLink className="dropdownNav" to="/profile/grouporder">
                  {" "}
                  My Groups
                </NavLink>
              </button>
              <button className="dropdown-item" type="button">
                <NavLink className="dropdownNav">My Favourite</NavLink>
              </button>
              <button className="dropdown-item" type="button">
                <NavLink className="dropdownNav" to="/profile/edit">
                  Settings
                </NavLink>
              </button>
              <button className="dropdown-item" type="button">
                <NavLink className="dropdownNav">Log Out</NavLink>
              </button>
            </div>{" "}
          </li>
        );
        obj.groupOrder = (
          <NavLink
            to="/profile/grouporder"
            className="button button--transparent  button--border--sm button--small-btn nav-btn"
          >
            Group Ordering
          </NavLink>
        );
      } else {
        obj.bar = (
          <div className="navigation__secondary d-flex justify-content-end">
            <div className="login">
              <NavLink to="/login">Login</NavLink>|
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        );
      }
      return obj;
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-4 nopadding">
            {IsLogedIn().bar}
            <div className="navigation__basic navbar navbar-dark">
              <div className="nav-line container d-flex align-items-start">
                <NavLink to="/" className="navbar-brand">
                  Hungry
                </NavLink>
                <div className="nav-content">
                  <ul className="d-flex flex-direction-row justify-content-between">
                    <li>
                      <NavLink to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/restaurants">Restaurants</NavLink>
                    </li>
                    <li>
                      <NavLink to="/menus">Menus</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="nav-extras">
                  <ul className="nav d-flex flex-direction-row justify-content-between align-items-start">
                    <li className="nav-item" />
                    <li className="nav-item dropdown ">
                      {IsLogedIn().groupOrder}
                      <button
                        // to="#"
                        className="button"
                        onClick={() => this.toggleCart(!this.state.isCart)}
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-shopping-cart cart-icon" />
                      </button>
                      <span className="cart-icon__orders">
                        {this.totalCount(this.props.cart)}
                      </span>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      />
                    </li>
                    {cartBill}
                    <li className="nav-item">{IsLogedIn().profile}</li>
                    {IsLogedIn().profileSettings}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navigation);
