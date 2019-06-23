import React from "react";
import { NavLink } from "react-router-dom";
const Footer = props => {
  return (
    <section className="container-color pb-2 Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <footer className="ftco-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md">
                    <div className="ftco-footer ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">About Website </h2>
                      <p className="about-content">
                        {" "}
                        For ordering & discovering your favourite food from the
                        restaurants alone or in a group .{" "}
                      </p>
                      <ul className="ftco-footer ftco-footer-social list-unstyled float-md-left float-left mt-3">
                        <li className="ftco-animate">
                          <NavLink className="a" to="/">
                            <span className="fa fa-twitter" />
                          </NavLink>
                        </li>
                        <li className="ftco-animate">
                          <NavLink className="a" to="/">
                            <span className="fa fa-facebook" />
                          </NavLink>
                        </li>
                        <li className="ftco-animate">
                          <NavLink className="a" to="/">
                            <span className="fa fa-google" />
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="ftco-footer ftco-footer-widget mb-4 ml-md-4 ">
                      <h2 className="ftco-heading-2 ml-3">Links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <NavLink to="/" className="a my-1">
                            <span className="fa fa-home mr-3" /> Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/restaurants" className="a my-3 d-block">
                            <span className="fa fa-tags mr-3" /> All Restaurant
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="ftco-footer ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2 ml-3">Services</h2>
                      <ul className="list_unstyled">
                        <li>
                          <NavLink to="/profile/grouporder" className="a">
                            <span className="fa fa-users mr-2" /> Group Ordering
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact" className="a my-1">
                            <span className="fa fa-phone mr-3"> </span> Contact
                            Us
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="ftco-footer ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2 ml-2">Contact US</h2>
                      <div className="block-23 mb-3">
                        <ul className="list_unstyled">
                          <li>
                            <span className="fa fa-map-marker mr-2 p-2 rounded-circle">
                              {" "}
                            </span>{" "}
                            <span className="text"> Ismailia , Egypt</span>
                          </li>
                          <li className="my-3 d-block">
                            <span className="fa fa-phone mr-2 p-2 rounded-circle" />{" "}
                            <span className="text"> +20 12345678</span>
                          </li>
                          <li>
                            <span className="fa fa-envelope  mr-2 p-2 rounded-circle" />{" "}
                            <span className="text"> info@hungry.com</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <footer className="footer d-flex flex-direction-row justify-content-center align-items-center">
        <h3 className="footer__content">
          @ All copyright reserved 2019 | Hungry
        </h3>
      </footer>
    </section>
  );
};

export default Footer;
