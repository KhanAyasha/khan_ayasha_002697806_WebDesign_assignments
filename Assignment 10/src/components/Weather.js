import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForeCastWeather from "./ForeCastWeatherCard";

function Weather() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);

  const getDate = (date) => {
    console.log(date);
    const utcDate = new Date(date + " UTC");
    const estTimeZone = "America/New_York";
    
    const estFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: estTimeZone,
      weekday: "long", 
    });
    
    const estDay = estFormatter.formatToParts(utcDate).find((part) => part.type === "weekday").value;
    return estDay;
  };

  const mostRepeated = (array) => {
    var counts = {};
    var compare = 0;
    var mostFrequent;
    for (var i = 0, len = array.length; i < len; i++) {
      var word = array[i];

      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] = counts[word] + 1;
      }
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = array[i];
      }
    }
    if (mostFrequent !== undefined) {
      return mostFrequent;
    } else {
      return array[array.length - 1];
    }
  };

  useEffect(() => {
    console.log("useEffect is running!");
    const getLocation = () => {
      console.log("getLocation is called!");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=d11c840b50ef84b1600a3db47fce703a`
              )
              .then(function (response) {
                console.log(response.data);
                setCurrentWeatherData(response.data);
              })
              .catch(function (error) {
                console.log(error.message);
              });
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=f00c38e0279b7bc85480c3fe775d518c`
              )
              .then(function (response) {
                console.log(response.data);
                const forcastData = response.data.list;
                const weeklyWeather = {};
                forcastData.forEach((forecast) => {
                  console.log(forecast);
                  const dayOfWeek = getDate(forecast.dt_txt);
                  console.log(dayOfWeek)
                  if (!weeklyWeather[dayOfWeek]) {
                    weeklyWeather[dayOfWeek] = {
                      temp_min: forecast.main.temp_min,
                      temp_max: forecast.main.temp_max,
                      description: [forecast.weather[0].description],
                      icon: [forecast.weather[0].icon],
                    };
                  } else {
                    if (
                      forecast.main.temp_min < weeklyWeather[dayOfWeek].temp_min
                    ) {
                      weeklyWeather[dayOfWeek].temp_min =
                        forecast.main.temp_min;
                    }
                    if (
                      forecast.main.temp_max > weeklyWeather[dayOfWeek].temp_max
                    ) {
                      weeklyWeather[dayOfWeek].temp_max =
                        forecast.main.temp_max;
                    }
                    weeklyWeather[dayOfWeek].description.push(
                      forecast.weather[0].description
                    );
                    weeklyWeather[dayOfWeek].icon.push(
                      forecast.weather[0].icon
                    );
                  }
                });
                for (const dayOfWeek in weeklyWeather) {
                  const descriptions = weeklyWeather[dayOfWeek].description;
                  const icons = weeklyWeather[dayOfWeek].icon;
                  weeklyWeather[dayOfWeek].description = mostRepeated(descriptions);
                  weeklyWeather[dayOfWeek].icon = mostRepeated(icons);
                }

                console.log(weeklyWeather);
                setForecastWeatherData(weeklyWeather);
              })
              .catch(function (error) {
                console.log(error);
              });
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {currentWeatherData && (
        <CurrentWeatherCard
          city={currentWeatherData.name}
          image={currentWeatherData.weather[0].icon}
          description={currentWeatherData.weather[0].description}
          temp={Math.round(currentWeatherData.main.temp)}
          feelsLike={Math.round(currentWeatherData.main.feels_like)}
          humidity={currentWeatherData.main.humidity}
          pressure={currentWeatherData.main.pressure}
          wind={currentWeatherData.wind.speed}
        />
      )}
      {forecastWeatherData && (
        <div className="extended-forecast">
          <div className="content">
            <h2>Weekly Forecast</h2>
            <div className="ext-cards">
            {Object.keys(forecastWeatherData).map((dayOfWeek, index) => (
                <ForeCastWeather
                  day={dayOfWeek}
                  image={`http://openweathermap.org/img/w/${forecastWeatherData[dayOfWeek].icon}.png`}
                  forecast={forecastWeatherData[dayOfWeek].description}
                  max={Math.round(forecastWeatherData[dayOfWeek].temp_max)}
                  min={Math.round(forecastWeatherData[dayOfWeek].temp_min)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
