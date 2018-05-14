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
        };

        this.setCurrentPosition = this.setCurrentPosition.bind(this);
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setCurrentPosition);
        } else {
            alert("geolocation is not supported");
        }
    }

    setCurrentPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const apiKey = 'f74df980fa4dfddbdd9152467484cea7';


        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}`;
        console.log(url);

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
