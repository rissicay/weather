import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.scss';
import WeatherSearch from './components/weather/WeatherSearch';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <WeatherSearch />
    </MuiThemeProvider>
)

export default App;
