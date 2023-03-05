
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVehicle } from '../store/actions/VehicleAction';
import './AddVehicle.css';
function AddVehicle() {

   const [vNumber, setVNumber] = useState("");
   const [vtype, setVtype] = useState("");
   const [vcategory, setVcategory] = useState("");
   const [vdescription, setVdescription] = useState("");
   const [vlocation, setVlocation] = useState("");
   const [vcapacity, setVcapacity] = useState("");
   const [vchargesPerDay, setVchargesPerDay] = useState("");

   const [dfname, setDfname] = useState("");
   const [dlname, setDlname] = useState("");
   const [deaddress, setDeaddress] = useState("");
   const [lsNumber, setLsnumber] = useState("");
   const [mnumber, setMnumber] = useState("");

   const dispatch = useDispatch();

   const [formErrors, setFormErrors] = useState({});
   const save = () => {

      let errors = {};
      if (!vNumber) {
         errors['vNumberError'] = 'This filed is required';
      }
      if (!vtype) {
         errors['vtypeError'] = ' This filed is required';
      }
      if (!vcategory) {
         errors['vcategoryError'] = 'This filed is required';
      }
      if (!vlocation) {
         errors['vlocationError'] = 'This filed is required';
      }
      if (!vchargesPerDay) {
         errors['vchargesPerDayError'] = 'This filed is required';
      }


      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
         const payload = {
            vehicleNumber: vNumber,
            type: vtype,
            category: vcategory,
            description: vdescription,
            location: vlocation,
            capacity: vcapacity,
            chargesPerDay: vchargesPerDay,
            driver: {

               firstName: dfname,
               lastName: dlname,
               emailAddress: deaddress,
               licenseNumber: lsNumber,
               mobileNumber: mnumber


            }
         }
         dispatch(addVehicle(payload))
      }
   }
   return (
      <div>
         <section class="vh-100" style={{ backgroundColor: "#eee" }}>
            <div class="row d-flex justify-content-center align-items-center h-100">
               <div class="col-lg-12 col-xl-6">
                  <div class="card text-black" style={{ borderRadius: '25px' }}>

                     <div class="card-body p-md-5">

                        <div class="row justify-content-center">
                           <div class="cover2">
                              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD MORE VEHICLES!!</p>
                              <form class="mx-1 mx-md-4">

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Vehicle Number</label>
                                       <input type="text" name="vNumber" id="form3Example3c" class="form-control" value={vNumber}
                                          onChange={event => setVNumber(event.target.value)} />
                                       {
                                          formErrors.vNumberError && <div style={{ color: 'red' }}>{formErrors.vNumberError}</div>
                                       }
                                    </div>
                                 </div>
                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label>Vehicle Type</label>
                                       <input type="text" name="vtype" id="form3Example3c" class="form-control" value={vtype}
                                          onChange={event => setVtype(event.target.value)} />
                                       {
                                          formErrors.vtypeError && <div style={{ color: 'red' }}>{formErrors.vtypeError}</div>
                                       }

                                    </div>
                                 </div>
                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Vehicle category</label>
                                       <input type="text" name="vcategory" id="form3Example3c" class="form-control" value={vcategory}
                                          onChange={event => setVcategory(event.target.value)} />
                                       {
                                          formErrors.vcategoryError && <div style={{ color: 'red' }}>{formErrors.vcategoryError}</div>
                                       }



                                    </div>
                                 </div>
                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Vehicle Description</label>
                                       <input type="text" name="vdescription" id="form3Example3c" class="form-control" value={vdescription}
                                          onChange={event => setVdescription(event.target.value)} />


                                    </div>
                                 </div>
                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c" >Vehicle Location</label>
                                       <input type="text" name="vlocation" id="form3Example3c" class="form-control" value={vlocation}
                                          onChange={event => setVlocation(event.target.value)} />
                                       {
                                          formErrors.vlocationError && <div style={{ color: 'red' }}>{formErrors.vlocationError}</div>
                                       }

                                    </div>
                                 </div>


                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Vehicle capacity</label>
                                       <input type="text" name="vcapacity" id="form3Example3c" class="form-control" value={vcapacity}
                                          onChange={event => setVcapacity(event.target.value)} />


                                    </div>
                                 </div>

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Vehicle ChargesPerDay</label>
                                       <input type="number" name="vchargesPerDay" id="form3Example3c" class="form-control" value={vchargesPerDay}
                                          onChange={event => setVchargesPerDay(event.target.value)} />
                                       {
                                          formErrors.vchargesPerDayError && <div style={{ color: 'red' }}>{formErrors.vchargesPerDayError}</div>
                                       }

                                    </div>
                                 </div>

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0" >
                                       <label class="form-label" for="form3Example3c">Driver's First Name</label>
                                       <input type="text" name="dfname" id="form3Example3c" class="form-control" value={dfname}
                                          onChange={event => setDfname(event.target.value)} />


                                    </div>
                                 </div>

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Driver's Last Name</label>
                                       <input type="text" name="dlname" id="form3Example3c" class="form-control" value={dlname}
                                          onChange={event => setDlname(event.target.value)} />

                                    </div>
                                 </div>

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Driver Email Address</label>
                                       <input type="text" name="deaddress" id="form3Example3c" class="form-control" value={deaddress}
                                          onChange={event => setDeaddress(event.target.value)} />

                                    </div>
                                 </div>

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Driver License Number</label>
                                       <input type="number" name="lsnumber" id="form3Example3c" class="form-control" value={lsNumber}
                                          onChange={event => setLsnumber(event.target.value)} />

                                    </div>
                                 </div>

                                 <div class="d-flex flex-row align-items-center mb-4">
                                    <div class="form-outline flex-fill mb-0">
                                       <label class="form-label" for="form3Example3c">Driver's Mobile Number</label>
                                       <input type="text" name="mnumber" id="form3Example3c" class="form-control" value={mnumber}
                                          onChange={event => setMnumber(event.target.value)} />

                                    </div>
                                 </div>


                                 <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button onClick={save} type="button" class="btn btn-primary btn-lg">Save</button>
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
export default AddVehicle;