import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVehicleByCat } from '../store/actions/VehicleAction';
function FetchVehicleByCat() {
    const vecCat = useSelector(state => state.vehicleReducer.vecCat);
    const dispatch = useDispatch();
    const { category } = useParams();
    useEffect(() => {
        dispatch(fetchVehicleByCat(category));
    }, [category])
    return (
        <div>
            {
                vecCat.map(c => (
                    <div key={category}>
                        <p>VehicleId :{c.vehicleId}</p>
                        <p>vehicleNumber :{c.vehicleNumber}</p>
                        <p>VehicleType:{c.type}</p>
                        <p>VehileCategory:{c.category}</p>
                        <p>VehileDescription:{c.description}</p>
                        <p>VehicleLocation:{c.location}</p>
                        <p>VehicleCapacity:{c.capacity}</p>
                        <p>VehicleChargesPerDay:{c.chargesPerDay}</p>

                    </div>
                ))
            }

        </div>
    )
}
export default FetchVehicleByCat;