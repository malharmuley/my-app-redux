import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Counter from './components/Counter';
import AddUser from './components/AddUser';
import FetchAllUsers from './components/FetchAllUsers'
import FetchAllVehicles from './components/FetchAllVehicles';
import AddVehicle from './components/AddVehicle';
import FetchUser from './components/FetchUser';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import Dashboard from './components/Dashboard';
import CustNavbar from './components/CustNavbar';
import AddBooking from './components/AddBooking';
import MyBookings from './components/MyBookings';
import FetchAllBookings from './components/FetchAllBookings';
import FetchBooking from './components/FetchBooking';
import FetchVehicleByCat from './components/FetchVehicleByCategory';
import FetchVehicleByCap from './components/FetchVehicleByCap';
import DeleteBooking from './components/DeleteBooking';
import AdminDashboard from './components/AdminDashboard';
import AdmNavbar from './components/AdmNavbar';
import ViewVehicle from './components/ViewVehicle';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Counter' element={<Counter />} />

        <Route path='/users/all' element={<FetchAllUsers />} />
        <Route path='/user/:userId' element={<FetchUser />} />
        <Route path='/user/add' element={<AddUser />} />

        <Route path="/booking/add/:vehicleId" element={<AddBooking />} />
        <Route path="/bookingsByUser/user/:userId" element={<MyBookings />} />
        <Route path="/bookings/all" element={<FetchAllBookings />} />
        <Route path="/BookingById/:bookingId" element={<FetchBooking />} />
        <Route path="/deleteBooking/:bookingId" element={<DeleteBooking />} />
   
     

        <Route path="/vehicle/all" element={<FetchAllVehicles />} />
        <Route path="/vehicle/:vehicleId" element={<ViewVehicle />} />
        <Route path="/vehicle/add" element={<AddVehicle />} />
        <Route path="/vehicle/bycat/:category" element={<FetchVehicleByCat />} />
        <Route path="/vehicle/bycap/:capacity" element={<FetchVehicleByCap />} />

        <Route path="/login" element={<Login />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />        
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/cutomer/navbar" element={<CustNavbar />} />
        <Route path="/cutomer/navbar" element={<AdmNavbar />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
