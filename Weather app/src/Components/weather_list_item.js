import React from 'react'
import {calculateTemp, getDayName, setIcon} from "../helpers";

const weatherItem = {
    padding: '0 16px',
    textAlign: 'center'
};

const WeatherItemList = (props) => {
    const iconUrl = setIcon(props.icon);

    let currentDay = getDayName(props.day);
    let minTemp = calculateTemp(props.minTemp);
    let maxTemp = calculateTemp(props.maxTemp);

    return (
        <div style={weatherItem}>
            <h5>{currentDay}</h5>
            <img src={iconUrl} alt=""/>
            <p>{minTemp} / {maxTemp}</p>
        </div>
    )

};

export default WeatherItemList;