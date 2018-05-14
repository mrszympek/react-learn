import React from 'react';
import WeatherListItem from './weather_list_item';

const WeatherList = (props) => {
    let listItem = props.weather
        .filter((item) => {
            return (new Date(item.dt * 1000).getUTCHours() === 12);
        })
        .map((item) => {
            return (
                <WeatherListItem
                    temp={item.main.temp}
                    icon={item.weather[0].icon}
                    day={item.dt_txt}
                    key={item.dt}
                />
            )
        });

    return <div>
        {listItem}
    </div>
};

export default WeatherList;