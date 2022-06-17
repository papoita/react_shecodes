import React, { useState } from "react";

export default function Weather(props) {
  console.log(props.response);
  let [tempC, setTempC] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);

  return (
    <ul>
      <li>
        The temperature in ${props.city} is {tempC}
      </li>
      <li>The wind is ${wind}</li>
      <li>The description is ${description}</li>
      <li>The humidity is ${humidity}</li>
    </ul>
  );
}
