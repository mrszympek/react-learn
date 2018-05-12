import React, {Component} from 'react';
import './App.css';

import CurrentWeather from './Components/current_weather';
import WeatherList from './Components/weather_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            weather: [],
            city: 'test'
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
                this.setState({weather, city, loading: false});
            })
    }

    render() {
        if (!this.state.loading) {
            return (
                <div>
                    <CurrentWeather weather={this.state.weather[0]} city={this.state.city}/>
                    <WeatherList weather={this.state.weather}/>
                </div>
            );
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }
}

export default App;
