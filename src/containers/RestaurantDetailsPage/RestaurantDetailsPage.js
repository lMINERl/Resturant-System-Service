import React, { Component } from "react";
import { connect } from "react-redux";
import CardFood from "../../components/CardFood/CardFood";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addToCart } from "../../store/actions/cartActions";

import {
  setRating as restaurantRating,
  getRestaurantById
} from "../../store/actions/restaurantActions";
import {
  getRestaurantMenu,
  deleteItem,
  setSize,
  setRating as foodRating,
  setAmount
} from "../../store/actions/foodActions";
// import Comment from "../../components/comments/comments";
import StarRating from "../../components/StarRating/StarRating";

class DetailsPage extends Component {
  dispatchAddToCart(cardItem) {
    this.props.addToCart(cardItem);
  }
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { id } = this.state.res;
  //   if (
  //     this.refs.author.value !== "" &&
  //     isNaN(this.refs.author.value) &&
  //     this.refs.comment.value !== "" &&
  //     isNaN(this.refs.author.value)
  //   ) {
  //     const author = this.refs.author.value;
  //     const comment = this.refs.comment.value;
  //     const rating = this.refs.rating.value;
  //     this.props.addComment(id, comment, rating, author);
  //   } else {
  //     alert("please enter your name and comment");
  //   }
  // };
  componentDidMount() {
    if (this.props.match.params.restaurantId) {
      this.props.getRestaurantById(this.props.match.params.restaurantId);
      if (this.props.restaurant)
        this.props.getRestaurantMenu(this.props.match.params.restaurantId);
    } else {
      this.props.history.push("/"); // notfound
    }
  }
  render() {
    const isUserLogin = () => {
      const obj = { addFood: null };
      if (this.props.user._id && this.props.token) {
        obj.addFood = (
          <NavLink
            to={`/foodform/${this.props.match.params.restaurantId}`}
            className="badge badge-warning listing-header__btn btn--right text-white p-3"
          >
            <i className="fa fa-plus-square" />
            Add Meal
          </NavLink>
        );
      }
      return obj;
    };

    if (!this.props.match.params.restaurantId || !this.props.restaurant._id) {
      return (
        <h1
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          This Restaurant Does Not Exist
        </h1>
      );
    }

    let Restaurant = this.props.restaurant ? (
      <section className="Restaurant" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="Restaurant__photo d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3>{this.props.restaurant.name}</h3>
              <span className="edit-icon">
                <NavLink to="/restaurantform">
                  <i className="fa fa-pencil" />
                </NavLink>
              </span>
              <span className="love-icon">
                <i className="fa fa-heart" />
              </span>
              <div className="star-rating">
                <ul className="list-inline gold-star">
                  <StarRating
                    setRate={rating =>
                      this.props.restaurantRating(
                        this.props.restaurant._id,
                        rating
                      )
                    }
                    rating={this.props.restaurant.rating}
                    outof={5}
                  />
                </ul>
              </div>
            </div>
          </div>

          <div className="Restaurant__details p-5">
            <p>{this.props.restaurant.description}</p>
          </div>

          <div className="Restaurant__categories">
            <div className="form-group">
              <input
                type="text"
                placeholder="Please enter the categories"
                name="categorie"
                className="form-control w-25 p-4 d-inline-block"
              />
              <button className="button button--primary button--small-btn">
                <i className="fa fa-plus" /> Add
              </button>
            </div>

            <div className="tags w-50">
              <span className="tags__item">Pizza</span>
              <span className="tags__item">Burger</span>
              <span className="tags__item">Pasta</span>
              <span className="tags__item">Sea Food</span>
            </div>
          </div>
        </div>

        <div className="Restaurant">
          <div className="Restaurant__menu">
            {/* <!--start filter-nav--> */}
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <h2 className="listing-header">
                    {this.props.restaurant.name} Menu
                    {isUserLogin().addFood}
                  </h2>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between py-3 mt-4 align-items-center">
                    <form className="form-inline ">
                      <input
                        className="filter-search form-control p-4 mr-sm-2"
                        type="search"
                        placeholder="Search"
                      />
                      <button className="button button-filterNav" type="submit">
                        Search
                      </button>
                    </form>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <ul className="navbar-nav ">
                      <li className="nav-item dropdown mx-4">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Category
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavLink className="dropdown-item">Pizza</NavLink>
                          <NavLink className="dropdown-item">Sea Food</NavLink>
                          <NavLink className="dropdown-item">Drinks</NavLink>
                        </div>
                      </li>
                      <li className="nav-item dropdown mx-4">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Rating
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavLink className="dropdown-item">Action</NavLink>
                          <NavLink className="dropdown-item">
                            Another action
                          </NavLink>
                          <div className="dropdown-divider" />
                          <NavLink className="dropdown-item">
                            Something else here
                          </NavLink>
                        </div>
                      </li>
                      <li className="nav-item dropdown mx-4">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Price
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavLink className="dropdown-item">Action</NavLink>
                          <NavLink className="dropdown-item">
                            Another action
                          </NavLink>
                          <div className="dropdown-divider" />
                          <NavLink className="dropdown-item">
                            Something else here
                          </NavLink>
                        </div>
                      </li>
                      <li className="nav-item dropdown mx-4">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          A_Z
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <NavLink className="dropdown-item">Action</NavLink>
                          <NavLink className="dropdown-item">
                            Another action
                          </NavLink>
                          <div className="dropdown-divider" />
                          <NavLink className="dropdown-item">
                            Something else here
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* <!--end filter-nav--> */}

              <div className="row">
                {this.props.restaurantMenu.map(v => {
                  return (
                    <CardFood
                      handleOnAdd={this.dispatchAddToCart.bind(this)}
                      data={v}
                      delete={() => this.props.deleteItem(v._id)}
                      setsize={(id, size) => this.props.setSize(id, size)}
                      setrating={(id, rating) =>
                        this.props.foodRating(id, rating)
                      }
                      setamount={(id, amount) =>
                        this.props.setAmount(id, amount)
                      }
                      key={v._id}
                    />
                  );
                })}
              </div>
              {/* <OrderBill /> */}
              {/* <div className="testimonials">
                <div className="row">
                  {this.props.restaurant.comments.map(c => {
                    return <Comment data={c} key={c.userId} />;
                  })}
                </div>
                <div className="add-comments">
                  <div className="row">
                    <div className="col-md-6">
                      <form ref="commentForm" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">
                            Add Comment
                          </label>
                          <input
                            type="text"
                            ref="author"
                            className="form-control form-control--inputs"
                            id="exampleFormControlInput1"
                            placeholder="author"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            ref="comment"
                            className="form-control form-control--inputs"
                            id="exampleFormControlInput1"
                            placeholder="comment"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            min="0"
                            max="5"
                            ref="rating"
                            className="form-control form-control--inputs"
                            id="exampleFormControlInput1"
                            placeholder="rating"
                          />
                        </div>
                        <input
                          type="submit"
                          value="Send"
                          className="button button--secondary"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div style={{ marginTop: "10rem" }}>no res to fetch</div>
    );
    return <div>{Restaurant}</div>;
  }
}
const mapStateToProps = state => {
  return {
    restaurant: state.restaurant.selectedRestaurant,
    restaurantMenu: state.food.foods,
    user: state.user.user,
    token: state.user.token
  };
};
function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart,
      deleteItem,
      foodRating,
      restaurantRating,
      setAmount,
      setSize,
      getRestaurantById,
      getRestaurantMenu
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(DetailsPage);
