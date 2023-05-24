import Layout from "../../components/Layout.js";
import { useState } from "react";
import styled from "styled-components";

const api = {
  key: "0a1b4079174262c9bd54e2c2800cda16",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <Layout pageTitle="Weather">
      <WeatherPage>
        <Title>Weather Forecast</Title>
        <WeatherCard>
          <input
            type="text"
            placeholder="Enter city name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
          {typeof weather.main !== "undefined" ? (
            <WeatherData>
              <WeatherInfo>City: {weather.name}</WeatherInfo>
              <WeatherInfo>Date: {dateBuilder(new Date())}</WeatherInfo>
              <WeatherInfo>Temperature: {weather.main.temp}°C</WeatherInfo>
              <WeatherInfo>Description: {weather.weather[0].main}</WeatherInfo>
            </WeatherData>
          ) : (
            ""
          )}
        </WeatherCard>
      </WeatherPage>
    </Layout>
  );
}
const WeatherPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const WeatherCard = styled.div`
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
