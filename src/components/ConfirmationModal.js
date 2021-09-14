import React, { useState } from "react";
import Details from "./UserDetails";
import "../css/Modal.css";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

export default function Modal(props) {
  const initialData = { name: "", email: "" };
  const [inputs, setInputs] = useState(initialData);

  const handleConfirm = () => {
    props.setIsLoading(true);
    const json=JSON.stringify(inputs);
    //const url="http://localhost:8080/api/v1/confirmBooking"
    const url = "https://hackitmovie.herokuapp.com/api/v1/confirmBooking";
    const config = {
      headers: { 'bookingid': props.id,
      'Content-Type' : 'application/json' }
       };
  
       axios
           .post(url,json,config)
           .then((response) => {
            
            props.onClose();
            setInputs(initialData);
            setTimeout(() => {
              NotificationManager.success(response.data,"Success!",2000);
             }, 3000);
            
             
           })
           .catch((error) => {
            NotificationManager.error("Please Refresh Your View","Seat Not Available!",2000);
           });           

  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <h3 className="text-center mb-5">CONFIRMATION</h3>
        <div className="text-center">
          <Details
            handleConfirm={handleConfirm}
            handleInputChange={handleInputChange}
            inputs={inputs}
          />
        </div>
        <br />
        <button className="mt-5 btn btn-sm btn-outline-danger" onClick={props.onCancel}>
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
}
