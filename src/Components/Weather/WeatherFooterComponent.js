import React from 'react';

const WeatherFooter = (props) => {
    return (
        <footer>
            <div>{props.message}</div>
        </footer>
    )
}

export default WeatherFooter;