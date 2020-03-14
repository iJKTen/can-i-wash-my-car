import React from 'react';
import WeatherHeader from './WeatherHeaderComponent';
import WeatherBody from './WeatherBodyComponent';
import WeatherFooter from './WeatherFooterComponent';

const WeatherComponent = (props) => {
    return (
        <div className='weatherWidget'>
                <WeatherHeader 
                    locationName={props.locationName}
                    country={props.country}
                    description={props.description}
                    weatherIconUrl={props.weatherIconUrl} />
                <WeatherBody 
                    temperature={props.temperature}
                    feelsLike={props.feelsLike}
                    wind={props.wind}
                    humidity={props.humidity} />
                <WeatherFooter
                    message={props.message} />
            </div>
    )
}

export default WeatherComponent;