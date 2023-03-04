// import React, { useState } from "react";

// import { useDispatch } from "react-redux";
// import { addBooking } from "../store/actions/BookingActions";
// function AddBooking() {
//   const [bId, setBId] = useState("");
//   const [bdate, setBdate] = useState("");
//   const [bfromDate, setBfromDate] = useState("");
//   const [btillDate, setBtillDate] = useState("");
//   const [bpayment, setBpayment] = useState("");
//   const [bdistance, setBdistance] = useState("");
//   const [vNumber, setVNumber] = useState("");
//   const [vtype, setVtype] = useState("");
//   const [vcategory, setVcategory] = useState("");
//   const dispatch = useDispatch();
//   const [formErrors, setFormErrors] = useState({});
//   const Register = () => {
//     let errors = {};
//     if (!bId) {
//       errors["bIdError"] = "This field is required";
//     }
//     if (!bdate) {
//       errors["bdateError"] = " This field is required";
//     }
//     if (!bfromDate) {
//       errors["bfromDateError"] = "This field is required";
//     }
//     if (!btillDate) {
//       errors["btillDateError"] = "This field is required";
//     }
//     if (!bdistance) {
//       errors["bdistanceError"] = "This field is required";
//     }
//     if (!bpayment) {
//       errors["bpaymentError"] = "This field is required";
//     }
//     if (!vNumber) {
//       errors["vNumberError"] = "This field is required";
//     }
//     if (!vtype) {
//       errors["vtypeError"] = "This field is required";
//     }
//     if (!vcategory) {
//       errors["vcategoryError"] = "This field is required";
//     }

//     setFormErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       const payload = {
//         bookingId: bId,
//         bookingDate: bdate,
//         bookingFromDate: bfromDate,
//         bookingTillDate: btillDate,
//         distance: bdistance,
//         payment: bpayment,
//         vehicle: {
//           vehicleNumber: vNumber,
//           type: vtype,
//           category: vcategory,
//         },
//       };
//       dispatch(addBooking(payload));
//     }
//   };
//   return (
//     <div>
//       <div>
//         <label>bookingId</label>
//         <input
//           type="text"
//           name="bId"
//           value={bId}
//           onChange={(event) => setBId(event.target.value)}
//         />
//         {formErrors.bIdError && (
//           <div style={{ color: "red" }}>{formErrors.bIdError}</div>
//         )}
//       </div>
//       <div>
//         <label>bookingDate</label>
//         <input
//           type="Date"
//           name="bdate"
//           value={bdate}
//           onChange={(event) => setBdate(event.target.value)}
//         />
//         {formErrors.bdateError && (
//           <div style={{ color: "red" }}>{formErrors.bdateError}</div>
//         )}
//       </div>
//       <div>
//         <label>bookingFromDate</label>
//         <input
//           type="Date"
//           name="bfromDate"
//           value={bfromDate}
//           onChange={(event) => setBfromDate(event.target.value)}
//         />
//         {formErrors.bfromDateError && (
//           <div style={{ color: "red" }}>{formErrors.bfromDateError}</div>
//         )}
//       </div>
//       <div>
//         <label>bookingTillDate</label>
//         <input
//           type="Date"
//           name="btillDate"
//           value={btillDate}
//           onChange={(event) => setBtillDate(event.target.value)}
//         />
//         {formErrors.btillDateError && (
//           <div style={{ color: "red" }}>{formErrors.btillDateError}</div>
//         )}
//       </div>

//       <div>
//         <label>Distance</label>
//         <input
//           type="text"
//           name="bdistance"
//           value={bdistance}
//           onChange={(event) => setBdistance(event.target.value)}
//         />
//         {formErrors.bdistanceError && (
//           <div style={{ color: "red" }}>{formErrors.bdistanceError}</div>
//         )}
//       </div>

//       <div>
//         <label>payment</label>
//         <input
//           type="text"
//           name="bpayment"
//           value={bpayment}
//           onChange={(event) => setBpayment(event.target.value)}
//         />
//         {formErrors.bpaymentError && (
//           <div style={{ color: "red" }}>{formErrors.bpaymentError}</div>
//         )}
//       </div>
//       <div>
//         <label>vehicleNumber</label>
//         <input
//           type="text"
//           name="vNumber"
//           value={vNumber}
//           onChange={(event) => setVNumber(event.target.value)}
//         />
//         {formErrors.vNumberError && (
//           <div style={{ color: "red" }}>{formErrors.vNumberError}</div>
//         )}
//       </div>
//       <div>
//         <label>type</label>
//         <input
//           type="text"
//           name="vtype"
//           value={bpayment}
//           onChange={(event) => setVtype(event.target.value)}
//         />
//         {formErrors.vtypeError && (
//           <div style={{ color: "red" }}>{formErrors.vtypeError}</div>
//         )}
//       </div>
//       <div>
//         <label>category</label>
//         <input
//           type="text"
//           name="vcategory"
//           value={vcategory}
//           onChange={(event) => setVcategory(event.target.value)}
//         />
//         {formErrors.vcategoryError && (
//           <div style={{ color: "red" }}>{formErrors.vcategoryError}</div>
//         )}
//       </div>

//       <button onClick={Register}>Register</button>
//     </div>
//   );
// }
// export default AddBooking;

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addBooking } from "../store/actions/BookingActions";

import './AddBoking.css'
function AddBooking() {
  // const [bId, setBId] = useState("");
  // const [bdate, setBdate] = useState("");
  const [bfromDate, setBfromDate] = useState("");
  const [btillDate, setBtillDate] = useState("");
  // const [bdescription, setBdescription] = useState("");
  // const [bstat, setBstatus] = useState("");
  // const [totalC, setTotalcst] = useState("");
  const [bpayment, setBpayment] = useState("");
  const [bdistance, setBdistance] = useState("");
  const [uid, setUid] = useState("");
  const [vid, setVid] = useState("");
  const myuser = JSON.parse(localStorage.getItem("myuser"));

  const dispatch = useDispatch();
  const { vehicleId } = useParams();
  const [formErrors, setFormErrors] = useState({});
  const Register = () => {
    let errors = {};
    // if (!bId) {
    //   errors["bIdError"] = "This field is required";
    // }
    // if (!bdate) {
    //   errors["bdateError"] = " This field is required";
    // }
    if (!bfromDate) {
      errors["bfromDateError"] = "This field is required";
    }
    if (!btillDate) {
      errors["btillDateError"] = "This field is required";
    }

    // if (!bdescription) {
    //     errors["bDescriptionError"] = "This field is required";
    //   }
    //   if (!bstat) {
    //     errors["bstatError"] = "This field is required";
    //   }
    if (!bdistance) {
      errors["bdistanceError"] = "This field is required";
    }
    if (!bpayment) {
      errors["bpaymentError"] = "This field is required";
    }
    // if (!uid) {
    //   errors["bUidError"] = "This field is required";
    // }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const payload = {
        // bookingId: bId,
        //bookingDate: bdate,
        bookingFromDate: bfromDate,
        bookingTillDate: btillDate,
        // bookingDescription : bdescription,
        // bookingStatus : bstat,
        // totalCost : totalC,
        distance: bdistance,
        payment: bpayment,
        user: {
          id: myuser.id
        },
        vehicle: {
          vehicleId: vehicleId
        },
      };
      dispatch(addBooking(payload));
    }
  };
  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-6">
            <div class="card text-black" style={{ borderRadius: '25px' }}>

              <div class="card-body p-md-5">

                <div class="row justify-content-center">
                  <div class="coverr">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">BOOK NOW!!</p>
                    <form class="mx-1 mx-md-4">


                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Booking From Date</label>
                          <input
                            type="Date"
                            name="bfromDate"
                            id="form3Example3c" class="form-control"
                            value={bfromDate}
                            onChange={(event) => setBfromDate(event.target.value)}
                          />
                          {formErrors.bfromDateError && (
                            <div style={{ color: "red" }}>{formErrors.bfromDateError}</div>
                          )}
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Booking Till Date</label>
                          <input
                            type="Date"
                            name="btillDate"
                            id="form3Example3c" class="form-control"
                            value={btillDate}
                            onChange={(event) => setBtillDate(event.target.value)}
                          />
                          {formErrors.btillDateError && (
                            <div style={{ color: "red" }}>{formErrors.btillDateError}</div>
                          )}
                        </div>
                      </div>


                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">Distance</label>
                          <input
                            type="text"
                            name="bdistance"
                            placeholder="In Kms"
                            id="form3Example3c" class="form-control"
                            value={bdistance}
                            onChange={(event) => setBdistance(event.target.value)}
                          />
                          {formErrors.bdistanceError && (
                            <div style={{ color: "red" }}>{formErrors.bdistanceError}</div>
                          )}
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">Payment</label>
                          <input
                            type="text"
                            name="bpayment"
                            placeholder="Cash/Online"
                            id="form3Example3c" class="form-control"
                            value={bpayment}
                            onChange={(event) => setBpayment(event.target.value)}
                          />
                          {formErrors.bpaymentError && (
                            <div style={{ color: "red" }}>{formErrors.bpaymentError}</div>
                          )}
                        </div>
                      </div>
                      {/* 
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">User Id</label>
                          <input
                            type="number"
                            name="uid"
                            id="form3Example3c" class="form-control"
                            value={uid}
                            onChange={(event) => setUid(event.target.value)}
                          />
                          {formErrors.bUidError && (
                            <div style={{ color: "red" }}>{formErrors.bUidError}</div>
                          )}
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <label>Vehicle Id</label>
                          <input
                            type="number"
                            name="vid"
                            id="form3Example3c" class="form-control"
                            value={vid}
                            onChange={(event) => setVid(event.target.value)}
                          />

                        </div>
                      </div> */}



                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button onClick={Register} type="button" class="btn btn-primary btn-lg">Confirm</button>
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
  );
}
export default AddBooking;