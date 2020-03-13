import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [today, setTodaysWeather] = useState('');

    useEffect(() => {
        if(!navigator.geolocation) {
            console.log("gelolocation is not supported by your browser");
        }
        else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch("//api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=00a838ee49c51c343d61bf6dd17c4b12")
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    setTodaysWeather(json);
                });
            },
            (err) => {
                console.log("Error getting location");
            });
        }
    }, []);

    let description = '';
    if(today) {
        description = today.weather[0].description;
    }

    return (
        <div>
            <div>{description}</div>
        </div>
    )
}

export default Weather;
