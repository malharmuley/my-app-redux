import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/actions/LoginAction";


function AdmNavbar() {

  const navigate = useNavigate();
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);


  const dispatch = useDispatch();
  const doLogout = () => {


    dispatch(logout())

    navigate("/login");
  }


return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><i>vehiclerental.com</i></a>
      <a className="navbar-brand" href='#'>| Admin Dashboard</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-user-circle-o"></i>  {myuser.firstName} {myuser.lastName}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/*<a className="dropdown-item" href="#">My Profile</a> */}
              {/*<div className="dropdown-divider"></div> */}
              <button onClick={doLogout} type="button" className="btn btn-info dropdown-item">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
  }

export default AdmNavbar;