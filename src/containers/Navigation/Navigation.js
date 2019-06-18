import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import Cart from '../../components/OrderBill';
class Navigation extends React.Component {
  state = {
    isCart: false
  }

  totalCount({cart}) {
    return cart.reduce((tcount, item) => {
      tcount += item.amount;
      return tcount;
    }, 0);
  }
  toggleCart(isCart) {
    this.setState({
      ...this.state,
      isCart: isCart
    })
  }
  render() {
    const cartBill = this.state.isCart ? <Cart /> : <></>;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-4 nopadding">
            <div className="navigation__secondary d-flex justify-content-end">
              <div className="login">
                <NavLink to="/login">Login</NavLink>|
                <NavLink to="/register">Register</NavLink>
              </div>
            </div>
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
                      <NavLink to="/restaurants" >Restaurants</NavLink>
                    </li>
                    <li>
                      <NavLink to="/menus" >Menus</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="nav-extras">
                  <ul className="nav d-flex flex-direction-row justify-content-between align-items-start">
                    <li className="nav-item">
                      <NavLink
                        to="/profile/grouporder"
                        className="button button--transparent  button--border--sm button--small-btn nav-btn"
                      >
                        Group Ordering
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown ">
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
                      <span className="cart-icon__orders">{this.totalCount(this.props.cart)}</span>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      />
                    </li>
                      {cartBill}
                    <li className="nav-item">
                      <NavLink to="/profile">
                        <i className="fa fa-user-circle" />
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        to="/"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v setting_icon" />
                      </NavLink>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <button className="dropdown-item" type="button">
                          Profile
                        </button>
                        <button className="dropdown-item" type="button">
                          My Orders
                        </button>
                        <button className="dropdown-item" type="button">
                          My Groups
                        </button>
                        <button className="dropdown-item" type="button">
                          Settings
                        </button>
                        <button className="dropdown-item" type="button">
                          Log Out
                        </button>
                      </div>
                    </li>
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
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Navigation);
