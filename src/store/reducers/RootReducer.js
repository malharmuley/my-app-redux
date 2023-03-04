
import{ combineReducers} from "redux";
import counterReducer from './CounterReducer';
import userReducer from './UserReducer';
import vehicleReducer from "./VehicleReducer";
import loginReducer from "./LoginReducer";
import BookingReducer from "./BookingsReducer";

const rootReducer=combineReducers({
    counterReducer,
    userReducer,
    vehicleReducer,
    loginReducer,
    BookingReducer
})

export default rootReducer;