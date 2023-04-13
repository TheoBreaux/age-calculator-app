import React, { useState } from "react";
import "./Result.css";

const Result = ({ formState }) => {
  const birthdateInput = new Date(
    `${formState.year}-${formState.month}-${formState.day}`
  );

  const today = new Date();
  const ageDiff = today - birthdateInput;
  const ageDate = new Date(ageDiff);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  return (
    <div className="results-output">
      <p className="time-frame">
        <span className="age-output">{!years ? "--" : years + " "}</span>years
      </p>
      <p className="time-frame">
        <span className="age-output">{!months ? "--" : months + " "} </span>
        months
      </p>
      <p className="time-frame">
        <span className="age-output">{!days ? "--" : days + " "}</span>days
      </p>
    </div>
  );
};

export default Result;
