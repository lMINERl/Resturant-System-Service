import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "../../components/OrderBill";

const mapStateToProps = state => {
  return {
    cart: state.cart,
    user: state.user.user,
    token: state.user.token,
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
      if (this.props.user._id && this.props.token) {
        obj.profile = (
          <NavLink to="/profile" className="mt-3">
            <i className="fa fa-user-circle text-white fa-fw" />
          </NavLink>
        );
        obj.profileSettings = (
          <li className="nav-item dropdown mt-3 mr-3">
            <NavLink
              to="/"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i
                className="fa fa-ellipsis-v setting_icon text-white fa-fw "
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
            className="button button--transparent  button--border--sm button--small-btn nav-btn button__hover"
          >
            Group Ordering
          </NavLink>
        );
      } else {
        obj.bar = (
          <div className="navigation__secondary d-flex justify-content-end">
            <div className="login">
              <NavLink to="/login">Login </NavLink> |
              <NavLink to="/register"> Register</NavLink>
            </div>
          </div>
        );
      }
      return obj;
    };

    return (
      <div className="container-fluid">
        <div className="navbar navbar-expand-lg fixed-top w-100">
          <div className="nopadding w-100">
            {IsLogedIn().bar}
            <div className="navigation__basic navbar navbar-dark">
              <div className="container">
                <NavLink to="/" className="navbar-brand">
                  Hungry
                </NavLink>
                <div className="nav-content">
                  <ul className="navbar-nav navigation__links">
                    <li className="nav-item">
                      <NavLink to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/restaurants">Restaurants</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/menus">Menus</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="nav-extras">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item" />

                    <li className="nav-item dropdown ">
                      {IsLogedIn().groupOrder}
                      <button
                        // to="#"
                        className="button position-relative"
                        onClick={() => this.toggleCart(!this.state.isCart)}
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-shopping-cart cart-icon" />
                        <span className="cart-icon__orders">
                          {this.totalCount(this.props.cart)}
                        </span>
                      </button>

                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      />
                    </li>
                    {cartBill}
                    <li className="nav-item" style={{    marginTop: '10px'}}>{IsLogedIn().profile}</li>
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
