import React from 'react';
import '../style/style.css';
import '../style/table.css';
import '../style/button.css';
import '../style/fileInput.css';
import '../style/label.css';
import '../flexboxgrid.min.css';
import TableResults from './TableResults';
import PopUp from './PopUp';
import HelpModal from './HelpModal';
import { PageHeader } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            excelUrl: '',
            select: false,
            usuario: '',
            value: '',
            formato: '',
            archivo: null,
            total_inserciones: 0,
            good_files: null,
            bad_files: null,
            uniqueId: 0,
            status_excel: "",
            help: false
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
                alert(error);
                console.error(error);
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
        let tipoFile = '';
        if(file.name.endsWith(".xls")){
            tipoFile = 'excel'
        }else if(file.name.endsWith(".zip")){
            tipoFile = 'zip'
        }
        reader.onloadend = () => {
            this.setState({
                file: file,
                excelUrl: reader.result,
                value: tipoFile
            });
        }
        reader.readAsDataURL(file)
    }

    handClearSelectedOption = () => {
        this.setState(() => ({ help: false }));
    }

    render() {
        const wellStyles = { color: "white" };
        return (
            <div>
                <PageHeader style={wellStyles}>Módulo Carga de Datos</PageHeader>
                <div className="addExcel" >

                    <form 
                        //onSubmit={(e) => this.handleSubmit(e)}
                    >
                        <label className="label">
                            Usuario:
                        </label>
                        <input 
                            className="input input_usuario"
                            pattern=".*[^ ].*" 
                            type="text" 
                            required
                            value={this.state.usuario}
                            onChange={(e) => { this.setState({ usuario: e.target.value.trim() }) }} 
                        />
                        <input 
                            className="fileInput"
                            pattern=".*[^ ].*" 
                            type="file" 
                            required
                            accept=".xls, .zip"
                            onChange={(e) => this.handleFileChange(e)} 
                        />
                        <label className="input">
                            Tipo de Archivo: {this.state.value}
                        </label>
                        <select 
                            className="input" 
                            required
                            value={this.state.formato}
                            onChange={(e) => { this.setState({ formato: e.target.value }) }}
                        >
                            <option value="" selected data-default>Formato</option>
                            <option value="1">(1) Despues del 2010</option>
                            <option value="2">(2) Del 2010 o antes</option>
                        </select>
                        <input className="myButton" type="button" onClick={(e) => { this.setState({ help: true }) }} value="?"/>
                        <input 
                            className="myButton" 
                            type="submit" 
                            onClick={(e) => {
                                if(this.state.excelUrl.trim() === '' || this.state.value === '' || this.state.formato === '' || this.state.usuario === ''){
                                    console.log('Complete los campos.');
                                }else{
                                    this.handleSubmit(e);
                                }
                            }}
                        />
                    </form>
                    <HelpModal 
                        help={this.state.help}
                        handClearSelectedOption={this.handClearSelectedOption}
                    />
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