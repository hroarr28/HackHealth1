import { useState } from "react";

function Distance(props) {
  const steps = props.totalSteps;
  const kmPerStep = 0.000762; // conversion rate from steps to kilometers

  const distanceInKm = (steps * kmPerStep).toFixed(2);

  return (
    <div className="distance">
      <h2>Distance:</h2>
      <h3>{distanceInKm} km</h3>
    </div>
  );
}

export default Distance;
