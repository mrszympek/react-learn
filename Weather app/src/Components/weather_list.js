import React, {Component} from 'react';
import WeatherListItem from './weather_list_item';

const WeatherList = (props) => {
    console.log();
    let listItem = props.weather.map((item) => {
        return (
            <WeatherListItem
                temp={item.main.temp}
            />
        )
    });

    return  (
        {listItem}
    )
};

export default WeatherList;