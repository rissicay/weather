import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

const loadingStyle = {
    display: 'block',
    margin: '0 auto'
}

class WeatherTable extends Component {

    constructor() {
        super();

        this.state = {
            finished: 0,
            title: '',
            forecast: [],
            code: ''
        }
    }

    update(code) {
        this.setState({ 
            code: code,
            finished: 0
        });

        let url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20u%3D%20'c'%20and%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D'${code}')&format=json`

        fetch(url, {}).then((res) => {
            res.json().then((json) => {

                if (!json.query.results) {
                    this.setState({
                        finished: -1
                    });

                } else {

                    this.setState({ 
                        finished: 1,
                        title: json.query.results.channel.location.city,
                        forecast: json.query.results.channel.item.forecast
                    });
                }
            });
        });
    }

    componentDidMount() {
        this.setState({ code: this.props.code });
        this.update(this.props.code);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.code != this.state.code) {
            this.update(nextProps.code);
        }
    }

    render() {
        if (this.state.finished === 0) {
            return (
                <CircularProgress size={80} thickness={5} style={loadingStyle}/>
            );
        } else if (this.state.finished === 1) {
            return (
                <div>
                    <Table
                        fixedHeader={true}
                        fixedFooter={false}
                        selectable={false}
                        multiSelectable={false}
                        width={400}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            enableSelectAll={false}
                            adjustForCheckbox={false}
                        >
                            <TableRow>
                                <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                                    <h3>{this.state.title} 10 Day Forecast</h3>
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn><strong>Date</strong></TableHeaderColumn>
                                <TableHeaderColumn><strong>Low</strong></TableHeaderColumn>
                                <TableHeaderColumn><strong>High</strong></TableHeaderColumn>
                                <TableHeaderColumn><strong>Text</strong></TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            stripedRows={true}
                        >
                            {this.state.forecast.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{row.date}</TableRowColumn>
                                    <TableRowColumn>{row.low}</TableRowColumn>
                                    <TableRowColumn>{row.high}</TableRowColumn>
                                    <TableRowColumn>{row.text}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            );
        } else if (this.state.finished === -1) {
            return (
                <div>This state is not supported. Sorry.</div>
            )
        }
    }
}

export default WeatherTable;
