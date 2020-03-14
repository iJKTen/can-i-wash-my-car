import React from 'react';

const WeatherHeader = (props) => {
    return (
        <header>
            <div className="conditionsWithlocation">
                <div className="location">{props.locationName}, {props.country}</div>
                <div className="conditions">{props.description}</div>
            </div>
            <div className="icon">
                <img
                    src={props.weatherIconUrl}
                    alt={props.description}
                    title={props.description} />
            </div>
            <div className="clearMe" />
        </header>
    )
}

export default WeatherHeader;