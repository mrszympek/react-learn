import React, {Component} from 'react';
import {calculateTemp} from "../helpers";

class CurrentWeather extends Component{
    constructor(props) {
        super(props);

        this.state = {
            city: this.props.city,
            temp: this.props.weather.main.temp,
            icon: this.props.weather.weather[0].icon,
        }
    }

    render() {
        let iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

        return (
            <div>
                <h3>{this.state.city}</h3>
                <img src={iconUrl} alt=""/>
                <p>{calculateTemp(this.state.temp)}</p>
            </div>
        )
    }
}

export default CurrentWeather;