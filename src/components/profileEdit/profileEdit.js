import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormFeedback, Input } from 'reactstrap';
import { updateUserDispatch } from '../../store/actions/userActions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserDispatch
    }, dispatch)
}
const ProfileEdit = props => {
    const handleSubmit = (values) => {
        props.updateUserDispatch(values,props.token);
        props.history.push('/profile');
    }
    return (
        <Formik
            initialValues={{ name: `${props.user.name}`, email: `${props.user.email}`, password: '' }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(4),
                email: Yup.string().email().required(),
                password: Yup.string().min(4).required()
            })}
            render={({
            values,
                handleChange,
                handleSubmit,
                isValid,
                isSubmitting,
                handleBlur,
                errors,
                touched
            }) => (

                    <form className="Form-lg">
                        <div className="text-center">
                            {/* <img className="mb-4 rounded-circle align" src="images/Users/user.jpg" alt="" width="72" height="72"/> */}
                            <i className="fa fa-user fa-4x mb-4 Form__user"></i>
                        </div>

                        <div className="form-row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="inputname" className="sr-only">First Name</label>
                                    <Input invalid={errors.name && touched.name} type="text" name="name" id="inputname" className="form-control Form__firstname d-block" placeholder="Your Name"
                                        autoFocus value={values.name} onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {errors.name && touched.name ? <FormFeedback>{errors.name}</FormFeedback> : null}
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <Input invalid={errors.email && touched.email} name="email" onChange={handleChange} onBlur={handleBlur} type="email" id="inputEmail" className="form-control Form__email" placeholder="Email address" required
                                autoFocus value={values.email} />
                            {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPassword" className="sr-only">Old Password</label>
                            <Input invalid={errors.password && touched.password} onChange={handleChange}
                                onBlur={handleBlur} name="password" type="password" id="inputPassword" className="form-control Form__password" placeholder="new Password"
                                value={values.password}
                            />
                            {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback> : null}
                        </div>
                        <button className="button button--primary btn-block" type="submit" disabled={!isValid || isSubmitting} onClick={handleSubmit}>Edit</button>
                    </form>


                )}
        />



    );
}
function mapStateToProps(state) {
    return {
        user: state.user.user,
        token:state.user.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);