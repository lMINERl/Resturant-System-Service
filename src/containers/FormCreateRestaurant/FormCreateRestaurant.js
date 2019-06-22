import React from 'react';
import { connect } from "react-redux";
import { updateItem } from "../../store/actions/groupActions";
import { addItem } from "../../store/actions/groupActions";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
class FormCreateRestaurant extends React.Component {
  render() {
    return (
      <div className="container form-container form-separator">
      <h3 className="head-title col text-center">Create Resturant</h3>
      <hr/>
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
                              <span className="input-group-text label label--size" id="resturant-title">Resturant Title</span>
                          </div>
                          <input className="form-control form-control--inputs" type="text" placeholder="resturant's Title" aria-label="Recipient's " aria-describedby="my-addon"/>
                      </div>

                      {/* <!-- City --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="resturant-city">City</span>
                          </div>
                          <input className="form-control form-control--inputs" type="text" placeholder="Resturant's City" aria-label="Group's City" aria-describedby="City"/>
                      </div>


                      {/* <!-- Currency --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="resturant-region">Payment</span>
                          </div>
                          <select className="form-control form-control--inputs" id="exampleFormControlSelect1">
                              <option>Egyptian pounds</option>
                              <option>Dollars</option>
                              <option>Euros</option>
                              <option>Yens</option>
                          </select>



                      </div>
                      {/* <!-- Description --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="description">Description</span>
                          </div>
                          <textarea className="form-control form-control--inputs form-control--inputs-txtarea" aria-label="With textarea"></textarea>
                      </div>

                      {/* <!-- Tags --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="description">Tags</span>
                          </div>

                          <div className="d-flex flex-wrap">
                              <input type="text" placeholder="Resturant's Tags" className="form-control form-control--inputs" aria-label="Text input with dropdown button"/>
                              <div className="dropdown-menu tag-dropdown">
                                  <a className="dropdown-item" href="#">Tag1</a>
                                  <a className="dropdown-item" href="#">Tag2</a>
                                  <a className="dropdown-item" href="#">Tag3</a>
                              </div>
                              <textarea disabled className="form-control form-control--inputs form-control--inputs-txtarea" aria-label="With textarea">
                              </textarea>
                          </div>
                          {/* <!-- add className show for menu show --> */}




                      </div>

                      {/* <!-- confirm --> */}
                      <div className="form-separator"></div>
                      <div className="ml-auto mr-auto">
                          <button type="submit" className="button button--black">Save</button>
                          <button type="submit" className="button button--secondary">Cancel</button>
                      </div>



                  </div>
              </form>
          </div>
          {/* image upload  */}
          <div className="order-sm-1 order-0 col-md-4 mt-auto mb-auto ml-auto ">
              <div className="add-group img ml-auto mr-auto">
                  <img src="./assets/14762094.jpg" alt=""/>
              </div>
              <div className="d-flex justify-content-center form-separator ">
                  <input type="file" href="#" className="button button--white" />
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default FormCreateRestaurant;
