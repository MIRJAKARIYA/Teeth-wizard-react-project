import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './SingleService.css';

const SingleService = ({ service }) => {
  const { treatment, image, description, cost,id } = service;
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-md-6 col-xl-3 ">
      <div className="h-100 p-2 card-container">
        <img src={image} alt="" className="card-image" />
        <Card.Body>
          <Card.Title>{treatment}</Card.Title>
          <Card.Text>
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </Card.Text>
          <p>Service Cost: {"$" + cost}</p>
          <button className="checkout-more-button d-block mx-auto w-75" onClick={()=>navigate(`/service/${id}`)}>Checkout More</button>
        </Card.Body>
      </div>
    </div>
  );
};

export default SingleService;
