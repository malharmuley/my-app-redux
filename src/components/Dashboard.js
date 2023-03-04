import { useNavigate } from "react-router-dom";
import React from "react";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./AdminDashboard";

function Dashboard() {
    const navigate = useNavigate();
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    // if (myuser !== null) {
        const role = myuser.role;
        if (role === 'Customer') {
           return <CustomerDashboard />
        }
       
        if (role === 'Admin') {
            return <AdminDashboard/>    
        }
     
    //}
  
}

export default Dashboard;