import React from 'react';
import AppProgressBar from "./AppProgressBar";
import { Line, Circle } from 'rc-progress';
import { NavLink } from 'react-router-dom';
import '../style/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            excelUrl: '',
            mostrarBar: false,
            percent: 0,
            color: '#3FC7FA',
            respuesta: null
        };
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        var x = document.getElementById("showBar");
        var y = document.getElementById("showResultado");
        x.style.display = "none"
        y.style.display = "none"
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.mostrarBar !== this.state.mostrarBar) {
            var intervalId = setInterval(this.changeState, 1);
        }
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('file', this.state.file);
        data.append('remark', "pruebas")
        console.log(this.state.file);

        let header = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let sentData = {
            method: 'POST',
            mode: 'no-cors',
            header: header,
            body: data
        };
        fetch('http://18.216.135.31:8080/recaudaciones/upload/', sentData)
            .then((response) => {
                this.setState({ respuesta: response })
            })
            .catch(error => {
                // si hay algún error lo mostramos en consola
                console.error(error)
            });

        this.setState((prevState) => ({
            mostrarBar: true,
            percent: 1
        }));

        var x = document.getElementById("showBar");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    _handleFileChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                excelUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    changeState() {
        const colorMap = ['#333745', '#85D262', '#FE8C6A'];
        let newPercent = this.state.percent + 1;
        console.log(this.state.respuesta);
        if (!this.state.respuesta) {
            this.setState({
                percent: newPercent,
                color: colorMap[0]
            });
        }else{
            newPercent = 100;
            this.setState({
                percent: newPercent,
                color: colorMap[0]
            });
        }
        // if (newPercent < 40) {
        //     this.setState({
        //         percent: newPercent,
        //         color: colorMap[2]
        //     });
        // } else if (newPercent < 95) {
        //     this.setState({
        //         percent: newPercent,
        //         color: colorMap[1]
        //     });
        // } else if (newPercent < 100) {
        //     this.setState({
        //         percent: newPercent,
        //         color: colorMap[0]
        //     });
        // } else if(newPercent === 100){
        //     this.setState({
        //         percent: newPercent,
        //         color: colorMap[0]
        //     });
        //     var x = document.getElementById("showResultado");
        //     x.style.display = "block";
        // } else{
        //     //clearInterval(this.state.intervalId);
        // }
    }

    render() {
        const containerStyle = {
            width: '350px',
        };
        const circleContainerStyle = {
            width: '350px',
            height: '350px',
            display: 'inline-block',
        };
        return (
            <div>
                <div className="addExcel" >
                    <form onSubmit={(e) => this._handleSubmit(e)}>
                        <input className="fileInput"
                            type="file"
                            onChange={(e) => this._handleFileChange(e)} />
                        <button
                            disabled={this.state.excelUrl.trim() == ''}
                            className="submitButton"
                            type="submit"
                            onClick={(e) => this._handleSubmit(e)}>Cargar Excel</button>
                    </form>
                </div>

                <div className="bar" id="showBar">
                    <div style={circleContainerStyle}>
                        <Circle
                            percent={this.state.percent}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeColor={this.state.color}
                        />
                    </div>
                    <div style={containerStyle}>
                        <Line percent={this.state.percent} strokeWidth="4" strokeColor={this.state.color} />
                    </div>
                    <h4>Progress: {this.state.percent}%</h4>
                </div>
                <div className="" id="showResultado">
                    <NavLink to="/results" activeClassName="is-active" exact={true}>Ver Resultados</NavLink>
                </div>
            </div>
        )
    }
}

export default App;