import React from 'react';

const WeatherBody = (props) => {
    return (
        <section>
            <div className="temperature">
                {props.temperature}<span><sup>&deg;</sup>C</span>
            </div>
            <div className="details">
                <div>Details</div>
                <div>Feels like <span>{props.feelsLike}<sup>&deg;</sup>C</span></div>
                <div>Wind <span>{props.wind} m/s</span></div>
                <div>Humidity <span>{props.humidity}%</span></div>
            </div>
            <div className="clearMe" />
        </section>
    )
}

export default WeatherBody;