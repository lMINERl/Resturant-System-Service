import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { addToCart } from "../../store/actions/cartActions";
// import { addComment } from "../../store/actions/userActions";
import { setRating as foodRating } from "../../store/actions/foodActions";
// import Comment from "../../components/comments/comments";
import StarRating from "../../components/StarRating/StarRating";

class FoodDetails extends React.Component {
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
  render() {
    let Food = this.props.food ? (
      <section className="Restaurant" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="Restaurant__photo d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h3>{this.props.food.name}</h3>
              <span className="edit-icon">
                <NavLink to="/foodform">
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
                      this.props.foodRating(this.props.food._id, rating)
                    }
                    rating={this.props.food.rating}
                    outof={5}
                  />
                </ul>
              </div>
            </div>
          </div>

          <div className="Restaurant__details p-5">
            <p>{this.props.food.description}</p>
          </div>

          <div className="Restaurant__categories">
            <div className="form-group">
              <input
                type="text"
                placeholder="Please Enter the Ingredients"
                name="categorie"
                className="form-control w-25 p-4 d-inline-block"
              />
              <button className="button button--primary button--small-btn mx-4">
                <i className="fa fa-plus" /> Add
              </button>
            </div>

            <div className="tags w-50">
              <span className="tags__item">Cheese</span>
              <span className="tags__item">Pasta</span>
              <span className="tags__item">Eggs</span>
              <span className="tags__item">Milk</span>
            </div>
          </div>
        </div>

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
        </div> */}
      </section>
    ) : (
      <div style={{ marginTop: "10rem" }}>no food to fetch</div>
    );
    return <div>{Food}</div>;
  }
}
const mapStateToProps = state => {
  return {
    food: state.food.selectedFood
  };
};
function mapActionsToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart,
      foodRating
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(FoodDetails);
