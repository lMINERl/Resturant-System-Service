import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FormFeedback, Alert, Input } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { loginDispatch } from "../../store/actions/userActions";
import { bindActionCreators } from "redux";
import loginBG from "../../assets/login.png";

// Images
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginDispatch
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.user.isLogedIn
  };
};

class LoginPage extends Component {
  componentDidUpdate() {
    const { error, isAuth } = this.props;
    if (error && this.bag) {
      this.bag.setSubmitting(false);
    }
    if (isAuth) {
      this.props.history.push("/");
    }
  }
  handleFormSubmit(values, bag) {
    this.props.loginDispatch(values);
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
      <div className="cheese__wrapper d-flex align-items-center">
        {this._renderErrorIfAny()}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={this.handleFormSubmit.bind(this)}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required(),
            password: Yup.string()
              .min(4)
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
            <div className="container">
              <div className="row">
                <div className="cheese__content ">
                  <h2 className="">Log in</h2>
                  <form className="" method="GET" action="#">
                    <Input
                      invalid={errors.email && touched.email}
                      type="email"
                      name="email"
                      className="form-control inputPadding--focus input--transparent"
                      placeholder="Please Enter your email ..."
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
                      className="form-control inputPadding--focus input--transparent mt-3"
                      placeholder="Please Enter your password..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <FormFeedback>{errors.password}</FormFeedback>
                    ) : null}
                    <button
                      type="submit"
                      className="button button--secondary my-4"
                      onClick={handleSubmit}
                      disabled={!isValid || isSubmitting}
                    >
                      Sign in
                    </button>
                  </form>
                  <p className="">
                    <NavLink to="/" className="text-info">
                      Forget Password
                    </NavLink>
                  </p>
                  <p className="">
                    Don't have an account ?
                    <NavLink to="/register" className="text-dark">
                      Signup
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
