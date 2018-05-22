import React, {Component} from 'react';
import {calculateTemp, setIcon} from "../helpers";

const currentWeather = {
    textAlign: 'center'
};

class CurrentWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            temp: '',
            icon: ''
        }
    }

    componentWillReceiveProps(props) {
        this.setState({city: props.city, temp: props.weather.main.temp, icon: props.weather.weather[0].icon});
    }

    render() {
        console.log('current', this.state.city);
        let iconUrl = setIcon(this.state.icon);
        let temp = calculateTemp(this.state.temp);

        return (
            <div style={currentWeather}>
                <h3>{this.state.city}</h3>
                <img src={iconUrl} alt=""/>
                <p>{temp}</p>
            </div>
        )
    }
}

export default CurrentWeather;