import React, { Component } from "react";
import { AutoComplete } from "../AutoComplete/AutoComplete";
// import { Autocomplete } from '../AutoComplete/AutoComplete';
import Carousel from "../slider/slider";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import WOW from "wowjs";

// images
import status1 from "../../assets/fact-icon-5@2x.jpg";
import status2 from "../../assets/fact-icon-3@2x.jpg";
import status3 from "../../assets/fact-icon4@2x.jpg";

import groupOrder from "../../assets/asset-1@2x.jpg";

import stepsBG from "../../assets/download.jpg";
import steps from "../../assets/dsfg-1@2x.jpg";
import steps2 from "../../assets/sdfsdfs.jpg";
import steps3 from "../../assets/we.jpg";

import chef from "../../assets/chef_PNG140@2x.jpg";

class HomePage extends Component {
  style = {
    backgroundImage: "url('" + stepsBG + "')"
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
                  <div className="Header--BG1 w-100" alt="First slide">
                    <div className=" container">
                      <div className="Header__content">
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
                    <img src={status1} alt="" />
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
                    <img src={status2} alt="" />
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0"> +137 </h3>
                    <h4> People Served </h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="status-bar__item d-flex">
                  <div className="status-bar__item__img">
                    <img src={status3} alt="" />
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0"> +1500 </h3>
                    <h4> Order </h4>
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
                  With Your Friends In Few Steps .
                </span>
              </div>
              <NavLink to="/groupform">
               <button
                className="button button-createGroup button--border wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                Creat Your Group Now
              </button>               
              </NavLink>
            </div>
            <div
              className="big-cart-img col-md-4 wow fadeInRight"
              data-wow-duration=".5s"
              data-wow-delay=".3s"
            >
              <img className="img2" src={groupOrder} alt="Group Ordering img" />
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
                  <div
                    className="cart wow fadeIn"
                    data-wow-duration=".5s"
                    data-wow-delay=".5s"
                  >
                    <div className="cart-img">
                      <img className="img2" src={steps} alt="" />
                    </div>
                    <h2 className="cart-title">Explore Restaurants</h2>
                    <div className="cart-descryption">
                      some details about this restaurant that no a very
                    </div>
                    <div className="cart-number">1</div>
                  </div>

                  <div
                    className="cart wow fadeIn"
                    data-wow-duration=".5s"
                    data-wow-delay="1s"
                  >
                    <div className="cart-img">
                      <img className="img2" src={steps2} alt="" />
                    </div>
                    <h2 className="cart-title">Choose Your Meal</h2>
                    <div className="cart-descryption">
                      some details about this restaurant that no a very
                    </div>
                    <div className="cart-number">2</div>
                  </div>
                  <div
                    className="cart wow fadeIn"
                    data-wow-duration=".5s"
                    data-wow-delay="1.5s"
                  >
                    <div className="cart-img">
                      <img className="img2" src={steps3} alt="" />
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
                    <i className="fa fa-globe fa-fw" />
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
                    <i className="fa fa-fire fa-fw" />
                  </div>

                  <div className="features__item__description">
                    <h3>Popular Restaurants </h3>
                    <p>More than 500 restaurants menus in one place . </p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-mobile fa-fw" />
                  </div>

                  <div className="features__item__description">
                    <h3>Mobile Application</h3>
                    <p>Soon all Restaurants in your pocket .</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 align-self-end">
                <img className="" src={chef} alt="" />
              </div>

              <div className="col-sm-4">
                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-users fa-fw" />
                  </div>

                  <div className="features__item__description">
                    <h3>Group Ordering</h3>
                    <p>It's easy to make a group order with your friends .</p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-money fa-fw" />
                  </div>

                  <div className="features__item__description">
                    <h3>Online Payments </h3>
                    <p>Now you can order without cash payment.</p>
                  </div>
                </div>

                <div className="features__item d-flex">
                  <div className="features__item__icon">
                    <i className="fa fa-fast-forward fa-fw" />
                  </div>

                  <div className="features__item__description">
                    <h3>Fast Delivery</h3>
                    <p>
                      We Take responsibility for deliver your meal fast and
                      saftly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--End Features --> */}
        {/* <!--start testimonials--> */}
        <section className="testimonials section-padding">
          <h2 className="section__title p-5">Testimonials</h2>
          <Carousel slides={this.props.comments} />
          {/* <!--end testimonials--> */}
        </section>
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
