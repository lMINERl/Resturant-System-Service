import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import bgimg from "../../assets/register.png";
import { userAPI } from "../../api/userAPI";

class FormRegister extends Component {
  state = {
    user: {
      username: "",
      email: "",
      password: ""
    },
    isnNew: true,
    ismNew: true,
    ispNew: true,
    iscNew: true,
    nameclass: false,
    emailClass: false,
    passClass: false,
    conpassClass: false
  };

  checker = (type, validtype, flag) => {
    let result = type === "" || type.length < 4 ? false : true;
    if (validtype === "conpassClass" && type !== this.state.user.password) {
      result = false;
    }
    this.setState({
      [validtype]: result,
      [flag]: false
    });
  };

  registerHandler = async e => {
    e.preventDefault();
    const res = await userAPI.register(this.state.user);
    this.setState({
      isnNew: false,
      ismNew: false,
      ispNew: false,
      iscNew: false
    });
  };

  render() {
    const {
      nameclass,
      passClass,
      conpassClass,
      emailClass,
      isnNew,
      ismNew,
      ispNew,
      iscNew
    } = this.state;

    let nameValid = "";
    if (!nameclass && !isnNew) nameValid = "invalid";
    else if (nameclass && !isnNew) nameValid = "valid";

    let emailValid = "";
    if (!emailClass && !ismNew) emailValid = "invalid";
    else if (emailClass && !ismNew) emailValid = "valid";

    let passValid = "";
    if (!passClass && !ispNew) passValid = "invalid";
    else if (passClass && !ispNew) passValid = "valid";

    let conpassValid = "";
    if (!conpassClass && !iscNew) conpassValid = "invalid";
    else if (conpassClass && !iscNew) conpassValid = "valid";

    return (
      <>
        <div className="container form-style d-flex flex-direction-row justify-content-center align-items-center">
          <img
            // src={bgimg}
            alt="Background for register form"
            className="form-style__img"
          />
          <NavLink to="/" className="form-style__close">
            <i className="fa fa-times-circle d-flex justify-content-end" />
          </NavLink>
          <div className="row">
            <div className="col-md-12 col-sm-6 form-style__body">
              <h2 className="form-style__body__title">Register</h2>
              <form
                className="form-style__body__inputs"
                method="GET"
                action="#"
                onSubmit={this.registerHandler}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  onBlur={event =>
                    this.checker(event.target.value, "nameclass", "isnNew")
                  }
                  className={nameValid}
                  onChange={event =>
                    this.setState({
                      user: { ...this.state.user, username: event.target.value }
                    })
                  }
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onBlur={event =>
                    this.checker(event.target.value, "emailClass", "ismNew")
                  }
                  className={emailValid}
                  onChange={event =>
                    this.setState({
                      user: { ...this.state.user, email: event.target.value }
                    })
                  }
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={event =>
                    this.checker(event.target.value, "passClass", "ispNew")
                  }
                  className={passValid}
                  onChange={event =>
                    this.setState({
                      user: { ...this.state.user, password: event.target.value }
                    })
                  }
                />
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  onBlur={event =>
                    this.checker(event.target.value, "conpassClass", "iscNew")
                  }
                  className={conpassValid}
                />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FormRegister;
