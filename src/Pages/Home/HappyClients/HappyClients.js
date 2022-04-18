import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleClient from "../SingleClient/SingleClient";
import "./HappyClents.css";

const HappyClients = () => {
  const [count, setCount] = useState(2);
  const [twoClients, setTwoClient] = useState([]);
  const [clients, setClients] = useState([]);
  axios.get("happyclients.json").then((data) => setClients(data.data));

  useEffect(() => {
    if (count > 5) {
      setCount(0);
    } else if (count <= 1) {
    }
  }, [count]);

  const handleNextButton = () => {
    const getClients = [];
    if (count <= 5) {
      getClients.push(clients[count]);
      getClients.push(clients[count + 1]);
      setTwoClient(getClients);
      setCount(count + 2);
    }
  };

  return (
    <div className="mb-5 mt-5">
      <div className="client-container">
        {twoClients.length
          ? twoClients.map((client) => (
              <SingleClient
                key={client.reviewId}
                client={client}
              ></SingleClient>
            ))
          : clients
              .slice(0, 2)
              .map((client) => (
                <SingleClient
                  client={client}
                  key={client.reviewId}
                ></SingleClient>
              ))}
      </div>
      <div>
        <button className="next-comment-button" onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default HappyClients;
