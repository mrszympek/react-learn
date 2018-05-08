import React, {Component} from 'react';
import './App.css';

import CurrentWeather from './Components/current_weather';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: [],
            city: ''
        }
    }

    componentDidMount() {
        const apiKey = 'f74df980fa4dfddbdd9152467484cea7';
        const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const weather = response.list;
                const city = response.city.name;
                this.setState({weather, city});

                console.log(weather)
            })
    }

    calculateTemp(temp) {
        return Math.round(((temp - 273.15) * 100) / 100).toFixed(1) + "°C"
    }

    render() {
        return (
            <div>
                <CurrentWeather weather={this.state.weather[0]} city={this.state.city} calculateTemp={this.calculateTemp}/>
            </div>
        );
    }
}

export default App;
