import React, { Component } from "react";
import { AutoComplete } from "../AutoComplete/AutoComplete";
// import { Autocomplete } from '../AutoComplete/AutoComplete';
import Carousel from "../slider/slider";
import { connect } from "react-redux";
import WOW from "wowjs";

class HomePage extends Component {
  style = {
    backgroundImage: "url('../assets/download.jpg')"
  };
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    const cities = [];
    return (
      <div>
        {/* <!-- Start sliders --> */}
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    className="d-block d-block--first w-100"
                    alt="First slide"
                  >
                    <div className=" container">
                      <div
                        className="carousel-description p-0 wow fadeInLeft"
                        data-wow-duration="1s"
                      >
                        <h3 className="caption">
                          Order Your Food Online For <br />
                          Take Away, Home Delivery
                        </h3>
                      </div>

                      {this.props.restaurants.forEach(r => {
                        if (!cities.includes(r.location)) {
                          cities.push(r.location);
                        }
                      })}
                      <AutoComplete
                        suggestions={cities}
                        {...this.props}
                        placeholder="Enter City To Find Restaurants"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="d-block d-block--second w-100"
                    alt="Second slide"
                  />
                  <div className="carousel-caption p-0 ">
                    <h3 className="caption">
                      Add Your Restaurant And
                      <br />
                      Grow Your Business
                    </h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="d-block d-block--third w-100"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Status Bar --> */}
        <section className="status-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="status-bar__item d-flex">
                  <div className="status-bar__item__img">
                    <img src="assets/fact-icon-5@2x.jpg" alt="" />
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0"> +137 </h3>
                    <h4> Restaurants </h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="status-bar__item d-flex">
                  <div className="status-bar__item__img">
                    <img src="assets/fact-icon-3@2x.jpg" alt="" />
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0"> +137 </h3>
                    <h4> Restaurants </h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="status-bar__item d-flex">
                  <div className="status-bar__item__img">
                    <img src="assets/fact-icon4@2x.jpg" alt="" />
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0"> +137 </h3>
                    <h4> Restaurants </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- End Status Bar --> */}

        {/* // <!-- Start Group ordering section --> */}
        <div className="container">
          <div className="row big-cart d-flex align-items-center">
            <div className="col-md-8" style={{ fontSize: "4rem" }}>
              <div
                className="wow fadeInLeft"
                data-wow-duration=".5s"
                data-wow-delay=""
              >
                <span>
                  <span className="big-cart-now">Now </span>It's Easy To Make A
                  Group Order <br />
                  With Your Friends In Few Steps …{" "}
                </span>
              </div>
              <button
                className="button button-createGroup button--border wow bounceInUp"
                data-wow-duration="2s"
                data-wow-delay=".5"
              >
                Creat Your Group Now
              </button>
            </div>
            <div
              className="big-cart-img col-md-4 wow fadeInRight"
              data-wow-duration=".5s"
              data-wow-delay=".3s"
            >
              <img className="img2" src="" alt="Group Ordering img" />
            </div>
          </div>
        </div>

        {/* // <!-- End Group ordering section --> */}

        <div style={this.style}>
          <div className="bg-color">
            <div className="container">
              <div className="row ">
                <h1 className="big-title">EASY ORDER IN 3 STEPS</h1>
                <br />
                <div className="carts-container">
                  <div className="cart">
                    <div className="cart-img">
                      <img className="img2" src="./assets/dsfg-1.jpg" alt="" />
                    </div>
                    <h2 className="cart-title">Explore Restaurants</h2>
                    <div className="cart-descryption">
                      some details about this restaurant that no a very
                    </div>
                    <div className="cart-number">1</div>
                  </div>

                  <div className="cart">
                    <div className="cart-img">
                      <img className="img2" src="./assets/dsfg-1.jpg" alt="" />
                    </div>
                    <h2 className="cart-title">Choose Your Meal</h2>
                    <div className="cart-descryption">
                      some details about this restaurant that no a very
                    </div>
                    <div className="cart-number">2</div>
                  </div>
                  <div className="cart">
                    <div className="cart-img">
                      <img className="img2" src="./assets/dsfg-1.jpg" alt="" />
                    </div>
                    <h2 className="cart-title">CheckOut & Enjoy</h2>
                    <div className="cart-descryption">
                      some details about this restaurant that no a very
                    </div>
                    <div className="cart-number">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Start Features --> */}
        <section className="features">
          <div className="container">
            <h2 className="section__title p-5">Features</h2>
            <div className="row">
              <div className="col-sm-4">
                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money" />
                  </div>

                  <div className="features__item__description">
                    <h3>Easy Online Ordering</h3>
                    <p>
                      You can easily navigate around site to complete your order
                      .{" "}
                    </p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money" />
                  </div>

                  <div className="features__item__description">
                    <h3>Popular Restaurants </h3>
                    <p>More than 500 restaurants menus in one place . </p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money" />
                  </div>

                  <div className="features__item__description">
                    <h3>Mobile Application</h3>
                    <p>Soon all Restaurants in your pocket .</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <img className="" src="assets/chef_PNG140@2x.jpg" alt="" />
              </div>

              <div className="col-sm-4">
                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money" />
                  </div>

                  <div className="features__item__description">
                    <h3>Easy Online Ordering</h3>
                    <p>
                      You can easily navigate around site to complete your order
                      .{" "}
                    </p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money" />
                  </div>

                  <div className="features__item__description">
                    <h3>Popular Restaurants </h3>
                    <p>More than 500 restaurants menus in one place . </p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money" />
                  </div>

                  <div className="features__item__description">
                    <h3>Mobile Application</h3>
                    <p>Soon all Restaurants in your pocket .</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--End Features --> */}
        {/* <!--start testimonials--> */}
        <h2 className="section__title p-5">Testimonials</h2>
        <Carousel slides={this.props.comments} />
        {/* <!--end testimonials--> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.user.comments,
    restaurants: state.restaurant.restaurants
  };
};
export default connect(mapStateToProps)(HomePage);
