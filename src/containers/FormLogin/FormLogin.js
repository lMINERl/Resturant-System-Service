import React from 'react';

class FormLogin extends React.Component {
  render() {
    return (
      <div class="container form-style d-flex flex-direction-row justify-content-center align-items-center">
    <img src="./assets/login.png" alt="Background for register form" class="form-style__img" />
    <a href="#" class="form-style__close"><i class="fa fa-times-circle d-flex justify-content-end"></i></a>
    <div class="row">
      <div class="col-md-12 col-sm-6 form-style__body">
        <h2 class="form-style__body__title">Log in</h2>
        <form class="form-style__body__inputs" method="GET" action="#">
          <input type="text" name="full-name" placeholder="Full Name" autofocus />
          <input type="password" name="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p class="form-style__body--forget  d-flex flex-direction-row justify-content-center align-items-center">
          <a href="#">Forget Password</a>
        </p>
        <p class="form-style__body--signup  d-flex flex-direction-row justify-content-center align-items-center">
          Don't have an account ? <a href="#">Signup</a>
        </p>
      </div>
    </div>
  </div>
    );
  }
}
export default FormLogin;
