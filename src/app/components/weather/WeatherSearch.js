import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

import WeatherTable from './WeatherTable';

const buttonStyle = {
    margin: 10,
}

class WeatherSearch extends Component {
    render() {
        return (
            <div>
                <h1>Weather Forecasts</h1>
                <h2>USA</h2>
		<AutoComplete
                    floatingLabelText="Enter State Code, eg: CA"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={states}
                />
                <RaisedButton label="Go" primary={true} style={buttonStyle} />

                <WeatherTable />
            </div>
        );
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
