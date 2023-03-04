import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ViewAllVehicles from "./FetchAllVehicles";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../store/actions/LoginAction";
import CustNavbar from "./CustNavbar";
import road from '../Assets/road.jpg';
import { fetchVehicleByCat } from "../store/actions/VehicleAction";
import car from '../Assets/download.jpg';
import van from '../Assets/van.jpg'
import verna from '../Assets/verna.jpg'
import swift from '../Assets/swift.jpg'
import scor from '../Assets/baleno.jpg'
import baleno from '../Assets/scor.jpg'
import './CustDash.css'



import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';


function CustomerDashboard() {
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

    const vecCat = useSelector(state => state.vehicleReducer.vecCat)
    const [category, setCategory] = useState("")
    const dispatch = useDispatch();
   
    

    useEffect(() => {
        dispatch(fetchVehicleByCat(category));
    }, [category])

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    const doLogout = () => {
        dispatch(logout());
        navigate("/login");
    }
    return (
        <html>
                <div className="ad"> 
                
                

                    <CustNavbar />

                    {/* <h4><i><b>Hello, {myuser.firstName}</b></i></h4> */}
                    <h1 className="hilit-color"><marquee><b>The perfect car for your next trip is just around the corner
                        Book your drive now!</b></marquee> </h1>

                    <label for="category" style={ {
                        background:"white",
                        color:"black",
                        height:"35px",
                        margin: "20px",
                        textSizeAdjust: "auto"
                      
                    }}>Select Category:</label>

                    <select  className="styleselect" name="category" value={category} id="cars" onChange={handleChange}>
                        <option value="" >--option--</option>
                        <option value="suv" >SUV</option>
                        <option value="sedan">SEDAN</option>
                        <option value="mini">MINI</option>
                        <option value="van">VAN</option>
                    </select>

                    <div className='container-Customer'>
                        <div class="row">
                            {
                                vecCat.length > 0 &&
                                vecCat.map(v =>
                                    <div className="card col-2" style={{ width: '200px', margin: '20px' }} >
                                        <img class="card-img-top" src={car} alt="Card image"
                                            style={{ width: '100%' }} />


                                        <div class="card-body">
                                            <h4 class="card-title">{v.description}</h4>
                                            <p class="card-text">{v.vehicleNumber}</p>
                                            <p class="card-text">{v.type}</p>

                                            <Link to={`/vehicle/${v.vehicleId}`} className="btn btn-info">View</Link>

                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </div>
                   
                </div>
         
                <div>
                    <MDBFooter className='text-center text-dark' style={{ backgroundColor: '#caced1' }}>
                        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

                            <b>CHOOSE FROM OUR WIDE RANGE OF CARS...</b>
                        </div>
                        <MDBContainer className='p-4'>
                            <section className=''>
                                <MDBRow>
                                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                        <MDBRipple
                                            rippleColor='light'
                                            className='bg-image hover-overlay shadow-1-strong rounded'
                                        >
                                            <img src={van} className='w-100' />
                                            <a href='#!'>
                                                <div
                                                    className='mask'
                                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>

                                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                        <MDBRipple
                                            rippleColor='light'
                                            className='bg-image hover-overlay shadow-1-strong rounded'
                                        >
                                            <img src={car} className='w-100' />
                                            <a href='#!'>
                                                <div
                                                    className='mask'
                                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>

                                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                        <MDBRipple
                                            rippleColor='light'
                                            className='bg-image hover-overlay shadow-1-strong rounded'
                                        >
                                            <img src={swift} className='w-100' />
                                            <a href='#!'>
                                                <div
                                                    className='mask'
                                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                        <MDBRipple
                                            rippleColor='light'
                                            className='bg-image hover-overlay shadow-1-strong rounded'
                                        >
                                            <img src={verna} className='w-100' />
                                            <a>
                                                <div
                                                    className='mask'
                                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                        <MDBRipple
                                            rippleColor='light'
                                            className='bg-image hover-overlay shadow-1-strong rounded'
                                        >
                                            <img src={scor} className='w-100' />
                                            <a>
                                                <div
                                                    className='mask'
                                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                    <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                        <MDBRipple
                                            rippleColor='light'
                                            className='bg-image hover-overlay shadow-1-strong rounded'
                                        >
                                            <img src={baleno} className='w-100' />
                                            <a>
                                                <div
                                                    className='mask'
                                                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                                ></div>
                                            </a>
                                        </MDBRipple>
                                    </MDBCol>
                                </MDBRow>
                            </section>
                        </MDBContainer>

                        <div className='text-center text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2020 Copyright:
                            <a className='text-white'>
                                vehiclerental.com
                            </a>
                        </div>
                    </MDBFooter>
                </div>
        </html>
    )


}
export default CustomerDashboard;

