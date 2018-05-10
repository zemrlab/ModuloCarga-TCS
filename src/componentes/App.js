import React from 'react';
import '../style/style.css';
import '../style/table.css';
import '../style/button.css';
import '../style/fileInput.css';
import '../style/label.css';
import '../flexboxgrid.min.css';
import TableResults from './TableResults';
import { PageHeader } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            excelUrl: '',
            select: false,
            usuario: '',
            value: 'a',
            formato: 'a',
            archivo: null,
            total_inserciones: 0,
            good_files: null,
            bad_files: null,
            uniqueId: 0,
            status_excel: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            select: true
        });

        var data = new FormData();
        data.append('file', this.state.file);
        data.append('tipo', this.state.value);
        data.append('name', this.state.usuario);
        data.append('formato', this.state.formato);

        console.log(this.state.file);
        this.setState((prevState) => ({ uniqueId: prevState.uniqueId + 1 }))

        let sentData = {
            method: 'POST',
            //mode: 'no-cors',
            body: data
        };

        fetch('http://167.99.111.240/recaudaciones/upload/', sentData)
            .then(response => {
                if (this.state.value === "zip") {
                    response.json()
                        .then((json) => this.setState({
                            archivo: json['file'],
                            total_inserciones: json['total_inserciones'],
                            good_files: json['good_files'],
                            bad_files: json['bad_files'],
                            status_excel: "Ha sido subido en formato '.xls'"
                        })
                        );
                } else {
                    response.json()
                        .then((json) => this.setState({
                            archivo: json['file'],
                            status_excel: json['status'],
                            total_inserciones: json['nro_registros'],
                            good_files: [],
                            bad_files: []
                        })
                        );
                }
            })
            .catch(error => {
                console.error(error)
            });
    }

    handleFileChange(e) {
        e.preventDefault();

        this.setState({
            archivo: null,
            total_inserciones: 0,
            good_files: [],
            bad_files: [],
            status_excel: "",
            select: false
        })

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

    render() {
        const wellStyles = { color: "white" };
        return (
            <div>
                <PageHeader style={wellStyles}>Módulo Carga de Datos</PageHeader>
                <div className="addExcel" >
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label className="label">
                            Usuario:
                            <input
                                className="input input_usuario"
                                type="text"
                                value={this.state.usuario}
                                onChange={(e) => { this.setState({ usuario: e.target.value }) }}
                            />
                        </label>
                        <input className="fileInput"
                            type="file"
                            onChange={(e) => this.handleFileChange(e)} />
                        <label>
                            <select
                                className="input"
                                value={this.state.value}
                                onChange={(e) => { this.setState({ value: e.target.value }) }}
                            >
                                <option value="a" disabled>Tipo de Archivo</option>
                                <option value="excel">Excel (.xls)</option>
                                <option value="zip">Zip (.zip)</option>
                            </select>
                        </label>
                        <label>
                            <select
                                className="input"
                                value={this.state.formato}
                                onChange={(e) => { this.setState({ formato: e.target.value }) }}
                            >
                                <option value="a" disabled>Formato</option>
                                <option value="1">Antes del 2010</option>
                                <option value="2">Despues del 2010</option>
                            </select>
                        </label>
                        <button
                            disabled={this.state.excelUrl.trim() === ''}
                            className="myButton"
                            type="submit"
                            onClick={(e) => this.handleSubmit(e)}>Subir Archivo</button>
                    </form>
                    <hr />
                    <div key={this.state.uniqueId}>
                        <TableResults
                            archivo={this.state.archivo}
                            total_inserciones={this.state.total_inserciones}
                            good_files={this.state.good_files}
                            bad_files={this.state.bad_files}
                            status={this.state.status_excel}
                            select={this.state.select}
                            tipo={this.state.value}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;