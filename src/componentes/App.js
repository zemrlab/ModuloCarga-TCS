import React from 'react';
import AppProgressBar from "./AppProgressBar";
import TableHeader from './Table-Header';
import ResultadoList from './Resultado-list';
import { Line, Circle } from 'rc-progress';
//import '../style/style.css';
import prueba from './prueba';
import TableResults from './TableResults';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            excelUrl: '',
            usuario: 'Anonymous',
            value: 'a',
            archivo: null,
            total_inserciones: 0,
            good_files: 0,
            bad_files: 0
        };
        this.handleChange = this.handleChange.bind(this);
        //this.handleFileChange = this.handleFileChange.bind(this);
    }

    // componentDidMount() {
    //     var x = document.getElementById("showBar");
    //     var y = document.getElementById("showResultado");
    //     x.style.display = "none"
    //     y.style.display = "none"
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.mostrarBar !== this.state.mostrarBar) {
    //         var intervalId = setInterval(this.changeState, 1);
    //     }
    // };

    handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();
        data.append('file', this.state.file);
        data.append('tipo', "zip");
        data.append('name', "Ccopa");
        console.log(this.state.file);

        let sentData = {
            method: 'POST',
            mode: 'no-cors',
            body: data
        };
        // fetch('http://18.216.135.31:8080/recaudaciones/upload/', sentData)
        // .then(response => {
        //     response.json()
        //         .then((json) => this.setState({
        //             resultado: json
        //         })
        //         );

        // })
        // .catch(error => {
        //     console.error(error)
        // });

        alert(this.state.usuario);
        console.log(this.state.value);
        console.log(this.state.file);

        this.setState({
            archivo: prueba.file,
            total_inserciones: prueba.total_inserciones,
            good_files: prueba.good_files,
            bad_files: prueba.bad_files
        })

        // const url = 'http://localhost:3000/content';
        // fetch(url)
        //     .then(respuesta => {
        //         respuesta.json()
        //             .then((json) => this.setState({
        //                 resultado: json
        //             })
        //             )
        //     })
        //     .catch(error => console.error(error));
    }

    handleFileChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                excelUrl: reader.result,
            });
        }
        reader.readAsDataURL(file)
    }

    handleChange(event) {
        this.setState({ usuario: event.target.value2 });
        //alert(this.state.usuario);
    }

    // changeState() {
    //     const colorMap = ['#333745', '#85D262', '#FE8C6A'];
    //     let newPercent = this.state.percent + 1;

    //     if (!this.state.respuesta) {
    //         this.setState({
    //             percent: newPercent,
    //             color: colorMap[0]
    //         });
    //     }else{
    //         newPercent = 100;
    //         this.setState({
    //             percent: newPercent,
    //             color: colorMap[0]
    //         });
    //         var x = document.getElementById("showResultado");
    //         x.style.display = "block"
    //         //console.log(JSON.stringify(this.state.respuesta['total_inserciones']));
    //     }
    // }

    render() {
        return (
            <div>
                <div className="addExcel" >
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label>
                            Usuario:
                                <input
                                type="text" value2={this.state.usuario} onChange={this.handleChange}
                            />
                        </label>
                        <input className="fileInput"
                            type="file"
                            onChange={(e) => this.handleFileChange(e)} />
                        <label>
                            <select
                                value={this.state.value}
                                onChange={(e) => { this.setState({ value: e.target.value }) }}
                            >
                                <option value="a" disabled>Tipo de Archivo</option>
                                <option value="excel">Excel (.xls)</option>
                                <option value="zip">Zip (.zip)</option>
                            </select>
                        </label>
                        <button
                            disabled={this.state.excelUrl.trim() == ''}
                            className="submitButton"
                            type="submit"
                            onClick={(e) => this.handleSubmit(e)}>Cargar Excel</button>
                    </form>
                    <TableResults
                        archivo={this.state.archivo}
                        total_inserciones={this.state.total_inserciones}
                        good_files={this.state.good_files}
                        bad_files={this.state.bad_files}
                    />
                </div>
            </div>
        )
    }
}

export default App;