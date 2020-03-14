import React, { useEffect, useState } from 'react';
import './Weather.css';
import WeatherComponent from './WeatherComponent';

const Weather = () => {

    const [today, setTodaysWeather] = useState({ weather: [{ main: '', description: '', icon: '' }], main: { temp: '', feels_like: '' }, wind: { speed: '' }, sys: { country: '' } });
    const [carLastCleanedOn, setCarLastCleanedOn] = useState('');

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("gelolocation is not supported by your browser");
        }
        else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`//api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY }&units=imperial`)
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

    const registerCarWash = () => {
        let localStorage = window.localStorage;
        let today = new Date();
        let todayStr = `${today.getMonth()}/${today.getDay()}/${today.getFullYear()}`;
        localStorage.setItem('carLastCleaned', todayStr);
        setCarLastCleanedOn(todayStr);
    }

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

    let buttonDiv = <button onClick={registerCarWash}>Washed my Car</button>;
    if(carLastCleanedOn !== null) {
        buttonDiv = null;
    }

    return (
        <div>
            <WeatherComponent 
                locationName={today.name}
                country={today.sys.country}
                description={today.weather[0].description}
                weatherIconUrl={weatherIconUrl}
                temperature={temperature}
                feelsLike={feels_like}
                wind={wind}
                humidity={humidity}
                message={message} />
            {buttonDiv}
        </div>
    )
}

export default Weather;
