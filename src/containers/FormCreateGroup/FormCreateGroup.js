import React from "react";
import { connect } from "react-redux";
import { updateItem } from "../../store/actions/groupActions";
import { addItem } from "../../store/actions/groupActions";

import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addItem,
      updateItem
    },
    dispatch
  );
};

class FormCreateGroup extends React.Component {
  state = {
    _id: "", //restaurant id
    name: "", // restaurant name
    location: "", // delivery location
    validName: true, // form validattion for name
    validlocation: true // form validation for Location
  };
  submitHandler = event => {
    event.preventDefault();
    if (!this.state.name) this.setState({ ...this.state, validName: false });
    if (!this.state.location)
      this.setState({ ...this.state, validlocation: false });

    if (this.state.name && this.state.location) {
      this.props.addItem({
        _id: this.state._id,
        name: this.state.name,
        location: this.state.location
      });
      this.props.history.replace(`/profile/grouporder`);
    }
  };

  render() {
    const options = this.props.restaurants.map(v => {
      return (
        <option key={v._id} value={v._id}>
          {v.name}
        </option>
      );
    });
    return (
      <div className="container form-container form--height form-separator">
        <h3 className="head-title col text-center">Create Resturant Group</h3>
        <hr />
        <div className="row d-flex">
          {/* <!-- form --> */}
          <div className="order-sm-0 order-1 col-md-7 col-sm-12 ml-sm-1 ml-md-5 mt-sm-2 p-4">
            {/* <!-- header --> */}

            {/* <!-- form --> */}
            <form className="" method="post" action="">
              {/* <!-- padding --> */}

              {/* <!-- horizontal display --> */}
              <div className="d-flex flex-column">
                <div className="form-group form-control--inputs">
                  <label htmlFor="inputState">group Restaurant</label>
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={e =>
                      this.setState({
                        _id: e.target.value,
                        name:
                          e.target.options[e.target.selectedIndex].textContent
                      })
                    }
                  >
                    <option value={false}>Choose...</option>
                    {options}
                  </select>
                </div>

                {/* <!-- Location --> */}
                <div className="form-separator" />
                <div className="input-group col">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text label label--size"
                      id="location"
                    >
                      Location
                    </span>
                  </div>
                  <input
                    className="form-control form-control--inputs "
                    type="text"
                    placeholder="order delivery location"
                    aria-label="location"
                    aria-describedby="location"
                    onChange={e => this.setState({ location: e.target.value })}
                  />
                </div>

                <div className="form-separator" />
                <div className="ml-auto mr-auto">
                  <button
                    type="submit"
                    className="button button--black"
                    onClick={e => this.submitHandler(e)}
                  >
                    Save
                  </button>
                  <Link to="/" className="button button--secondary">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- image upload --> */}
          <div className="order-sm-1 order-0 col-md-4 mt-auto mb-auto ml-auto ">
            <div className="add-group img ml-auto mr-auto">
              <img src="images/services/order.jpg" alt="" />
            </div>
            <div className="d-flex justify-content-center form-separator ">
              <input
                type="file"
                className="button form-control--inputs button--white"
                placeholder="Upload"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreateGroup);
