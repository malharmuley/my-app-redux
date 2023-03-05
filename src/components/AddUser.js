
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/actions/UserAction"; 
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faLock, faCity,faCode, faUserMd, faHouseUser} from '@fortawesome/free-solid-svg-icons';
import './Adduser.css'

function AddUser(){
    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[email, setEmail] = useState("");
    const[uType, setUType] = useState("");
    const[password, setPassword] = useState("");
     const[city, setCity] = useState("");
     const[state, setState] = useState("");
     const[pincd, SetPincode] = useState("");
    
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});



    const mystyle4 ={
        paddingLeft : 5
    }

    const mystyle5 ={
        paddingLeft : 5
    }

    const mystyle6 ={
        paddingLeft : 5
    }

    const mystyle7 ={
        paddingLeft : 5
    }

    const mystyle8 ={
        paddingLeft : 5
    }

    const mystyle9 ={
        paddingLeft : 5
    }

    const mystyle10 ={
        paddingLeft : 5
    }

    const mystyle11 ={
        paddingLeft : 5
    }
    const mystyle12 ={
        marginBottom : 20
    }


        


    const register = () =>{
        let errors = {};
        if(!fname){
             errors['fnameError'] = 'This field is mandatory';
        }

        if(!lname){
             errors['lnameError'] = 'This field is mandatory';
        }

        if(!password){
             errors['passwordError'] = 'This field is mandatory';
        }

        if(!email){
            errors['emailAddressError'] = 'This field is mandatory';
       }
       if(!pincd){
        errors['pinCodeError'] = 'This field is mandatory';
   }

//        if(!city){
//         errors['cityError'] = 'This field is mandatory';
//    }

//    if(!state){
//     errors['statError'] = 'This field is mandatory';
// }

       setFormErrors(errors);
        if(Object.keys(errors).length === 0) {


        const payload ={
        firstName : fname,
        lastName : lname,
        emailAddress : email,
        password : password,
        userType : uType,
         address: {
             city : city,
             state : state,
             pincode : pincd
        }
    
    }
    dispatch (addUser(payload))

    }
}
    

    return(
        <div>
           
            <section class="vh-100" style={{backgroundColor : "#eee"}}>
            
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-6">
            <div class="card text-black" style={{borderRadius: '25px'}}>
                
            <div class="card-body p-md-5">
          
            <div class="row justify-content-center">
            <div class = "coverr">
                
            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up To Rent!!</p>
            <form class="mx-1 mx-md-4">


            <div class="d-flex flex-row align-items-center mb-4">
           
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <label class="form-label" for="form3Example1c" style = {mystyle5}>FirstName</label>
                <input type = "text" name= "fname"  id="form3Example1c" placeholder="first name" class="form-control"value = {fname}
                onChange= {event => setFname(event.target.value)}/>
                {
                    formErrors.fnameError && <div style= {{color: 'red'}}>{formErrors.fnameError}</div>
                }
            </div>
            </div>

            <div class="d-flex flex-row align-items-center mb-4">
            
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faUser} />
                <label  class="form-label" for="form3Example3c" style = {mystyle6}>LastName</label>
                <input type = "text" name= "lname" id="form3Example3c" placeholder="last name" class="form-control" value = {lname}
                onChange= {event => setLname(event.target.value)}/>

                      {
                         formErrors.lnameError && <div style= {{color: 'red'}}>{formErrors.lnameError}</div>
                     }
            </div>
            </div>
             
            <div class="d-flex flex-row align-items-center mb-4">
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faEnvelope} />
                <label  class="form-label" for="form3Example4c" style = {mystyle7}>Email</label>
                <input type = "email" name= "email" id="form3Example4c" placeholder="email" class="form-control" value = {email}
                onChange= {event => setEmail(event.target.value)}/>
                {
                         formErrors.emailAddressError && <div style= {{color: 'red'}}>{formErrors.emailAddressError}</div>
                     }
            </div>
            </div>
            
            <div class="d-flex flex-row align-items-center mb-4">
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faLock} />
                <label class="form-label" for="form3Example4cd" style = {mystyle8}>Password</label>
                <input type = "password" name= "password" id="form3Example4cd" placeholder="password" class="form-control" value = {password}
                onChange= {event => setPassword(event.target.value)}/>
                {
                         formErrors.passwordError && <div style= {{color: 'red'}}>{formErrors.passwordError}</div>
                     }
            </div>
            </div>
             
            <div class="d-flex flex-row align-items-center mb-4">
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faCity} />

                <label  class="form-label" for="form3Example4cd" style = {mystyle4}> City</label>
                <input type = "text" id="form3Example4cd" class="form-control" name= "city" placeholder="city" value = {city}
                onChange= {event => setCity(event.target.value)}/>
                {
                         formErrors.cityError && <div style= {{color: 'red'}}>{formErrors.cityError}</div>
                     }
            </div>
            </div>  

            <div class="d-flex flex-row align-items-center mb-4">
           <div  class="form-outline flex-fill mb-0">
           <FontAwesomeIcon icon={faCity} />
                <label class="form-label" for="form3Example4cd" style = {mystyle9}>State</label>
                <input type = "text" name= "state" id="form3Example4cd" class="form-control" placeholder="state" value = {state}
                onChange= {event => setState(event.target.value)}/>
                {
                         formErrors.statError && <div style= {{color: 'red'}}>{formErrors.statError}</div>
                     }
            </div> 
            </div>
            
            <div class="d-flex flex-row align-items-center mb-4">
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faCode} />
                <label class="form-label" for="form3Example4cd" style = {mystyle10}>Pin Code</label>
                <input type = "number" name= "pincd" id="form3Example4cd" class="form-control" placeholder="pin code" value = {pincd}
                onChange= {event => SetPincode(event.target.value)}/>
                {
                         formErrors.pinCodeError && <div style= {{color: 'red'}}>{formErrors.pinCodeError}</div>
                     }
            </div> 
            </div>

            <div class="d-flex flex-row align-items-center mb-4">
            <div class="form-outline flex-fill mb-0">
            <FontAwesomeIcon icon={faHouseUser} />
                <label  class="form-label" for="form3Example3c" style = {mystyle11}>Your role</label>
                <input type = "text" name= "uType" id="form3Example3c" placeholder="role" class="form-control" value = {uType}
                onChange= {event => setUType(event.target.value)}/>
            
            </div>
            </div>

            

            

            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button onClick={register} type="button" class="btn btn-primary btn-lg" style = {mystyle12}>Register here </button>

             <Link to="/"> Go to Login</Link>
             </div>
             
             


             </form>
             </div>
             </div>  
             </div>    
             </div>
             </div>
               </div>
             </section>
        </div>
    )

}

export default AddUser;