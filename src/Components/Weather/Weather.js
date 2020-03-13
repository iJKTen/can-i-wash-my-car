import React, { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {

    const [today, setTodaysWeather] = useState({ weather: [{ main: '', description: '', icon: '' }], main: { temp: '', feels_like: '' }, wind: { speed: '' }, sys: { country: '' } });
    const [carLastCleanedOn, setCarLastCleanedOn] = useState('');

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("gelolocation is not supported by your browser");
        }
        else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch("//api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + process.env.REACT_APP_API_KEY + "&units=metric")
                    .then((response) => {
                        return response.json();
                    })
                    .then((json) => {
                        setTodaysWeather(json);
                        let localStorage = window.localStorage;
                        let lastCleaned = localStorage.getItem('carLastCleaned');
                        if (lastCleaned !== '') {
                            setCarLastCleanedOn(lastCleaned);
                        }
                    });
            },
                (err) => {
                    console.log("Error getting location");
                });
        }
    }, []);

    let weatherIconUrl = '//openweathermap.org/img/wn/' + today.weather[0].icon + '.png';
    let temperature = Math.floor(today.main.temp);
    let feels_like = Math.floor(today.main.feels_like);
    let wind = Math.floor(today.wind.speed);
    let humidity = Math.floor(today.main.humidity);
    let message = 'You have never cleaned your car.';
    if (carLastCleanedOn !== null) {
        let dt = new Date(carLastCleanedOn);
        let threshold = new Date();
        threshold.setDate(threshold.getDate() - 7);
        if (dt > threshold) {
            message = 'It\'s been seven days since you washed your car. It\'s dirty';
        }
        else {
            message = 'Don\'t worry your car is clean!';
        }
    }

    return (
        <div>
            <div className='weatherWidget'>
                <header>
                    <div className="conditionsWithlocation">
                        <div className="location">{today.name}, {today.sys.country}</div>
                        <div className="conditions">{today.weather[0].description}</div>
                    </div>
                    <div className="icon">
                        <img
                            src={weatherIconUrl}
                            alt={today.weather[0].description}
                            title={today.weather[0].description} />
                    </div>
                    <div className="clearMe" />
                </header>
                <section>
                    <div className="temperature">
                        {temperature}
                        <span><sup>o</sup>C</span>
                    </div>
                    <div className="details">
                        <div>Details</div>
                        <div>Feels like <span>{feels_like}<sup>o</sup>C</span></div>
                        <div>Wind <span>{wind} m/s</span></div>
                        <div>Humidity <span>{humidity}%</span></div>
                    </div>
                    <div className="clearMe" />
                </section>
                <footer>
                    <div>{message}</div>
                </footer>
            </div>
        </div>
    )
}

export default Weather;
