import React, {Component} from 'react';
import './App.css';

import SearchBar from './Components/search_bar';
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

        this.getCurrentPosition = this.getCurrentPosition.bind(this);
        this.setCurrentWeather = this.setCurrentWeather.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCurrentPosition, this.setCurrentWeather("warsaw", "pl"));
        } else {
            alert("You browser doesn't support geolocation");
        }
    }

    getCurrentPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const apiKey = 'f74df980fa4dfddbdd9152467484cea7'; // moge apiKey trzymac w state ?
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${apiKey}`;

        this.getWeatherData(url);
    }

    setCurrentWeather(city, code) {
        const apiKey = 'f74df980fa4dfddbdd9152467484cea7';
        const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city},${code}&appid=${apiKey}`;
        this.getWeatherData(url);
    }

    getWeatherData(url) {
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
                    <SearchBar setCurrentWeather={this.setCurrentWeather}/>
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
