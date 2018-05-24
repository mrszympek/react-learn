import React, {Component} from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        const term = e.target.value;
        this.setState({ term });
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.state.term}
                       placeholder="Get a forecast"
                       className="form-control"
                       type="text"
                       onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}