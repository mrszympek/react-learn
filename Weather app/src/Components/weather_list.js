import React from 'react';
import WeatherListItem from './weather_list_item';

const weatherList = {
    display: 'flex',
    flexDirection: 'row'
};

const WeatherList = (props) => {
    let listItem = props.weather
        .filter((item) => {
            return (new Date(item.dt * 1000).getUTCHours() === 12);
        })
        .map((item) => {
            return (
                <WeatherListItem
                    minTemp={item.main.temp_min}
                    maxTemp={item.main.temp_max}
                    icon={item.weather[0].icon}
                    day={item.dt_txt}
                    key={item.dt}
                />
            )
        });

    return (
        <div style={weatherList}>
            {listItem}
        </div>
    )
};

export default WeatherList;