import React, { Component } from "react";
import {
  FormFeedback,
  Alert,
  Label,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/actions";
class LoginPage extends Component {
  componentDidUpdate() {
    //console.log(this.props);
    const { error, isAuth } = this.props;
    if (error && this.bag) {
      this.bag.setSubmitting(false);
    }
    if (isAuth) {
      this.props.history.push("/");
    }
  }
  handleFormSubmit(values, bag) {
    console.log(values);
    this.props.signIn(values);
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
            <div className="container form-style d-flex flex-direction-row justify-content-center align-items-center">
              <img
                src="../../assets/login.png"
                alt="Background for register form"
                className="form-style__img"
              />
              <a href="#" className="form-style__close">
                <i className="fa fa-times-circle d-flex justify-content-end" />
              </a>
              <div className="row">
                <div className="col-md-12 col-sm-6 form-style__body">
                  <h2 className="form-style_body_title">Log in</h2>
                  <form
                    className="form-style_body_inputs"
                    method="GET"
                    action="#"
                  >
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
                      Sign in
                    </button>
                  </form>
                  <p className="form-style__body--forget  d-flex flex-direction-row justify-content-center align-items-center">
                    <a href="#">Forget Password</a>
                  </p>
                  <p className="form-style__body--signup  d-flex flex-direction-row justify-content-center align-items-center">
                    Don't have an account ? <a href="#">Signup</a>
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
const mapStateToProps = ({ auth }) => {
  return {
    attemptting: auth.attemptting,
    error: auth.error,
    isAuth: auth.isAuth
  };
};
export default connect(
  mapStateToProps,
  { signIn }
)(LoginPage);
