import React from 'react';

const CurrentWeather = ({weather, city, calculateTemp}) => {
    if(!weather) {
        return <div>loading...</div>
    }

    const temp = weather.main.temp;
    const iconId = weather.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconId}.png`


    return (
        <div>
            <h2>{city}</h2>
            <img src={iconUrl} alt=""/>
            <p>{calculateTemp(temp)}</p>
        </div>
    );
};


export default CurrentWeather;