import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/weather.css";
import DailyCard from "./DailyCard";

function HourlyWeather() {
  const { day } = useParams();
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);

  const getDate = (date) => {
    const utcDate = new Date(date + " UTC");
    const estTimeZone = "America/New_York";

    const estFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: estTimeZone,
      weekday: "long",
    });

    const estDay = estFormatter
      .formatToParts(utcDate)
      .find((part) => part.type === "weekday").value;
    return estDay;
  };

  const getESTTime = (date) => {
    const utcDate = new Date(date + " UTC");

    const estTimeZone = "America/New_York";

    const estFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: estTimeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const estTimeString = estFormatter.format(utcDate);
    return estTimeString
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=d11c840b50ef84b1600a3db47fce703a`
              )
              .then(function (response) {
                const forecastData = response.data.list;
                const hourlyData = [];
                forecastData.forEach((forecast) => {
                  const dayOfWeek = getDate(forecast.dt_txt);
                  console.log(day);
                  console.log(dayOfWeek);
                  if (dayOfWeek === day) {
                    console.log("hi");
                    hourlyData.push(forecast);
                  }
                });
                console.log(hourlyData);
                setHourlyWeatherData(hourlyData);
                console.log(hourlyWeatherData);
              })
              .catch(function (error) {
                console.log(error.message);
              });
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  });

  return (
    <>
      {hourlyWeatherData && (
        <div className="daily-cards">
          {hourlyWeatherData.map((hourlyForecast) => (
            <DailyCard
              temp={hourlyForecast.main.temp}
              max={hourlyForecast.main.temp_max}
              min={hourlyForecast.main.temp_min}
              humidity={hourlyForecast.main.humidity}
              image={`http://openweathermap.org/img/w/${hourlyForecast.weather[0].icon}.png`}
              desc={hourlyForecast.weather[0].description}
              time={getESTTime(hourlyForecast.dt_txt)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default HourlyWeather;
