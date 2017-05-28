import React, { Component } from 'react';

class WeatherTable extends Component {

    render() {
        return (
            <div>
                <h4>California</h4>
                <br/><br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Low</th>
                            <th>High</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01 Dec 2016</td>
                            <td>23</td>
                            <td>52</td>
                            <td>Partly Cloudy</td>
                        </tr>
                        <tr>
                            <td>02 Dec 2016</td>
                            <td>21</td>
                            <td>47</td>
                            <td>Sunny</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherTable;
