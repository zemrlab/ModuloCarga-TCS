import React from 'react';
import '../style/style.css';
import '../style/table.css';
import '../style/button.css';
import '../style/fileInput.css';
import '../style/label.css';
import '../flexboxgrid.min.css';
import TableResults from './TableResults';
import HelpModal from './HelpModal';
import DetalleModal from './DetalleModal';
import CapturaDatos from './CapturaDatos';
import Cabecera from './Cabecera';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //usados para la carga de archivos
            excelUrl: '',
            select: false,
            //captura los datos para la carga de archivos
            file: '',
            usuario: 'INVITADO',
            value: '', //zip o excel
            formato: '',
            //almacenamiento de los datos recibidos
            archivo: null,
            total_registros_insertados: 0,
            total_registros_procesados: 0,
            total_registros_excluidos: 0,
            good_files: null,
            bad_files: null,
            status_excel: "",
            //modal de ayuda
            help: false,
            //modal de detalles de duplicados
            detalle: false,
            lista_detalle: []

        };
    }
    
    //metodo de carga del archivo
    handleSubmit = (e) => {
        e.preventDefault();
        //indicamos que el archivo ha sido enviado
        this.setState({
            select: true
        });
        //cargamos los datos a un FormData
        var data = new FormData();
        data.append('file', this.state.file);
        data.append('tipo', this.state.value);
        data.append('name', this.state.usuario);
        data.append('formato', this.state.formato);
        //escribimos los parametros para el envio tipo POST
        let sentData = {
            method: 'POST',
            body: data
        };
        //indicamos la url a donde enviaremos y recibiremos la data
        fetch('http://159.65.73.15:5000/upload', sentData)
            .then(response => {
                //capturamos la respuesta para zip
                if (this.state.value === "zip") {
                    response.json()
                        .then((json) => this.setState({
                            archivo: json.file,
                            total_registros_insertados: json.good_files.total_registros_insertados,
                            total_registros_procesados: json.good_files.total_registros_procesados,
                            total_registros_excluidos: json.good_files.total_registros_excluidos,
                            good_files: json.good_files.lista_detalle,
                            bad_files: json.bad_files
                        })
                        );
                }
                //capturamos la respuesta para excel
                else {
                    response.json()
                        .then((json) => this.setState({
                            archivo: json.filename,
                            status_excel: json.status,
                            total_registros_insertados: json.registros_insertados,
                            total_registros_procesados: json.registros_procesados,
                            total_registros_excluidos: json.registros_excluidos,
                            lista_detalle: json.registros_duplicados_detalle
                        })
                        );
                }
            })
            //capturamos cualqueir error producido
            .catch(error => {
                alert('Error de conexion con la Base de Datos');
                console.error(error);
            });
    }

    //el primer componente que se ejecutará
    componentDidMount() {
        //captura del nombre de llegada
        var name = "nombre";
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.search);
        var usuario = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        //muestra en consola
        console.log(usuario);
        //modificamos el usuario
        if (usuario !== "") {
            this.setState({
                usuario: usuario
            })
        }
    }

    //metodo de modificación de archivos
    handleFileChange = (e) => {
        e.preventDefault();
        //restauramos los parametros frente a una posible nueva carga
        this.setState({
            archivo: null,
            total_inserciones: 0,
            good_files: [],
            bad_files: [],
            status_excel: "",
            select: false
        })

        try {
            //capturamos los datos necesarios del archivo seleccionado
            let reader = new FileReader();
            let file = e.target.files[0];
            let tipoFile = '';
            //capturamos el formato
            if (file.name.endsWith(".xls")) {
                tipoFile = 'excel'
            } else if (file.name.endsWith(".zip")) {
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
        } catch (e) {
            console.error(e);
        }
    }

    //metodo de cambio de formato del archivo (1 o 2)
    changeFormato = (formato) => {
        this.setState(()=>({
            formato: formato
        }))
    }

    //metodo de despliegue de ayuda para la selección del formato
    ayudaModal = () => {
        this.setState(() => ({ help: true }));
    }

    //metodo para el cierre de la ayuda
    handClearSelectedOption = () => {
        this.setState(() => ({ help: false }));
    }

    //capturamos la lista de detalles y desplegamos el modal
    openModalDetalle = (lista_detalle) => {
        this.setState(() => ({
            lista_detalle: lista_detalle,
            detalle: true
        }))
    }

    //cerramos el modal
    closeModalDetalle = () => {
        this.setState(() => ({
            detalle: false
        }))
    }

    render() {
        return (
            <div>
                <Cabecera/>
                <div className="vista" >
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <label className="label">
                                USUARIO: {this.state.usuario}
                            </label>
                        </div>
                    </div>
                    <CapturaDatos
                        value={this.state.value}
                        formato={this.state.formato}
                        excelUrl={this.state.excelUrl}
                        handleFileChange={this.handleFileChange}
                        changeFormato={this.changeFormato}
                        ayudaModal={this.ayudaModal}
                        handleSubmit={this.handleSubmit}
                    />
                    <HelpModal
                        help={this.state.help}
                        handClearSelectedOption={this.handClearSelectedOption}
                    />
                    <br />
                    <hr />
                    <br />
                    <div>
                        <TableResults
                            archivo={this.state.archivo}
                            total_registros_insertados={this.state.total_registros_insertados}
                            total_registros_excluidos={this.state.total_registros_excluidos}
                            total_registros_procesados={this.state.total_registros_procesados}
                            good_files={this.state.good_files}
                            bad_files={this.state.bad_files}
                            status={this.state.status_excel}
                            select={this.state.select}
                            tipo={this.state.value}
                            openModalDetalle={this.openModalDetalle}
                            lista_detalle={this.state.lista_detalle}
                        />
                    </div>
                    <DetalleModal
                        detalle={this.state.detalle}
                        closeModalDetalle={this.closeModalDetalle}
                        lista_detalle={this.state.lista_detalle}
                    />
                </div>
            </div>
        )
    }
}

export default App;