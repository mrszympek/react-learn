import React from 'react'
import {calculateTemp, getDayName, setIcon} from "../helpers";

const WeatherItemList = (props) => {
    const iconUrl = setIcon(props.icon);

    let currentDay = getDayName(props.day);
    let temp = calculateTemp(props.temp);

    return (
        <div>
            <h5>{currentDay}</h5>
            <img src={iconUrl} alt=""/>
            <p>{temp}</p>
        </div>
    )
    
};

export default WeatherItemList;