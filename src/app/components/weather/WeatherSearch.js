import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import WeatherTable from './WeatherTable';

class WeatherSearch extends Component {

    constructor() {
        super();

        this.state = {
            code: '',
            input: '',
            error: ''
        };
    }

    update(text) {
        this.setState({ error: '' });
        this.setState({ input: text });
    }

    submit(chosenRequest, index) {
        this.setState({ input: chosenRequest });

        if (states.includes(this.state.input)) {
            this.setState({ code: this.state.input });
        } else {
            this.setState({ error: 'Not a state' });
        }
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>Weather Forecasts</h1>
                    <h2>USA</h2>
                </div>
                <div>
                    <AutoComplete
                        floatingLabelText="Enter State Code, eg: CA"
                        filter={AutoComplete.caseInsensitiveFilter}
                        onNewRequest={this.submit.bind(this)}
                        onUpdateInput={this.update.bind(this)}
                        errorText={this.state.error}
                        searchText={this.state.input}
                        dataSource={states}
                        fullWidth={true}
                    />
                </div>

                {this.renderTable()}
            </div>
        );
    }

    renderTable() {
        if (this.state.code !== '') {
            return (

                <WeatherTable code={this.state.code}/>
            );
        }
    }
}

const states = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MH",
    "MA",
    "MI",
    "FM",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "VI",
    "WA",
    "WV",
    "WI",
    "WY"
];

export default WeatherSearch;
