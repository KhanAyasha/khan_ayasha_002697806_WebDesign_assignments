import "../styles/weather.css";

function DailyCard(props){
    return(
        <>
            <div className="daily-card">
                <h1 className="time">{props.time}</h1>
                <div className="temp-image">
                <img src={props.image} alt="weather-icon"></img>
                </div>
                <h1 className="temparature">{props.temp} &deg;C</h1>
                <h1 className="description">{props.desc}</h1>
                <div className="dets">
                    <div className="det-headings">
                        <p>Minimun Temparature</p>
                        <p>Maximum Temparature</p>
                        <p>Humidity</p>
                    </div>
                    <div className="det-content">
                        <p>{props.min} &deg;C</p>
                        <p>{props.max} &deg;C</p>
                        <p>{props.humidity} %</p>
                    </div>
                </div>
            </div>
    </>
    )
}

export default DailyCard;