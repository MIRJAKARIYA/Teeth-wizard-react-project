import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import useServices from "../../hooks/useServices";
import SingleService from "../../Shared/SingleService/SingleService";
import "./Home.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Home = () => {
  const services = useServices();
  console.log(services)
  const [showAll, setShowAll] = useState(false);
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    if (showAll) {
      setShowData(services);
    } else {
      setShowData(services.slice(0, 4));
    }
  }, [showAll,services]);
  return (
    <div>
      <Banner></Banner>
      <div className="services-container" id="services">
        <h1 className="text-center mb-5">Services</h1>
        <div className="row gy-4">
          {showData.map((service) => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </div>
        <button className="show-button" onClick={() => setShowAll(!showAll)}>
          <span className="me-1">{showAll ? "Show less" : "Show more"}</span>
          {showAll ? <BsArrowLeft /> : <BsArrowRight />}
        </button>
      </div>
    </div>
  );
};

export default Home;
