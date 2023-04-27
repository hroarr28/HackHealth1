import { useState } from "react";

function Distance(props) {
  const steps = props.totalSteps;
  const kmPerStep = 0.000762; // conversion rate from steps to kilometers

  const distanceInKm = (steps * kmPerStep).toFixed(2);

  return (
    <div>
      <h3>Distance:</h3>
      <p>{distanceInKm} km</p>
    </div>
  );
}

export default Distance;
