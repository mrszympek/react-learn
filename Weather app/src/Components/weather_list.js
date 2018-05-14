import React from 'react';
import WeatherListItem from './weather_list_item';

const WeatherList = (props) => {
    console.log();
    let listItem = props.weather
        .filter((item) => {
            return (new Date(item.dt*1000).getUTCHours() === 12);
        })
        .map((item) => {
            return (
                <WeatherListItem
                    temp={item.main.temp}
                />
            )
        });

    return <div>
        {listItem}
    </div>
};

export default WeatherList;