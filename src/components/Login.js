// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../store/actions/LoginAction";

// import { useDispatch, useSelector } from "react-redux";

// function Login() {

//     const isLoggedIn=useSelector(state => state.loginReducer.isLoggedIn);

//     const [email, setEmail] = useState("");
//     const [pwd, setPassword] = useState("");
//     const [formErrors, setFormErrors] = useState({});
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const myuser = JSON.parse(localStorage.getItem("myuser"));

//     const doLogin = () => {
//         let errors = {};
//         if (!email) {
//             errors['emailError'] = 'Field is required';
//         }
//         if (!pwd) {
//             errors['pwdError'] = 'Field is required';
//         }
//         setFormErrors(errors);
//         if (Object.keys(errors).length === 0) {
//             const payload = {

//                 emailaddress: email,
//                 password: pwd
//             }
//             dispatch(login(payload))

//         }
//     }

//     return (
//         <div>{

//             isLoggedIn ?
//             navigate("/dashboard")
//             :
//                         <div>
//                             <div>
//                                 <label>Email Address</label>
//                                 <input type="email" name="email" value={email}
//                                     onChange={event => setEmail(event.target.value)} />
//                                 {
//                                     formErrors.emailError && <div style={{ color: 'red' }}>{formErrors.emailError}</div>
//                                 }
//                             </div>

//                             <div>
//                                 <label>Password</label>
//                                 <input type="password" name="pwd" value={pwd}
//                                     onChange={event => setPassword(event.target.value)} />
//                                 {
//                                     formErrors.pwdError && <div style={{ color: 'red' }}>{formErrors.pwdError}</div>
//                                 }
//                             </div>

//                             <button onClick={doLogin}>Login</button>
//                             <Link to="/user/add">Register</Link>

//                         </div>
//         }
//         </div>
//     )
// }
// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/actions/LoginAction";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loginn.css";
import renting from "../Assets/renting.jpg";
import { useDispatch } from "react-redux";

function Login() {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));

  const mystyle = {
    paddingLeft: 5,
  };

  const mystyle1 = {
    paddingLeft: 5,
  };

  const mystyle2 = {
    paddingLeft: 7,
  };

  const doLogin = () => {
    let errors = {};
    if (!email) {
      errors["emailError"] = "Field is required";
    }
    if (!pwd) {
      errors["pwdError"] = "Feild is required";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const payload = {
        emailaddress: email,
        password: pwd,
      };
      dispatch(login(payload));
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        navigate("/dashboard")
      ) : (
        <div className="container-fluid h-custom">
          {/* <div style={{backgroundImage : `url(${renting})`,
                       backgroundRepeat: "no-repeat",
                       backgroundSize : "cover"}}> */}
          <div className="cover">
            <section class="vh-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src={renting}
                    class="img-fluid"
                    alt="Sample image"
                    style={mystyle2}
                  />

                  <div class="col-md-9 col-lg-6 col-xl-11">
                    <div class="form-outline mb-4">
                      <label
                        class="form-label"
                        for="form3Example4"
                        style={mystyle}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="email address"
                        id="form2Example2"
                        class="form-control"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      {formErrors.emailError && (
                        <div style={{ color: "red" }}>
                          {formErrors.emailError}
                        </div>
                      )}
                    </div>
                  </div>

                  <div class="col-md-9 col-lg-6 col-xl-11">
                    <div class="form-outline mb-4">
                      <label
                        class="form-label"
                        for="form3Example4"
                        style={mystyle1}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        id="form2Example2"
                        class="form-control"
                        name="pwd"
                        value={pwd}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      {formErrors.pwdError && (
                        <div style={{ color: "red" }}>
                          {formErrors.pwdError}
                        </div>
                      )}
                    </div>

                    <div class="col-md-9 col-lg-6 col-xl-8">
                      <div class="text-center text-lg-start mt-4 pt-2">
                        <button
                          onClick={doLogin}
                          type="button"
                          class="btn btn-primary btn-block mb-4"
                        >
                          Login
                        </button>
                      </div>

                      <p>
                        Don't have an account?{" "}
                        <Link to="/user/add">Register Here</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  );
}
export default Login;