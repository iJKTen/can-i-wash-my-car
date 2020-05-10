import React from 'react';

const WeatherBody = (props) => {
    return (
        <section>
            <div className="temperature">
                {props.temperature}<span>&#8451;</span>
            </div>
            <div className="details">
                <div>Details</div>
                <div>Feels like <span>{props.feelsLike}&#8451;</span></div>
                <div>Wind <span>{props.wind} m/s</span></div>
                <div>Humidity <span>{props.humidity} &#37;</span></div>
            </div>
            <div className="clearMe" />
        </section>
    )
}

export default WeatherBody;