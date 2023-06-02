import React,{useState} from 'react'
import { useNavigate,Link,navigate } from "react-router-dom";
import backgroundImage from "../Image/Screenshot.png"
import Logo from "../Image/logo.png"
import App from "../App"
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Home from './Home';
const Login = () => {
    const navigate = useNavigate();
    const initialValues = {
    email: '',
    password: ''
};
const handleClick = () => {
    navigate('/home');
  };
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email Id Required'),
    password: Yup.string().required('Password Required').min(8, 'Password must be at least 8 characters long').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character')
});
return (
    <div className="Mainbox">
        <div className="Innerbox">
            <div className="Signlogo">
                <img src={Logo}/>
            </div>
            <span className="Registration"><b>Login</b></span>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleClick}>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <button onClick={handleClick}>Login</button>
                    <p>Don't Have Account? <Link to="/register">Register Now</Link></p> 
                </form>
            </Formik>
        </div>
    </div>
        )
}
export default Login
  