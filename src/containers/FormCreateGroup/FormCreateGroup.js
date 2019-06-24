import React from "react";
// import { NavLink } from "react-router-dom";
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
      <div className="container">
        <h3 className="head-title col text-center p-4">Create Group Order</h3>
        <div className="">
       
          <div className="">
        

         
            <form className="" method="post" action="">
         
              <div className="d-flex flex-column">
                <div className="form-group">
                  <label htmlFor="inputState">Group Restaurant</label>
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
                
                  <input
                    className="form-control form-control--inputs "
                    type="text"
                    placeholder="order delivery location"
                    aria-label="location"
                    aria-describedby="location"
                    onChange={e => this.setState({ location: e.target.value })}
                  />
                  
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
