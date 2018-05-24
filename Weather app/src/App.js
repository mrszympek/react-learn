import React, {Component} from 'react';
import './App.css';

import SearchBar from './Components/search_bar';
import CurrentWeather from './Components/current_weather';
import WeatherList from './Components/weather_list';

const weatherWrap = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'f74df980fa4dfddbdd9152467484cea7',
            loading: true,
            weather: [],
            city: '',
            coords: {}
        };

        this.getCurrentPosition = this.getCurrentPosition.bind(this);
        this.setCurrentWeather = this.setCurrentWeather.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
    }


    componentDidMount() {
        this.setCurrentCoord();
    }

    setCurrentCoord() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCurrentPosition, this.setCurrentWeather("warsaw", "pl"));
        } else {
            alert("You browser doesn't support geolocation");
        }
    }

    getCurrentPosition(position) {
        let {latitude, longitude} = position.coords;
        this.setState({coords: {latitude, longitude}});
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&APPID=${this.state.apiKey}`;
        this.getWeatherData(url);
    }

    setCurrentWeather(city, code) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${code}&appid=${this.state.apiKey}`;
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

        console.log(this.state.city);
        if (!this.state.loading) {
            return (
                <div style={weatherWrap}>
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
