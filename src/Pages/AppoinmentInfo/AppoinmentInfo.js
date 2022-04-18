import React from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "../../ManageLocalStorage/manageLocalStorage";
import "./AppoinmentInfo.css";

const AppoinmentInfo = () => {
  const appoinmentData = getDataFromLocalStorage();
  const navigate = useNavigate()
  console.log(appoinmentData);
  const { fname, lname, phone, email, date, address, treatment, image } =
    appoinmentData;
  return (
    <div className="appoinmentInfo-main-container">
      <div className="appoinment-success-container">
        <h3 className="text-center text-success">
          Appoinment Successfull for {treatment} !!!
        </h3>
        <div className="image-info-container">
          <div>
            <img src={image} className="appoinment-info-image" alt="" />
          </div>
          <div className="appoinment-information">
            <h3 className="text-decoration-underline">Your Information</h3>
            <div>
              <div className="mb-1"><span style={{fontSize: '18px',fontWeight:'500',color:'brown'}}>Name: </span>{fname + " " + lname}</div>
              <p className="mb-1"><span style={{fontSize: '18px',fontWeight:'500',color:'brown'}}>Email: </span> {email}</p>
              <p className="mb-1"><span style={{fontSize: '18px',fontWeight:'500',color:'brown'}}>Phone: </span> {phone}</p>
              <div className="mb-1">
                <p className="mb-1"><span style={{fontSize: '18px',fontWeight:'500',color:'brown'}}>Address: </span> {address}</p>
              </div>
              <p><span style={{fontSize: '18px',fontWeight:'500',color:'brown'}}>Appoinment Date: </span> {date}</p>
            </div>
          </div>
        </div>
        <h5 className="text-center">Thank you for making appoinment.See you in <span className="text-danger">{date}</span></h5>
      </div>
      <button className="back-home-from-appoinment-info-btn" onClick={()=>navigate('/home')}>Back to Home Page</button>
    </div>
  );
};

export default AppoinmentInfo;
