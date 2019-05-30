import React from 'react';
import {AutoComplete} from '../AutoComplete/AutoComplete';
// import { Autocomplete } from '../AutoComplete/AutoComplete';

const HomePage = (props) => {
  var style = {
    backgroundImage: "url('../assets/download.jpg')"
  }
  return (
    <div>
      {/* <!-- Start sliders --> */}
    <div className="row">
      <div className="col-md-12">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-block d-block--first w-100" alt="First slide">
                <div className=" container">
                  <div className="carousel-description p-0 ">
                    <h3 className="caption">Order Your Food Online For <br/>
                      Take Away, Home Delivery</h3>
                  </div>
                  <AutoComplete suggestions={['Cairo', 'Ismailia', 'Alex', 'Suez', 'Arish', 'Damitte']} {...props}/>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block d-block--second w-100" alt="Second slide"></div>
              <div className="carousel-caption p-0 ">
                <h3 className="caption">Add Your Restaurant And<br/>
                  Grow Your Business</h3>
              </div>
             
            </div>
            <div className="carousel-item">
              <div className="d-block d-block--third w-100" alt="Third slide"></div>
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
                  <img src="assets/fact-icon-5@2x.jpg" alt=""/>
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0">  +137 </h3>
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
                    <h3 className="m-0">  +137 </h3>
                    <h4>  Restaurants </h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="status-bar__item d-flex">
                  <div className="status-bar__item__img">
                    <img src="assets/fact-icon4@2x.jpg" alt="" />
                  </div>

                  <div className="status__item__description px-4">
                    <h3 className="m-0">  +137 </h3>
                    <h4>  Restaurants </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </section>
      {/* // <!-- End Status Bar --> */}

     
      <div style={style}>
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
                  <div className="cart-descryption">some details about this restaurant that no a very</div>
                  <div className="cart-number">1</div>
                </div>

                <div className="cart">
                  <div className="cart-img">
                    <img className="img2" src="./assets/dsfg-1.jpg" alt="" />
                  </div>
                  <h2 className="cart-title">Choose Your Meal</h2>
                  <div className="cart-descryption">some details about this restaurant that no a very</div>
                  <div className="cart-number">2</div>
                </div>
                <div className="cart">
                  <div className="cart-img">
                    <img className="img2" src="./assets/dsfg-1.jpg" alt="" />
                  </div>
                  <h2 className="cart-title">CheckOut & Enjoy</h2>
                  <div className="cart-descryption">some details about this restaurant that no a very</div>
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
                  <i className="fa fa-money"></i>
                </div>

                <div className="features__item__description">
                  <h3>Easy Online Ordering</h3>
                  <p>You can easily navigate
                        around site to complete
                        your order . </p>
                </div>
              </div>

              <div className="features__item d-flex">
                <div className="features__item__icon">
                  <i className="fa fa-money"></i>
                </div>

                <div className="features__item__description">
                  <h3>Popular Restaurants     </h3>
                  <p>More than 500
                            restaurants menus in
                            one place . </p>
                </div>
              </div>

              <div className="features__item d-flex">
                <div className="features__item__icon">
                  <i className="fa fa-money"></i>
                </div>

                <div className="features__item__description">
                  <h3>Mobile Application</h3>
                  <p>Soon all Restaurants
                                in your pocket .</p>
                </div>
              </div>


            </div>

            <div className="col-sm-4">
              <img className="" src="assets/chef_PNG140@2x.jpg" alt="" />
            </div>

            <div className="col-sm-4">
              <div className="features__item d-flex">
                <div className="features__item__icon">
                  <i className="fa fa-money"></i>
                </div>

                <div className="features__item__description">
                  <h3>Easy Online Ordering</h3>
                  <p>You can easily navigate
                                    around site to complete
                                    your order . </p>
                </div>
              </div>

              <div className="features__item d-flex">
                <div className="features__item__icon">
                  <i className="fa fa-money"></i>
                </div>

                <div className="features__item__description">
                  <h3>Popular Restaurants     </h3>
                  <p>More than 500
                                        restaurants menus in
                                        one place . </p>
                </div>
              </div>

              <div className="features__item d-flex">
                <div className="features__item__icon">
                  <i className="fa fa-money"></i>
                </div>

                <div className="features__item__description">
                  <h3>Mobile Application</h3>
                  <p>Soon all Restaurants
                                            in your pocket .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--End Features --> */}
      {/* <!--start testimonials--> */}
      <div className="testimonials">
        <div className="container">

          <div className="row">
            <div className="col-sm-12">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <h2>Customer
              <b>Testimonials</b>
                </h2>
                {/* <!-- Carousel indicators --> */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                {/* <!-- Wrapper for carousel items --> */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.
                      </p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                                <b>Paula Wilson</b>
                              </div>
                              <div className="details">Media Analyst / SkyNet</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star-o"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.
                      </p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                                <b>Antonio Moreno</b>
                              </div>
                              <div className="details">Web Developer / SoftBee</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star-o"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.
                      </p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                                <b>Michael Holz</b>
                              </div>
                              <div className="details">Web Developer / DevCorp</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star-o"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.
                      </p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                                <b>Mary Saveley</b>
                              </div>
                              <div className="details">Graphic Designer / MarsMedia</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star-o"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.
                      </p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                                <b>Martin Sommer</b>
                              </div>
                              <div className="details">SEO Analyst / RealSearch</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star-o"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="testimonial">
                          <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.
                      </p>
                        </div>
                        <div className="media">
                          <div className="media-left d-flex mr-3">
                            <img src="../../assets/user2.png" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="overview">
                              <div className="name">
                                <b>John Williams</b>
                              </div>
                              <div className="details">Web Designer / UniqueDesign</div>
                              <div className="star-rating">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li className="list-inline-item">
                                    <i className="fa fa-star-o"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Carousel controls --> */}
                <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                  <i className="fa fa-chevron-left"></i>
                </a>
                <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                  <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--end testimonials--> */}


    </div>

  );

}

export default HomePage;
