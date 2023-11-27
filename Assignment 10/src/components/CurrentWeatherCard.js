import "../styles/weather.css";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CurrentWeatherCard(props) {
  return (
    <>
      <div className="cards">
        <div className="weather-card">
          <div className="card-left">
            <p>Current Weather</p>
            <p>
              <LocationOnIcon/>
              {props.city}
              </p>
            <div className="temp">
              <img src={`http://openweathermap.org/img/w/${props.image}.png`} alt="Weather Icon"></img>
              <h3>{props.temp} &deg;C</h3>
            </div>
            <p>{props.description}</p>
          </div>
          <div className="card-right">
            <p>
              Feels Like <span>{props.feelsLike} &deg;C</span>
            </p>
            <p>
              <WaterDropIcon />
              Humidity <span>{props.humidity} %</span>
            </p>
            <p>
              <AirIcon />
              Wind <span>{props.wind} m/s</span>
            </p>
            <p>
              <CompareArrowsIcon />
              Pressure <span>{props.pressure} hPa</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeatherCard;
