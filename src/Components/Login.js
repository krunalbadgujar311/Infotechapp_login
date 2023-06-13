import React,{useState} from 'react'
import { useNavigate,Link,navigate } from "react-router-dom";
import backgroundImage from "../Image/Screenshot.png"
import Logo from "../Image/logo.png"
import App from "../App"
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dashboard from './Dashboard';
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "./InputControl/InputControl";
import { auth } from "../Firebase";
const Login = () => {
    const navigate = useNavigate();
    const initialValues = {
    email: '',
    password: ''
};
const handleClick = () => {
    navigate('/dashboard');
  };
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email Id Required'),
    password: Yup.string().required('Password Required').min(8, 'Password must be at least 8 characters long').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character')
});
const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
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
                        
                        <InputControl
                        label="Email:"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                        placeholder="Enter email address"
                        />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="form-group">
            
                        <InputControl
                        label="Password:"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, password: event.target.value }))
                        }
                        placeholder="Enter Password"
                        />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
                    <p><b>Don't Have Account?{''}</b> <Link to="/register"><b>Register Now</b></Link></p> 
                </form>
            </Formik>
        </div>
    </div>
        )
}
export default Login
  