
import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';

class AppProgressBar extends Component {
    constructor() {
        super();
        this.state = {
            percent: 0,
            color: '#3FC7FA',
        };
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        var intervalId = setInterval(this.changeState, 100);
        // store intervalId in the state so it can be accessed later:
        //this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        //clearInterval(this.state.intervalId);
    }

    changeState() {
        const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
        const newPercent = this.state.percent + 1;
        if (newPercent < 40) {
            this.setState({
                percent: newPercent,
                color: colorMap[2]
            });
        } else if (newPercent < 95) {
            this.setState({
                percent: newPercent,
                color: colorMap[1]
            });
        } else if (newPercent < 101) {
            this.setState({
                percent: newPercent,
                color: colorMap[0]
            });
        } else {
            //clearInterval(this.state.intervalId);
        }
    }

    render() {
        const containerStyle = {
            width: '250px',
        };
        const circleContainerStyle = {
            width: '250px',
            height: '250px',
            display: 'inline-block',
        };
        return (
            <div>
                <h2>Line Progress {this.state.percent}%</h2>
                <div style={containerStyle}>
                    <Line percent={this.state.percent} strokeWidth="4" strokeColor={this.state.color} />
                </div>
                <h2>Circle Progress {this.state.percent}%</h2>
                <div style={circleContainerStyle}>
                    <Circle
                        percent={this.state.percent}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeColor={this.state.color}
                    />
                </div>
            </div>
        );
    }
}

export default AppProgressBar;