import React, { useState } from "react";
//import Weather from "./Weather";
import axios from "axios";
import Loader from "react-loading-spinner";

export default function Form() {
  const [city, setCity] = useState("enter a city");
  let [tempC, setTempC] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${city}`);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showResponse(response) {
    setTempC(response.data.main.temp);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
  }

  if (city !== "enter a city") {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a5d0107b87d2358462582e10139dd2d&units=metric`;
    axios.get(url).then(showResponse);
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <ul className="weather">
          <li>
            The temperature in {city} is {tempC} C
          </li>
          <li>The wind is {wind} km/hr</li>
          <li>The description is {description}</li>
          <li>The humidity is {humidity}</li>
        </ul>
      </>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
