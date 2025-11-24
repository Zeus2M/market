import React from "react";
import "./Signin.css";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import NavComponent from "../components/NavComponent";



const Signin = () => {
  const navigate = useNavigate();

  const userValidationSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    image: string(),
    email: string().required(),
    password: string().required(),
    address: string(),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      image: "",
      email: "",
      password: "",
      address: "",
    },
    onSubmit: (newUser) => {
      console.log("submitted");
      addUser(newUser);
    },
    validationSchema: userValidationSchema,
  });

  const addUser = (newUser) => {
    fetch(`https://691aef532d8d78557570c53e.mockapi.io/api/v1/users/`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));

    toast.success("User created successfully!");
    navigate("/");
  };

  return (
    <div className="signup">
      <TopBanner />
      <NavComponent />

      <div className="signup-content">
        <img src="/src/assets/signupimage.png" />

        <div className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
                      <h4>Log in to Luxeport🛒 </h4>
                      <h5>Enter your details below</h5>

      
                      
                        <div className="form-group">
            
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="Email or Phone Number"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
            </div>
           
              <div className="form-group">
              <input
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                              placeholder="Password"
                
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error">{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="loginbtn">
            <button className="log">Log in</button>
            <p className="forget">Forget Password?</p>
            </div>
          </form>
           
        </div>
      </div>
    </div>

  );
};

export default Signin;