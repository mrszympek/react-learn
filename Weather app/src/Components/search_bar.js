import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            cityCode: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.setCurrentWeather = this.setCurrentWeather.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    setCurrentWeather() {
        this.props.setCurrentWeather(this.state.city, this.state.cityCode);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="City..." name="city" onChange={this.handleChange}/>
                <input type="text" placeholder="Code..." name="cityCode" onChange={this.handleChange}/>
                <button onClick={this.setCurrentWeather}>Search</button>
            </div>
        );
    }

};

export default SearchBar;