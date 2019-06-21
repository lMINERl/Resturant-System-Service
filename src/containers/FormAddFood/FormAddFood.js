import React from "react";
import { connect } from "react-redux";
import { addItem, updateItem } from "../../store/actions/foodActions";
import { getRestaurantById } from "../../store/actions/restaurantActions";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant.selectedRestaurant,
    foodToEditInRestaurant: state.food.selectedFood
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addItem,
      updateItem,
      getRestaurantById
    },
    dispatch
  );
};

class FormAddFood extends React.Component {
  state = {
    _id: "",
    name: "",
    discountPrice: 0,
    price: [],
    category: "",
    sizes: [],
    description: "",

    isSale: false
  };

  componentDidMount() {
    if (this.props.match.params.restaurantId)
      this.props.getRestaurantById(this.props.match.params.restaurantId);
  }
  submitHandler = event => {
    event.preventDefault();
    if (this.props.match.params.restaurantId) {
      const isPrices = this.state.price.every(v => v > 0);
      if (this.state.category && this.state.sizes.length && isPrices) {
        this.props.addItem({
          ...this.state,
          _id: Date.now().toString(),
          amount: 0,
          size: 0,
          rating: 0
        });
        this.props.history.replace(
          `/restaurants/details/${this.props.match.params.restaurantId}`
        );
      }
    }
  };
  deleteSize(index) {
    let nSizes = [...this.state.sizes];
    let nPrice = [...this.state.price];
    nSizes = [].concat(
      nSizes.slice(0, index),
      nSizes.slice(index + 1, nSizes.length)
    );
    nPrice = [].concat(
      nPrice.slice(0, index),
      nPrice.slice(index + 1, nPrice.length)
    );
    this.setState({ ...this.state, sizes: nSizes, price: nPrice });
  }
  addSize() {
    const nSizes = [...this.state.sizes];
    const nPrice = [...this.state.price];
    nSizes.push("");
    nPrice.push(0);
    this.setState({ ...this.state, sizes: nSizes, price: nPrice });
  }
  editSize(index, name) {
    if (name && name.length < 6) {
      const nSizes = [...this.state.sizes];
      nSizes[index] = name;
      this.setState({ ...this.state, sizes: nSizes });
    }
  }
  editPrice(index, value) {
    if (!isNaN(Number(value))) {
      const nPrice = [...this.state.price];
      nPrice[index] = Number(value);
      this.setState({ ...this.state, price: nPrice });
    }
  }
  setSale(value) {
    if (!isNaN(Number(value)) && value <= 100 && value >= 0) {
      this.setState({ ...this.state, discountPrice: value });
    }
  }

  displayPrice(event, id) {
    const nprice = [...this.state.price];
    nprice[id] = !nprice[id];
    this.setState({
      ...this.state,
      price: nprice
    });
  }

  render() {
    if (
      !this.props.match.params.restaurantId ||
      !this.props.restaurant.categories
    ) {
      return (
        <h1
          className="d-flex justify-content-center"
          style={{ height: "100vh" }}
        >
          This Menu You Want To Add Does Not Belong To Any Restaurant :)
        </h1>
      );
    }

    let options = (
      <>
        {this.props.restaurant.categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </>
    );
    const SizesInput = this.state.sizes.map((v, i) => {
      return (
        <div className="input-group col" key={i}>
          <div className="input-group-prepend">
            <span className="input-group-text label label--size">
              <input
                type="text"
                placeholder="size"
                className="text-center form-control form-control--inputs w-100 h-100"
                value={v || ""}
                onChange={event => this.editSize(i, event.target.value)}
              />
            </span>
          </div>
          <input
            className="form-control col-6 form-control--inputs"
            type="text"
            placeholder="size price"
            aria-label="Recipient's "
            aria-describedby="my-addon"
            value={this.state.price[i]}
            onChange={event => this.editPrice(i, event.target.value)}
          />
          <i
            className="fa fa-trash d-flex align-items-center ml-2"
            onClick={() => this.deleteSize(i)}
          />
        </div>
      );
    });

    return (
      <div className="container form-container form-separator">
        <h3 className="head-title col text-center">Add food to Menu</h3>
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
                {/* <!-- Name --> */}
                <div className="input-group col">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text label label--size"
                      id="food-title"
                    >
                      Food Name
                    </span>
                  </div>
                  <input
                    className="form-control col form-control--inputs"
                    type="text"
                    placeholder="Food Name"
                    aria-label="Recipient's "
                    aria-describedby="my-addon"
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </div>

                {/* <!-- Category --> */}
                <div className="form-separator" />
                <div className="input-group col">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text label label--size"
                      id="food-category"
                    >
                      category
                    </span>
                  </div>
                  <select
                    className="form-control form-control--inputs"
                    onChange={event =>
                      this.setState({ category: event.target.value })
                    }
                    id="exampleFormControlSelect1"
                  >
                    <option selected defaultValue="">
                      Choose...{" "}
                    </option>
                    {options}
                  </select>
                </div>

                {/* <!-- Sizes --> */}
                <div className="form-separator" />
                <div className="input-group col">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text label label--size"
                      id="food-size"
                    >
                      Size
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn button--small-btn"
                    onClick={() => this.addSize()}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
                {SizesInput}

                <div className="input-group col">
                  <div className="input-group-prepend">
                    <button
                      type="button"
                      onClick={() =>
                        this.setState({ isSale: !this.state.isSale })
                      }
                      className="input-group-text label label--size"
                    >
                      Sale
                    </button>
                  </div>
                  <input
                    className={
                      this.state.isSale
                        ? "form-control col form-control--inputs"
                        : "d-none"
                    }
                    type="text"
                    placeholder="Food Name"
                    aria-label="Recipient's "
                    value={this.state.discountPrice}
                    aria-describedby="my-addon"
                    onChange={event => this.setSale(event.target.value)}
                  />
                </div>

                {/* <!-- Description --> */}
                <div className="form-separator" />
                <div className="input-group col">
                  <div className="input-group-prepend">
                    <span className="input-group-text label" id="description">
                      Description
                    </span>
                  </div>
                  <textarea
                    className="form-control form-control--inputs form-control--inputs-txtarea"
                    aria-label="With textarea"
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </div>

                {/* <-- confirm --> */}
                <div className="form-separator" />
                <div className="ml-auto mr-auto">
                  <button
                    type="submit"
                    className="button button--black"
                    onClick={e => this.submitHandler(e)}
                  >
                    Save
                  </button>
                  <Link className="button button--secondary" to="/">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="order-sm-1 order-0 col-md-4 mt-auto mb-auto ml-auto ">
            <div className="add-group img ml-auto mr-auto">
              <img src="./assets/14762094.jpg" alt="" />
            </div>
            <div className="d-flex justify-content-center form-separator ">
              <input
                type="file"
                href="#"
                className="button button--white"
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
)(FormAddFood);
