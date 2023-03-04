import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVehicles } from '../store/actions/VehicleAction';
import { Link } from 'react-router-dom';
import car from '../Assets/download.jpg'
function FetchAllVehicles() {
    const vehicles = useSelector(state => state.vehicleReducer.vehicles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllVehicles());
    }, [])
    return (
        <div className='container'>
            <div class="row">
                {
                    vehicles.length > 0 &&
                    vehicles.map(v =>
                        <div className="card col-3" style={{ width: '200px' }} >
                            <img class="card-img-top" src={car} alt="Card image"
                                style={{ width: '100%' }} />

                            <div class="card-body">
                                <h4 class="card-title">{v.vehicleId}</h4>
                                <p class="card-text">{v.vehicleNumber}</p>
                                <p class="card-text">{v.category}</p>

                                <Link to={`/vehicle/${v.vehicleId}`} className="btn btn-info">View</Link>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default FetchAllVehicles;