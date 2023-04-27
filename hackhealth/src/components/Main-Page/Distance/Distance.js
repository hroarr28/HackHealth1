import { useState } from "react";

function Distance(props) {
  const steps = props.steps;
  const kmPerStep = 0.000762; // This is an approximate conversion rate from steps to kilometers

  const distanceInKm = (steps * kmPerStep).toFixed(2);

  return (
    <div>
      <h3>Distance:</h3>
      <p>{distanceInKm}</p>
    </div>
  );
}

export default Distance;
