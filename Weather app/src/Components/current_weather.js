import React, {Component} from 'react';
import {calculateTemp, setIcon} from "../helpers";

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
        let iconUrl = setIcon(this.state.icon);
        let temp = calculateTemp(this.state.temp);

        return (
            <div>
                <h3>{this.state.city}</h3>
                <img src={iconUrl} alt=""/>
                <p>{temp}</p>
            </div>
        )
    }
}

export default CurrentWeather;

// STATE SIE NIE UPDATUJE