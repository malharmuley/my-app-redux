
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewVehicles } from '../store/actions/VehicleAction';
import { useParams } from 'react-router-dom';
import car2 from '../Assets/download.jpg';
import { Link } from 'react-router-dom';

function ViewVehicle() {
    const vehicles = useSelector(state => state.vehicleReducer.vehicles);
    const dispatch = useDispatch();
    const { vehicleId } = useParams();
    useEffect(() => {
        dispatch(viewVehicles(vehicleId));
    }, [vehicleId])

    return (
        vehicles !== null &&

        <div className="container d-flex justify-content-center align-items-center">

            <div className="card" style={{ width: "25rem" }}>
                <img src={car2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Vehicle Details</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        < p>VehicleId :{vehicles.vehicleId}</p>
                    </li>
                    <li className="list-group-item" >
                        <p>vehicleNumber :{vehicles.vehicleNumber}</p>
                    </li>
                    <li className="list-group-item">
                        <p>VehicleType:{vehicles.type}</p>
                    </li>
                    <li className="list-group-item">
                        <p>VehileCategory:{vehicles.category}</p>
                    </li>
                    <li className="list-group-item">
                        <p>VehileDescription:{vehicles.description}</p>
                    </li>
                    <li className="list-group-item">
                        <p>VehicleLocation:{vehicles.location}</p>
                    </li>
                    <li className="list-group-item">
                        <p>VehicleCapacity:{vehicles.capacity}</p>
                    </li>
                    <li className="list-group-item">
                        <p>VehicleChargesPerDay:{vehicles.chargesPerDay}</p>
                    </li>
                </ul>
              
                    <Link to={`/booking/add/${vehicles.vehicleId} `} className="btn btn-primary">Book It</Link>
              
            </div>

        </div>
    )
}

export default ViewVehicle;