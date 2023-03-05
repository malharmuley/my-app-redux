
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import AdmNavbar from "./AdmNavbar";
import car from '../Assets/download.jpg';
import van from '../Assets/van.jpg'
import verna from '../Assets/verna.jpg'
import swift from '../Assets/swift.jpg'
import scor from '../Assets/baleno.jpg'
import baleno from '../Assets/scor.jpg'

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <AdmNavbar />
      <div className="dashboard-container">
        <div className="navigation-card">
          <h2 className="navigation-card-title">Vehicles</h2>
          <button onClick={() => navigate("/vehicle/all")}type="button" class="btn btn-primary btn-block mb-4">
            View vehicles
          </button>
          <button onClick={() => navigate("/vehicle/add")}type="button" class="btn btn-primary btn-block mb-4">Add vehicle</button>
        </div>
        <div className="navigation-card">
          <h2 className="navigation-card-title">Bookings</h2>
          <button onClick={() => navigate("/bookings/all")}type="button" class="btn btn-primary btn-block mb-4">
            View Bookings
          </button>
        </div>
        <div className="navigation-card">
          <h2 className="navigation-card-title">Users</h2>
          <button onClick={() => navigate("/users/all")}type="button" class="btn btn-primary btn-block mb-4">View Users</button>
        </div>
      </div>
      <div>
                    <MDBFooter className='text-center text-dark' style={{ backgroundColor: '#caced1' }}>
                        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

                            <b style={{color: 'white'}}><i>NEVER STOP LIVING!!</i></b>
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
                            © 2023 Copyright:
                            <a className='text-white'>
                                vehiclerental.com
                            </a>
                        </div>
                    </MDBFooter>
                </div>
    </div>
  );
}

export default AdminDashboard;