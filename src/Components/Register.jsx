import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "./InputControl/InputControl";
import { auth } from "../Firebase";

import styles from "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.Firstname || !values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.Firstname,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container1}>
      <div className={styles.innerBox1}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="First Name:"
          placeholder="Enter your first name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Firstname: event.target.value }))
          }
        />
         <InputControl
          label="Last Name:"
          placeholder="Enter your surname"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, Lastname: event.target.value }))
          }
        />


        <InputControl
          label="Email:"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer1}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;