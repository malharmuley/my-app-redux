// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import AdmNavbar from "./AdmNavbar";
// import "./Dashboard.css";

// function AdminDashboard() {

//   return (
//     <div>

//       <AdmNavbar />

//       <div className="dashboard-container">
//         <div className="navigation-card">
//           <h2 className="navigation-card-title">Vehicles</h2>
//           <Link to="/vehicle/all">View vehicles</Link>
//           <Link to="/vehicle/add">Add vehicle</Link>
//         </div>
//         <div className="navigation-card">
//           <h2 className="navigation-card-title">Bookings</h2>
//           <Link to="/bookings/all">View Bookings</Link>
//         </div>

//         <div className="navigation-card">
//           <h2 className="navigation-card-title">Users</h2>
//           <Link to="/users/all">View Users</Link>
//         </div>

//       </div>
//       {/*<Footer /> */}
//     </div>
//   );

// }
// export default AdminDashboard;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import AdmNavbar from "./AdmNavbar";

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
    </div>
  );
}

export default AdminDashboard;