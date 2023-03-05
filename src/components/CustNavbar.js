import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/LoginAction";





function CustNavbar() {

    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

    const dispatch = useDispatch();
    const doLogout = () => {

        dispatch(logout());
        navigate("/");
       
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><i>vehiclerental.com</i></a>

                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="#">Home</a>
                        </li>
                        <li className="nav-item">

                            <Link to={`/bookingsByUser/user/${myuser.id}`} className="nav-link">Your Bookings</Link>

                        </li>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-user-circle-o"></i>  {myuser.firstName} {myuser.lastName}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/*<a className="dropdown-item" href="#">My Profile</a> */}
                                        {/*<div className="dropdown-divider"></div> */}
                                        <Link to ={`/user/${myuser.id}`} className="btn btn-info dropdown-item">Profile </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <li className="nav-item">
                            <Link to onClick={doLogout}  className="nav-link" >Logout</Link>
                        </li> */}
                        <li className="nav-item">
                            <button onClick={doLogout}  className="nav-link" >Logout</button>
                        </li>
                        

                       
                    </ul>
                </div>
            </div>
            
        </nav>

    );
}


export default CustNavbar;