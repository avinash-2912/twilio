// Call.js
import React from "react";
import { useParams } from "react-router-dom";

const Call = ({ handleCall }) => {
  const { deviceId } = useParams(); // Extract deviceId from URL

  const initiateCall = () => {
    handleCall(deviceId); // Call the API with the deviceId
  };

  return (
    <div>
      <h2>Call to Device ID: {deviceId}</h2>
      <button onClick={initiateCall}>Call</button>
    </div>
  );
};

export default Call;
