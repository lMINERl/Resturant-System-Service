import React from 'react';
import { connect } from "react-redux";
import { updateItem } from "../../store/actions/groupActions";
import { addItem } from "../../store/actions/groupActions";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
class FormCreateRestaurant extends React.Component {
  render() {
    return (
      <div className="container form-container form-separator py-5">
      <h3 className="head-title col text-center">Create Resturant</h3>
      <hr/>
      <div>
          {/* <!-- form --> */}
          <div>
              {/* <!-- header --> */}

              {/* <!-- form --> */}
              <form method="post" action="">
                  {/* <!-- padding --> */}

                  {/* <!-- horizontal display --> */}
                  <div>
                      {/* <!-- Name --> */}
                      <div className="input-group col">
                          <div className="input-group-prepend w-100">
                              <span className="input-group-text" id="resturant-title">Resturant Title</span>
                          </div>
                          <input className="form-control form-control--inputs" type="text" placeholder="resturant's Title" aria-label="Recipient's " aria-describedby="my-addon"/>
                      </div>

                      {/* <!-- City --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend w-100">
                              <span className="input-group-text label label--size" id="resturant-city">City</span>
                          </div>
                          <input className="form-control form-control--inputs" type="text" placeholder="Resturant's City" aria-label="Group's City" aria-describedby="City"/>
                      </div>


                      {/* <!-- Currency --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend w-100">
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
                          <div className="input-group-prepend w-100">
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

                          <div className="w-100">
                              <input type="text" placeholder="Resturant's Tags" className="form-control form-control--inputs mb-4" aria-label="Text input with dropdown button"/>
                              <div className="dropdown-menu tag-dropdown">
                                  <a className="dropdown-item" href="#">Tag1</a>
                                  <a className="dropdown-item" href="#">Tag2</a>
                                  <a className="dropdown-item" href="#">Tag3</a>
                              </div>
                              <textarea disabled className="form-control form-control--inputs form-control--inputs-txtarea" aria-label="With textarea">
                              </textarea>
                          </div>
                          {/* <!-- add className show for menu show --> */}


   {/* image upload  */}
          <div className=" w-100 my-5">
              {/* <div className="add-group img ml-auto mr-auto">
                  <img src="./assets/14762094.jpg" alt=""/>
              </div> */}
              <div>
                  <input type="file" href="#" className="form-control form-control--inputs" />
              </div>
          </div>

                      </div>

                      {/* <!-- confirm --> */}
                      <div className="form-separator"></div>
                      <div className="ml-auto mr-auto">
                          <button type="submit" className="button button--black mr-5">Save</button>
                          <button type="submit" className="button button--secondary">Cancel</button>
                      </div>
                  </div>
              </form>
          </div>
          
      </div>
  </div>
    );
  }
}

export default FormCreateRestaurant;
