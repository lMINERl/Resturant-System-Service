import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Input, FormFeedback, Alert } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerDispatch } from "../../store/actions/userActions";
import { bindActionCreators } from "redux";
// import register from "../../assets/register.png";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      registerDispatch
    },
    dispatch
  );
};
const mapStateToProps = state => {
  return {
    user: state.user.isRegistered,
    // error: auth.error
  };
};


// Images

class SignupComponent extends Component {
  componentDidUpdate() {
    //console.log(this.props);
    const { error, user } = this.props;
    if (error && this.bag) {
      this.bag.setSubmitting(false);
    }
    console.log(user);
    if (user) {
      this.props.history.push("/login");
    }
  }
  handleFormSubmit(values, bag) {
    //console.log(values)
    this.props.registerDispatch(values);
    this.bag = bag;
  }
  _renderErrorIfAny() {
    const { error } = this.props;
    if (error) {
      return <Alert color="danger">{error}</Alert>;
    }
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        {/* {this._renderErrorIfAny()} */}
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={this.handleFormSubmit.bind(this)}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .min(5)
              .required(),
            name: Yup.string()
              .min(3)
              .required()
          })}
          render={({
            handleChange,
            handleSubmit,
            isValid,
            isSubmitting,
            handleBlur,
            errors,
            touched
          }) => (
            <div className="container form-style d-flex flex-direction-row justify-content-center align-items-center">
              <img
                // src={register}
                alt="Background for register form"
                className="form-style__img"
              />
              <NavLink to="/" className="form-style__close">
                <i className="fa fa-times-circle d-flex justify-content-end" />
              </NavLink>
              <div className="row">
                <div className="col-md-12 col-sm-6 form-style__body">
                  <h2 className="form-style__body__title">Sign Up</h2>
                  <form
                    className="form-style__body__inputs"
                    method="GET"
                    action="#"
                  >
                    <Input
                      invalid={errors.name && touched.name}
                      type="text"
                      name="name"
                      placeholder="your name..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <FormFeedback>{errors.name}</FormFeedback>
                    ) : null}
                    <Input
                      invalid={errors.email && touched.email}
                      type="email"
                      name="email"
                      placeholder="your email..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <FormFeedback>{errors.email}</FormFeedback>
                    ) : null}

                    <Input
                      invalid={errors.password && touched.password}
                      type="password"
                      name="password"
                      placeholder="your password..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <FormFeedback>{errors.password}</FormFeedback>
                    ) : null}
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!isValid || isSubmitting}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        />
        <Link to="/login">Have an account? Sign In now</Link>
      </div>
    );
  }
}

const Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupComponent);
export default Signup;
