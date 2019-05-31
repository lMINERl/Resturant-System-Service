import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

class FormCreateGroup extends React.Component {
  
    state = {
      title : '',
      city : '' ,
      region :'' ,
      descryption : ''
    }
    submitHandler=(event) => {
      event.preventDefault();
      this.props.add(this.state);
    }
    render() {
    return (
      <div className="container form-container form--height form-separator">
      <h3 className="head-title col text-center">Create Group</h3>
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
                              <span className="input-group-text label label--size" id="group-title">Group Title</span>
                          </div>

                          <input className="form-control form-control--inputs " type="text" placeholder="Group's Title" aria-label="Recipient's "
                              aria-describedby="my-addon" onChange={(e) => this.setState({title : e.target.value})}/>

                          {/* <div className="invalid-feedback">
                              error message!
                          </div> */}
                      </div>


                      {/* <!-- City --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="group-city">City</span>
                          </div>
                          <input className="form-control form-control--inputs " type="text" placeholder="Group's City" aria-label="Group's City"
                              aria-describedby="City" onChange = {(e) => this.setState({city : e.target.value}) }/>
                          {/* <div className="invalid-feedback">
                              invalid city!
                          </div> */}
                      </div>


                      {/* <!-- Region --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="group-region">Region</span>
                          </div>


                          <input type="text" placeholder="Group's Region" onChange = {(e) => this.setState({region : e.target.value}) } className="form-control form-control--inputs" aria-label="Text input with dropdown button"/>

                          {/* <!-- add class show for menu show --> */}
                          <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Region1</a>
                              <a className="dropdown-item" href="#">Region2</a>
                              <a className="dropdown-item" href="#">Region3</a>
                          </div>



                      </div>
                      {/* <!-- Description --> */}
                      <div className="form-separator"></div>
                      <div className="input-group col">
                          <div className="input-group-prepend">
                              <span className="input-group-text label label--size" id="group-description">Description</span>
                          </div>
                          <textarea onChange = {(e) => this.setState({descryption : e.target.value}) } className="form-control form-control--inputs form-control--inputs-txtarea" aria-label="With textarea"></textarea>
                      </div>

                      <div className="form-separator"></div>
                      <div className="ml-auto mr-auto">
                          <button type="submit" className="button button--black" onClick={(e) => this.submitHandler(e) }>Save</button>
                          <button type="submit" className="button button--secondary">Cancel</button>

                      </div>

                  </div>
              </form>
          </div>
          {/* <!-- image upload --> */}
          <div className="order-sm-1 order-0 col-md-4 mt-auto mb-auto ml-auto ">
              <div className="add-group img ml-auto mr-auto">
                  <img src="images/services/order.jpg" alt=""/>
              </div>
              <div className="d-flex justify-content-center form-separator ">
                  <input type="file" href="#" className="button form-control--inputs button--white" placeholder="Upload"/>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      group: state.group
  };
};

const mapDispatchToProps = dispatch => {
  return {
      add: ({title , city ,region  , descryption }) => dispatch({ type: actionTypes.ADDGROUB, groubData: { title :title , city : city , region : region , descryption:descryption} })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateGroup);
