import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVehicleByCap } from '../store/actions/VehicleAction'; 
function FetchVehicleByCap() {
    const vecCap = useSelector(state => state.vehicleReducer.vecCap);
    const dispatch = useDispatch();
    const { capacity } = useParams();
    useEffect(() => {
        dispatch(fetchVehicleByCap(capacity));
    }, [capacity])
    return (
        <div>
            {
                vecCap.map(v => (
                    <div key={capacity}>
                        <p>VehicleId :{v.vehicleId}</p>
                        <p>vehicleNumber :{v.vehicleNumber}</p>
                        <p>VehicleType:{v.type}</p>
                        <p>VehileCategory:{v.category}</p>
                        <p>VehileDescription:{v.description}</p>
                        <p>VehicleLocation:{v.location}</p>
                        <p>VehicleCapacity:{v.capacity}</p>
                        <p>VehicleChargesPerDay:{v.chargesPerDay}</p>

                    </div>
                ))
            }

        </div>
    )
}
export default FetchVehicleByCap;