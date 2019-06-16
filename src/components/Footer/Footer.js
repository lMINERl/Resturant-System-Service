import React from 'react';
import {NavLink} from 'react-router-dom';
const Footer = (props) => {
  return (
    <section className="container-color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <footer className="ftco-footer">
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-md">
                      <div className="ftco-footer ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">About Website </h2>
                        <p> Site for ordering your food from your favorite restaurant individually or in group . </p>
                        <ul className="ftco-footer ftco-footer-social list-unstyled float-md-left float-left mt-5">
                          <li className="ftco-animate"><NavLink className="a" to="/"><span className="fa fa-twitter"></span></NavLink></li>
                          <li className="ftco-animate"><NavLink className="a" to="/"><span className="fa fa-facebook"></span></NavLink></li>
                          <li className="ftco-animate"><NavLink className="a" to="/"><span className="fa fa-google"></span></NavLink></li>
                        </ul>

                      </div>
                    </div>
                    <div className="col-md">
                      <div className="ftco-footer ftco-footer-widget mb-4 ml-md-4 ">
                        <h2 className="ftco-heading-2">Links</h2>
                        <ul className="list-unstyled">
                          <li><NavLink to="/"  className="a"><span className="fa fa-long-arrow-right"></span> Home</NavLink></li>
                          <li><NavLink to="/restaurants"  className="a"><span className="fa fa-long-arrow-right"></span> All Restaurant</NavLink></li>
                          <li><NavLink to="/contact"  className="a"><span className="fa fa-long-arrow-right"> </span> Contact Us</NavLink></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="ftco-footer ftco-footer-widget mb-4">
                        <h2 className="f-heading-2">Services</h2>
                        <ul className="list_unstyled">
                          <li><NavLink to="/grouporder" className="a"><span className="fa fa-long-arrow-right mr-2"></span> Group Ordering</NavLink></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md">
                      <div className="ftco-footer ftco-footer-widget mb-4">
                        <h2 className="f-heading-2">Contact US</h2>
                        <div className="block-23 mb-3">
                          <ul className="list_unstyled">
                            <li><span className="fa fa-map-marker "> </span> <span className="text"> ITI Ismailia , Egypt</span></li>
                            <li><span className="fa fa-phone "></span> <span className="text">  +20 1270440168</span></li>
                            <li><span className="fa fa-envelope "></span> <span className="text"> info@hungry.com</span></li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <p>Copyright &copy;
                    <script type="document.write(newDate());"></script> All Rights Reserved</p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
  );

}

export default Footer;
